import { Router } from "express";
import { updateOrganizationTypeEndpoint } from "./update-organization-type";
import { getOrganizationTypeEndpoint } from "./get-organization-type";

const organizationRouter = Router();

organizationRouter.post('/update-organization-type', updateOrganizationTypeEndpoint)
organizationRouter.get('/get-organization-type', getOrganizationTypeEndpoint)

export default organizationRouter;