import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

type AppointmentEmailProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  slot: string;
  service: string;
  message?: string;
};

export default function AppointmentEmail({
  firstName,
  lastName,
  email,
  phone,
  date,
  slot,
  service,
  message,
}: AppointmentEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New appointment request</Preview>

      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>New Appointment Request</Heading>

          <Text style={intro}>
            A new appointment request has been submitted.
          </Text>

          <Hr style={divider} />

          <Section>
            <Info label='Name' value={`${firstName} ${lastName}`} />
            <Info label='Email' value={email} />
            <Info label='Phone' value={phone} />
            <Info label='Date' value={date} />
            <Info label='Time Slot' value={slot} />
            <Info label='Service' value={service} />
          </Section>

          {message && (
            <>
              <Hr style={divider} />
              <Text style={label}>Message</Text>
              <Text style={messageText}>{message}</Text>
            </>
          )}

          <Hr style={divider} />

          <Text style={footer}>MilleNuit Spa · Appointment Request</Text>
        </Container>
      </Body>
    </Html>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <Text style={info}>
      <strong>{label}:</strong> {value}
    </Text>
  );
}

const body = {
  backgroundColor: '#f6f5f3',
  fontFamily: 'Helvetica, Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '12px',
  maxWidth: '520px',
  margin: '40px auto',
};

const heading = {
  fontSize: '24px',
  color: '#2f3e34',
  marginBottom: '12px',
};

const intro = {
  fontSize: '15px',
  color: '#5f6f64',
};

const divider = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
};

const info = {
  fontSize: '14px',
  color: '#374151',
  marginBottom: '6px',
};

const label = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#2f3e34',
};

const messageText = {
  fontSize: '14px',
  color: '#4b5563',
  lineHeight: '1.6',
};

const footer = {
  fontSize: '12px',
  color: '#9ca3af',
  textAlign: 'center' as const,
};
