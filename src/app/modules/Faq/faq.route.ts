import { Router } from "express";
import { FaqController } from "./faq.controller";
import { FaqValidationRules } from "./faq.validation";
import { validateRequest } from "../../middlewares/validateRequest";

const route =Router();

route.post("/",validateRequest(FaqValidationRules.createFaqValidationSchema),FaqController.createFaq);
route.get("/",FaqController.getAllFaqs);
route.patch("/:id",validateRequest(FaqValidationRules.updateFaqValidationSchema),FaqController.updateFaq);
route.delete("/:id", FaqController.deleteFaq);

export const FaqRoutes = route;