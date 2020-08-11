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
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'a8a9a1c9439694',
        pass: 'fbfb3695ed84b9',
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
