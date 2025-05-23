//router for category api's
import { Router } from "express";
import { getUserCategoriesEndpoint } from "./view-user-categories";
import { upsertUserCategoryEndpoint } from "./upsert-user-category";
import { getHolidaysAndLeavesForCategoriesEndpoint } from "./get-holidays-leaves";

const categoryRouter = Router();

categoryRouter.get('/get-user-categories', getUserCategoriesEndpoint)
categoryRouter.post('/upsert-user-category', upsertUserCategoryEndpoint)
categoryRouter.get('/get-holidays-leaves', getHolidaysAndLeavesForCategoriesEndpoint)

export default categoryRouter;
