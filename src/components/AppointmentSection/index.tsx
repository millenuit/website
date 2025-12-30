'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

import styles from './index.module.css';
import { createAppointmentSchema, AppointmentFormData } from './schema';

export default function AppointmentSection() {
  const t = useTranslations('appointment');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(createAppointmentSchema(t)),
    mode: 'onSubmit',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: AppointmentFormData) => {
    setStatus('idle');

    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to send');
      }

      reset(); // ✅ clear form
      setStatus('success'); // ✅ show success
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
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
              <FieldError message={errors.firstName?.message} />
            </Field>

            <Field>
              <input
                placeholder={t('fields.lastName')}
                {...register('lastName')}
              />
              <FieldError message={errors.lastName?.message} />
            </Field>

            <Field>
              <input
                placeholder={t('fields.email')}
                {...register('email')}
              />
              <FieldError message={errors.email?.message} />
            </Field>

            <Field>
              <input
                placeholder={t('fields.phone')}
                {...register('phone')}
              />
              <FieldError message={errors.phone?.message} />
            </Field>

            <Field>
              <input type="date" {...register('date')} />
              <FieldError message={errors.date?.message} />
            </Field>

            <Field>
              <select {...register('slot')}>
                <option value="">{t('fields.slot')}</option>
                <option value="morning">{t('slots.morning')}</option>
                <option value="afternoon">{t('slots.afternoon')}</option>
                <option value="evening">{t('slots.evening')}</option>
              </select>
              <FieldError message={errors.slot?.message} />
            </Field>
          </div>

          <select {...register('service')} className={styles.full}>
            <option value="">{t('fields.service')}</option>
            <option value="facial">{t('services.facial')}</option>
            <option value="makeup">{t('services.makeup')}</option>
            <option value="skincare">{t('services.skincare')}</option>
          </select>
          <FieldError message={errors.service?.message} />

          <textarea
            rows={4}
            placeholder={t('fields.message')}
            {...register('message')}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? t('sending') : t('submit')}
          </button>

          {/* ✅ STATUS MESSAGE UNDER BUTTON */}
          {status === 'success' && (
            <p className={styles.successMessage}>
              {t('successMessage')}
            </p>
          )}

          {status === 'error' && (
            <p className={styles.errorMessage}>
              {t('errorMessage')}
            </p>
          )}
        </form>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/images/appointment.jpg"
          alt="Appointment"
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

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className={styles.error}>{message}</p>;
}
