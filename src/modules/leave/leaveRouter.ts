import { Router } from "express";
import { upsertLeavePolicyEndpoint } from "./upsert-leave-policy";
import { managerLeaveListEndpoint } from "./manager-leave-list";
import { approveRejectLeaveEndpoint } from "./approve-reject-leave";
import { applyLeaveEndpoint } from "./apply-leave";
import { getAvailableLeavesEndpoint } from "./available-leaves";
import { getEmployeeLeaveHistoryEndpoint } from "./fetch-historical-leaves";

const leaveRouter = Router();

leaveRouter.post('/apply-leave', applyLeaveEndpoint)
leaveRouter.post('/approve-reject-leave', approveRejectLeaveEndpoint)
leaveRouter.get('/available-leaves', getAvailableLeavesEndpoint)
leaveRouter.get('/fetch-historical-leaves', getEmployeeLeaveHistoryEndpoint)
leaveRouter.get('/manager-leave-list', managerLeaveListEndpoint)
leaveRouter.post('/upsert-leave-policy', upsertLeavePolicyEndpoint)

export default leaveRouter;
