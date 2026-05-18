import { ITestimonial } from "./testimonial.interface";
import { Testimonial } from "./testimonial.model";


const createTestimonial = async (payload: ITestimonial) => {
  // New testimonials are 'pending' by default as per model
  const result = await Testimonial.create(payload);
  return result;
};

const getApprovedTestimonials = async () => {
  const result = await Testimonial.find({ status: 'approved' }).sort({ createdAt: -1 });
  return result;
};

const getAllTestimonials = async () => {
  const result = await Testimonial.find().sort({ createdAt: -1 });
  return result;
};

const updateTestimonialStatus = async (id: string, payload: Partial<ITestimonial>) => {
  const result = await Testimonial.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteTestimonial = async (id: string) => {
  const result = await Testimonial.findByIdAndDelete(id);
  return result;
};

export const TestimonialService = {
  createTestimonial,
  getApprovedTestimonials,
  getAllTestimonials,
  updateTestimonialStatus,
  deleteTestimonial
};
