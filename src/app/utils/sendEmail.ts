import nodemailer from 'nodemailer';
import { envVars } from '../config/env';

interface EmailParams {
  to: string;
  subject: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  host: envVars.SMTP_HOST as string,
  port: Number(envVars.SMTP_PORT),
  auth: {
    user: envVars.SMTP_USER as string,
    pass: envVars.SMTP_PASS as string,
  },
} as nodemailer.TransportOptions);

const sendEmail = async ({ to, subject, html }: EmailParams): Promise<void> => {
  try {
    await transporter.sendMail({
      from: '"Skills-Lab Consultancy" <noreply@skillslab.com>',
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;
