import sendEmail from '../../utils/sendEmail';
import { IConsultationRequest } from './consultation.interface';
import { Consultation } from './consultation.model';


const createConsultation = async (payload: IConsultationRequest) => {
  const result = await Consultation.create(payload);
  
  // Send email notification
  await sendEmail({
    to: payload.email,
    subject: 'Consultation Request Received - Skills-Lab Consultancy',
    html: `
      <h3>Hello ${payload.name},</h3>
      <p>Thank you for reaching out to Skills-Lab Consultancy. We have received your request for a consultation regarding <strong>${payload.serviceType}</strong>.</p>
      <p>Preferred Time: <strong>${payload.time}</strong></p>
      <p>Our team will get back to you shortly to confirm the appointment.</p>
      <br/>
      <p>Best Regards,</p>
      <p>Skills-Lab Consultancy Team</p>
    `
  });

  return result;
};

const getAllConsultations = async () => {
  const result = await Consultation.find().sort({ createdAt: -1 });
  return result;
};

export const ConsultationServices = {
  createConsultation,
  getAllConsultations,
};
