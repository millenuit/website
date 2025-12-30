import { z } from 'zod';
import { useTranslations } from 'next-intl';

type Translator = ReturnType<typeof useTranslations>;

export const createAppointmentSchema = (t: Translator) =>
  z.object({
    firstName: z.string().min(1, t('errors.firstName')),
    lastName: z.string().min(1, t('errors.lastName')),
    email: z.string().email(t('errors.email')),
    phone: z.string().min(8, t('errors.phone')),
    date: z.string().min(1, t('errors.date')),
    slot: z.string().min(1, t('errors.slot')),
    service: z.string().min(1, t('errors.service')),
    message: z.string().optional(),
  });

export type AppointmentFormData = z.infer<
  ReturnType<typeof createAppointmentSchema>
>;
