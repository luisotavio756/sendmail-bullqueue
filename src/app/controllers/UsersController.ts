import { Request, Response } from 'express';
import Queue from '../lib/Queue';

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const user = {
      name,
      email,
      password,
    };

    const queue = new Queue();
    // Add send mail in the queue
    await queue.add('RegistrationMail', { user });

    return response.json(user);
  }
}

export default UsersController;
