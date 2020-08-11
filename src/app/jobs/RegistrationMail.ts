import { Job } from 'bull';
import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  async handle({ data }: any): Promise<void> {
    const { user } = data;

    const MailProvider = new Mail();

    await MailProvider.sendEmail({
      from: 'Queue Node <queue@test.com',
      to: `${user.name} <${user.email}>`,
      subject: 'Queue Node.js',
      text: 'Hi, wellcome a queue node system !',
    });
  },
};
