'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './index.module.css';
import { createAppointmentSchema, AppointmentFormData } from './schema';

export default function AppointmentSection() {
  const t = useTranslations('appointment');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(createAppointmentSchema(t)),
    mode: 'onSubmit',
  });

  const onSubmit = (data: AppointmentFormData) => {
    console.log(data);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>
          {t.rich('title', {
            italic: (chunks) => <span>{chunks}</span>,
          })}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.grid}>
            <Field>
              <input
                placeholder={t('fields.firstName')}
                {...register('firstName')}
              />
              <Error message={errors.firstName?.message} />
            </Field>

            <Field>
              <input
                placeholder={t('fields.lastName')}
                {...register('lastName')}
              />
              <Error message={errors.lastName?.message} />
            </Field>

            <Field>
              <input placeholder={t('fields.email')} {...register('email')} />
              <Error message={errors.email?.message} />
            </Field>

            <Field>
              <input placeholder={t('fields.phone')} {...register('phone')} />
              <Error message={errors.phone?.message} />
            </Field>

            <Field>
              <input type='date' {...register('date')} />
              <Error message={errors.date?.message} />
            </Field>

            <Field>
              <select {...register('slot')}>
                <option value=''>{t('fields.slot')}</option>
                <option value='morning'>{t('slots.morning')}</option>
                <option value='afternoon'>{t('slots.afternoon')}</option>
                <option value='evening'>{t('slots.evening')}</option>
              </select>
              <Error message={errors.slot?.message} />
            </Field>
          </div>

          <select {...register('service')} className={styles.full}>
            <option value=''>{t('fields.service')}</option>
            <option value='facial'>{t('services.facial')}</option>
            <option value='makeup'>{t('services.makeup')}</option>
            <option value='skincare'>{t('services.skincare')}</option>
          </select>
          <Error message={errors.service?.message} />

          <textarea
            rows={4}
            placeholder={t('fields.message')}
            {...register('message')}
          />

          <button type='submit' disabled={isSubmitting}>
            {t('submit')}
          </button>
        </form>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src='/images/appointment.jpg'
          alt='Appointment'
          fill
          className={styles.image}
          priority
        />
      </div>
    </section>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function Error({ message }: { message?: string }) {
  if (!message) return null;
  return <p className={styles.error}>{message}</p>;
}
