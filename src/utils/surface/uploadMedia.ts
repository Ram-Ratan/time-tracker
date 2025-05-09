import { HttpException, logger, uploadFileBlob } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import { createServiceWithZodOld } from '@talent-monk/utils';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { uploadMediaServiceOutput } from 'utils/types';
import { orgContainers } from 'utils/constant';
import { appConstants } from '../../appConstants';
const MEGA_BYTE_1_IN_BYTES = 1048576;

export const uploadMediaService = createServiceWithZodOld(
    z.object({
        files: z.array(z.any()).default([]),
        containerName: z.string(),
        userAuthId: z.string(),
        orgId: z.string()
    }),
    uploadMediaServiceOutput,
    async (input) => {
        try {
            const allowedImageMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
            const allowedVideoMimeTypes = ['video/mp4', 'video/mov'];
            const responseData = await Promise.all(
                input.files.map(async (inputFile: Express.Multer.File) => {
                    const file: Express.Multer.File = inputFile;

                    const filename = file.originalname;
                    const extensionRegexMatch = filename.match(/\.(.+)$/);
                    if (!extensionRegexMatch) {
                        throw new HttpException(StatusCodes.BAD_REQUEST, 'Extension not readable!');
                    }
                    const afterFirstExtension = extensionRegexMatch[1];
                    if (afterFirstExtension.indexOf('.') !== -1) {
                        throw new HttpException(
                            StatusCodes.BAD_REQUEST,
                            'Files with two or more extensions are not allowed!'
                        );
                    }

                    let blobName = '';
                    const orgContainer = appConstants.STORAGE_CONTAINER;
                    const orgId = input.orgId.split('org_')[1];

                    if (orgContainers.includes(input.containerName)) {
                        blobName = `${orgId}/${input.containerName}/${uuidv4()}.${
                            file.mimetype?.split('/')[1] as string
                        }`;
                    } else {
                        blobName = `${orgId}/${input.userAuthId}/${uuidv4()}.${
                            file.mimetype?.split('/')[1] as string
                        }`;
                    }
                    if (allowedImageMimeTypes.includes(file.mimetype)) {
                        if (file.buffer.byteLength > 12 * MEGA_BYTE_1_IN_BYTES) {
                            throw new HttpException(
                                StatusCodes.METHOD_NOT_ALLOWED,
                                'Image is too big or unsupported format',
                                {
                                    size: `${(
                                        file.buffer.byteLength / MEGA_BYTE_1_IN_BYTES
                                    ).toFixed(2)} MB`,
                                    fileType: file.mimetype
                                }
                            );
                        } else {
                            logger.log.info('FILE VALIDATION SUCCESS');
                            // upload photos to azure
                            const url = await uploadFileBlob({
                                containerName: orgContainer,
                                blobName,
                                file: file.buffer
                            });
                            return {
                                url,
                                fileType: file.mimetype,
                                size: (file.buffer.byteLength / MEGA_BYTE_1_IN_BYTES).toFixed(2)
                            };
                        }
                    } else if (allowedVideoMimeTypes.includes(file.mimetype as string)) {
                        if (file.buffer.byteLength > 50 * MEGA_BYTE_1_IN_BYTES) {
                            throw new HttpException(
                                StatusCodes.METHOD_NOT_ALLOWED,
                                'Video is big or unsupported format',
                                {
                                    size: `${(
                                        file.buffer.byteLength / MEGA_BYTE_1_IN_BYTES
                                    ).toFixed(2)} MB`
                                }
                            );
                        } else {
                            logger.log.info('FILE VALIDATION SUCCESS');
                            // upload photos to azure
                            const url = await uploadFileBlob({
                                containerName: orgContainer,
                                blobName,
                                file: file.buffer
                            });

                            return {
                                url,
                                fileType: file.mimetype,
                                size: (file.buffer.byteLength / MEGA_BYTE_1_IN_BYTES).toFixed(2)
                            };
                        }
                    } else {
                        throw new HttpException(
                            StatusCodes.METHOD_NOT_ALLOWED,
                            'Unsupported media type',
                            {
                                size: `${(file.buffer.byteLength / MEGA_BYTE_1_IN_BYTES).toFixed(
                                    2
                                )} MB`,
                                fileType: file.mimetype
                            }
                        );
                    }
                })
            );

            return responseData as z.infer<typeof uploadMediaServiceOutput>;
        } catch (error) {
            throw error;
        }
    }
);
