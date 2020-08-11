import 'dotenv/config';
import Queue from './app/lib/Queue';

const queue = new Queue();

queue.process();
