import nodemailer from 'nodemailer';
import { envVars } from '../config/env';

interface EmailParams {
  to: string;
  subject: string;
  html: string;
}

const transporter = nodemailer.createTransport({
    service: 'gmail', // 
  auth: {
    user: envVars.SMTP_USER, 
    pass: envVars.SMTP_PASS, 
  },
} as nodemailer.TransportOptions);

const sendEmail = async ({ to, subject, html }: EmailParams): Promise<void> => {
  try {
    const info = await transporter.sendMail({
      from: `"Skills-Lab Consultancy" <${envVars.SMTP_USER}>`, // ✅ must match SMTP user
      to,
      subject,
      html,
    });

    console.log('✅ Email sent:', info.messageId);
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error; // ✅ don't silently fail
  }
};

export default sendEmail;
