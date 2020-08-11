import nodemailer, { Transporter } from 'nodemailer';
import mailConfig from '../../config/mail';

interface ISendMailDTO {
  to: string;
  from: string;
  subject: string;
  text: string;
}

class MailProvider {
  private client: Transporter;

  constructor() {
    this.client = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      auth: {
        user: mailConfig.auth.user,
        pass: mailConfig.auth.pass,
      },
    });
  }

  public async sendEmail({
    from,
    subject,
    text,
    to,
  }: ISendMailDTO): Promise<void> {
    await this.client.sendMail({
      from,
      to,
      subject,
      text,
    });
  }
}

export default MailProvider;
