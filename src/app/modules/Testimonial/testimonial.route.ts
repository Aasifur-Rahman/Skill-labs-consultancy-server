import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { TestimonialValidations } from "./testimonial.validation";
import { TestimonialController } from "./tetimonial.controller";

const route =Router();

route.post("/", validateRequest(TestimonialValidations.createTestimonialValidationSchema), TestimonialController.createTestimonial);
route.get("/approved", TestimonialController.getApprovedTestimonials);
route.get("/", TestimonialController.getAllTestimonials);
route.patch("/:id", validateRequest(TestimonialValidations.updateTestimonialStatusValidationSchema), TestimonialController.updateTestimonialStatus);
route.delete("/:id", TestimonialController.deleteTestimonial);

export const TestimonialRoutes = route;