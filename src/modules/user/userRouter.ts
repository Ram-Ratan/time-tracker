import { Router } from "express";
import { upsertUserCategoryLinkUpEndpoint } from "./update-category";
import { getUsersUnderManagerEndpoint } from "./get-users";

const userRouter = Router();

userRouter.post('/update-category', upsertUserCategoryLinkUpEndpoint)
userRouter.get('/get-users-under-manager', getUsersUnderManagerEndpoint)

export default userRouter;