import Bull from 'bull';
import redisConfig from '../../config/redis';

import * as jobs from '../jobs';

interface IQueue {
  bull: Bull.Queue;
  name: string;
  handle<T>(payload: Bull.Job<T>): Promise<void>;
}

class BullQueueProvider {
  private queues: IQueue[];

  constructor() {
    this.queues = Object.values(jobs).map(job => ({
      bull: new Bull(job.key, {
        redis: redisConfig,
      }),
      name: job.key,
      handle: job.handle,
    }));
  }

  public async add<T>(name: string, data: T): Promise<void> {
    const queue = this.queues.find(findQueue => findQueue.name === name);

    await queue?.bull.add(data);
  }

  public process(): void {
    return this.queues.forEach(queue => {
      console.log('ok');

      queue.bull.process(queue.handle);

      queue.bull
        .on('failed', (job, error) => {
          console.log(
            `[failed]: Job ${job.id} - ${
              job.queue.name
            } with the params ${JSON.stringify(job.data)} has been failed\n`,
            `[failed]: ${error}`,
          );
        })
        .on('completed', job => {
          console.log(
            `[completed]: Job ${job.id} - ${
              job.queue.name
            } with the params ${JSON.stringify(job.data)} has been completed`,
          );
        });
    });
  }
}

export default BullQueueProvider;
