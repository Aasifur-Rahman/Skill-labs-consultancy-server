import sendEmail from '../../utils/sendEmail';
import { IConsultationRequest } from './consultation.interface';
import { Consultation } from './consultation.model';


const createConsultation = async (payload: IConsultationRequest) => {
  const result = await Consultation.create(payload);
  
  if (payload.email && !payload.email.includes('example.com')) {
    await sendEmail({
      to: payload.email,
      subject: 'Consultation Request Received - Skills-Lab Consultancy',
      html: `
        <h3>Hello ${payload.name},</h3>
        <p>Thank you for reaching out to Skills-Lab Consultancy.</p>
        <p>Service: <strong>${payload.serviceType}</strong></p>
        <p>Preferred Time: <strong>${payload.time}</strong></p>
        <p>We will contact you soon.</p>
        <br/>
        <p>Best Regards,</p>
        <p>Skills-Lab Consultancy Team</p>
      `,
    });
  } else {
    console.warn('⚠️ Invalid/test email skipped:', payload.email);
  }
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
