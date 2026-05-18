import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { ConsultationValidations } from './consultation.validaion';
import { ConsultationControllers } from './consultation.controller';
import { multerUpload } from '../../config/multer.config';


const router = express.Router();

router.post(
  '/',
  multerUpload.single('image'),
  validateRequest(ConsultationValidations.createConsultationValidationSchema),
  ConsultationControllers.createConsultation
);

router.get(
  '/',
  ConsultationControllers.getAllConsultations
);

export const ConsultationRoutes = router;
