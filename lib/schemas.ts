import { z } from "zod";

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo")
    .max(80, "Nome muito longo"),
  phone: z
    .string()
    .trim()
    .min(10, "Informe um telefone válido com DDD")
    .max(20, "Telefone muito longo"),
  email: z.string().trim().email("Informe um e-mail válido"),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().trim().max(500, "Mensagem muito longa").optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
