import { Router } from "express";
import { getAllHolidaysForUserEndpoint } from "./get-user-holidays";
import { getCommonHolidaysEndpoint } from "./get-common-holidays";
import { upsertHolidayEndpoint } from "./upsert-holidays";
import { applyOptionalHolidayEndpoint } from "./apply-optional-holiday";
import { getHolidayDetailsEndpoint } from "./get-holiday-details";
import { getOptionalHolidaysForUserThisYearEndpoint } from "./get-optional-holidays";

const holidaysRouter = Router();

holidaysRouter.get('/get-user-holidays', getAllHolidaysForUserEndpoint)
holidaysRouter.get('/get-common-holidays', getCommonHolidaysEndpoint)
holidaysRouter.post('/upsert-holidays', upsertHolidayEndpoint)
holidaysRouter.get('/get-holiday-details', getHolidayDetailsEndpoint)
holidaysRouter.post('/apply-optional-holiday', applyOptionalHolidayEndpoint)
holidaysRouter.get('/get-optional-holidays', getOptionalHolidaysForUserThisYearEndpoint)

export default holidaysRouter;