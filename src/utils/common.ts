import { HttpException, getKey } from '@talent-monk/utils';
import { StatusCodes } from 'http-status-codes';
import moment from 'moment';

export const localDateConvert = () => {
    const now = moment();
    const current = now.format('YYYY-MM-DD HH:mm:ss.SSS');
    const startDay = now.startOf('day').format('YYYY-MM-DD HH:mm:ss.SSS');
    const endDay = now.endOf('day').format('YYYY-MM-DD HH:mm:ss.SSS');

    return {
        current,
        startDay,
        endDay
    };
};

//Restart

export const getDbUrlByOrgId = async (organizationId: string) => {
    const orgId = organizationId.split('org_');

    if (!orgId) {
        throw new HttpException(StatusCodes.UNAUTHORIZED, 'UTILS:  ORG ID MISSING FOR USER', {});
    }
    const dbURL = await getKey(orgId[1]);
    return dbURL;
};

export const redisKey = {
    compensationEligibilityUserIds: 'compensationEligibilityUserIds'
};
