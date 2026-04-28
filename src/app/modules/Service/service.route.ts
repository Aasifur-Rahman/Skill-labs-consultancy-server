import { Router } from "express";
import { ServiceController } from "./service.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { ServiceValidationRules } from "./service.validation";

const router = Router();

router.post("/",validateRequest(ServiceValidationRules.createServiceZodSchema),ServiceController.createService);
router.get("/", ServiceController.getAllServices);
router.get("/:id", ServiceController.getServiceById);

export const ServiceRoutes = router;