interface MailConfig {
  host: string | undefined;
  port: number | undefined;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
} as MailConfig;
