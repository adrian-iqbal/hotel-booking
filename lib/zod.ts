import { object, string, coerce, array } from "zod";

export const RoomSchema = object({
  name: string().min(1),
  description: string().min(1),
  capacity: coerce.number().gt(0),
  price: coerce.number().gt(0),
  amenities: array(string()).nonempty(),
});

export const ReserveSchema = object({
  name: string().min(1),
  phone: string().min(10),
});

export const ContactSchema = object({
  name: string().min(6, "Name must be at least 6 characters long"),
  email: string()
    .min(6, "Email must be at least 6 characters long")
    .email("Invalid email address"),
  subject: string().min(6, "Subject must be at least 6 characters long"),
  message: string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must be at most 500 characters long"),
});
