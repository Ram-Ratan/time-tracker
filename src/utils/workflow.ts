import { logger } from '@talent-monk/utils';
import { appConstants } from 'appConstants/index';
import axios from 'axios';
import { z } from 'zod';
import { Request } from 'express';

export const ZUserTypeMap = z.object({ userAuthId: z.string(), userEmail: z.string() });

const ZUserSteps = z.object({
    name: z.string(),
    index: z.number().int(),
    approvals: z.array(ZUserTypeMap)
});

export const Data = z.object({
    body: z.object({ name: z.string(), totalSteps: z.number(), steps: ZUserSteps })
});
export type reqSchema = z.TypeOf<typeof Data>;

const ZWorkflowTaskAction = z.object({
    id: z.string(),
    workflowId : z.string(),
    action: z.enum(['approve', 'reject']),
    body: z
        .object({
            comment: z.string().optional(),
            metadata: z.record(z.string(), z.any()).optional()
        })
        .optional()
});

export type takeWorkflowActionT = z.TypeOf<typeof ZWorkflowTaskAction>;

const ZResolve = z
    .object({
        service: z.enum(['BENEFIT']),
        endpoint: z.string()
    })
    .optional();

const ZworkflowParams = z.object({ params: z.object({ id: z.string() }) });
export const InitData = z.object({
    params: z.object({ id: z.string() }),
    body: z.object({ resolve: ZResolve })
});

export type initReqSchema = z.TypeOf<typeof InitData>;
export type workflowReqSchema = z.TypeOf<typeof ZworkflowParams>;

export const createWorkflow = async (data: reqSchema, req?: Request) => {
    try {
        logger.log.info('CREATE POLICY WORKFLOW STARTED');

        const reqURL = `${appConstants.WORKFLOW_SERVICE_URL}/workflow/create-workflow`;
        const response = await axios.post(reqURL, JSON.stringify(data.body), {
            headers: {
                'Content-Type': 'application/json',
                ['x-access-token']: req?.headers['x-access-token'],
                ['x-id-token']: req?.headers['x-id-token']
            }
        });

        logger.log.info('CREATE POLICY WORKFLOW FINISHED');
        return response;
    } catch (error) {
        throw error;
    } finally {
        logger.popContext();
    }
};

export const initiateWorkflowService = async (data: initReqSchema, req?: Request) => {
    try {
        logger.log.info('INITIATE POLICY WORKFLOW STARTED');

        const reqURL = `${appConstants.WORKFLOW_SERVICE_URL}/workflow/initiate-workflow/${data.params.id}`;
        const response = await axios.post(reqURL, JSON.stringify(data.body), {
            headers: {
                'Content-Type': 'application/json',
                ['x-access-token']: req?.headers['x-access-token'],
                ['x-id-token']: req?.headers['x-id-token']
            }
        });

        logger.log.info('INITIATE POLICY WORKFLOW FINISHED');
        return response;
    } catch (error) {
        throw error;
    } finally {
        logger.popContext();
    }
};

export const getWorkflowLogs = async (data: workflowReqSchema, req?: Request) => {
    try {
        logger.log.info('GET POLICY WORKFLOW LOGS STARTED');

        const reqURL = `${appConstants.WORKFLOW_SERVICE_URL}/workflow/get-workflow-log/${data.params.id}`;
        const response = await axios.get(reqURL, {
            headers: {
                ['x-access-token']: req?.headers['x-access-token'],
                ['x-id-token']: req?.headers['x-id-token']
            }
        });

        logger.log.info('GET POLICY WORKFLOW LOGS FINISHED');
        return response;
    } catch (error) {
        throw error;
    } finally {
        logger.popContext();
    }
};

export const getWorkflowDetails = async (data: workflowReqSchema, req?: Request) => {
    try {
        logger.log.info('GET POLICY WORKFLOW DETAILS STARTED');

        const reqURL = `${appConstants.WORKFLOW_SERVICE_URL}/workflow/get-workflow/${data.params.id}`;
        const response = await axios.get(reqURL, {
            headers: {
                ['x-access-token']: req?.headers['x-access-token'],
                ['x-id-token']: req?.headers['x-id-token']
            }
        });

        logger.log.info('GET POLICY WORKFLOW DETAILS FINISHED');
        return response;
    } catch (error) {
        throw error;
    } finally {
        logger.popContext();
    }
};

export const cancelPolicyWorkflow = async (data: workflowReqSchema, req?: Request) => {
    try {
        logger.log.info('CANCEL POLICY WORKFLOW LOGS STARTED');

        const reqURL = `${appConstants.WORKFLOW_SERVICE_URL}/workflow/cancel-workflow/${data.params.id}`;
        const response = await axios.post(
            reqURL,
            {},
            {
                headers: {
                    ['x-access-token']: req?.headers['x-access-token'],
                    ['x-id-token']: req?.headers['x-id-token']
                }
            }
        );

        logger.log.info('CANCEL POLICY WORKFLOW LOGS FINISHED');
        return response;
    } catch (error) {
        throw error;
    } finally {
        logger.popContext();
    }
};

export const cancelWorkflow = async (workflowId: string, req?: Request) => {
    try {
        logger.log.info('WORKFLOW CANCELLATION STARTED');
        const reqURL = `${appConstants.WORKFLOW_SERVICE_URL}/workflow/cancel-workflow/${workflowId}`;
        const response = await axios.post(
            reqURL,
            {},
            {
                headers: {
                    ['x-access-token']: req?.headers['x-access-token'],
                    ['x-id-token']: req?.headers['x-id-token']
                }
            }
        );

        logger.log.info('WORKFLOW CANCELLATION FINISHED');
        return response;
    } catch (error) {
        throw error;
    } finally {
        logger.popContext();
    }
};

export const takeWorkflowTaskAction = async (data: takeWorkflowActionT, req?: Request) => {
    try {
        logger.log.info('WORKFLOW TASK ACTION STARTED');

        let reqURL = "";

        switch (data.action) {
            case 'approve':
                reqURL = `${appConstants.WORKFLOW_SERVICE_URL}/workflow/task-action/${data.id}/approve`;
                break;
            case 'reject':
                reqURL = `${appConstants.WORKFLOW_SERVICE_URL}/workflow/reject-workflow/${data.workflowId}`;
                break;
            case 'send-back':
                reqURL = `${appConstants.WORKFLOW_SERVICE_URL}/workflow/task-action/${data.id}/reject`;
                break;
            default:
                throw new Error('Invalid action');
        }
        
        const response = await axios.post(reqURL, data.body ?? {}, {
            headers: {
                ['x-access-token']: req?.headers['x-access-token'],
                ['x-id-token']: req?.headers['x-id-token']
            }
        });

        logger.log.info('WORKFLOW TASK ACTION FINISHED');
        return response;
    } 
    catch (error) {
        throw error;
    } finally {
        logger.popContext();
    }
};
