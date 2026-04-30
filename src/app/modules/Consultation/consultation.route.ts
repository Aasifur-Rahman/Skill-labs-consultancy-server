import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { ConsultationValidations } from './consultation.validaion';
import { ConsultationControllers } from './consultation.controller';


const router = express.Router();

router.post(
  '/',
  validateRequest(ConsultationValidations.createConsultationValidationSchema),
  ConsultationControllers.createConsultation
);

router.get(
  '/',
  ConsultationControllers.getAllConsultations
);

export const ConsultationRoutes = router;
