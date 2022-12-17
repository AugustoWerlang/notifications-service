import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['maximum-jackass-12961-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bWF4aW11bS1qYWNrYXNzLTEyOTYxJEEANgvfEcL59U6BD6nSWKEevGiH_5rujW4',
          password:
            'SG0_Yuo27nJ_Wkf5gUKQIBIseGphB4fzA-Gvmqg2boWWmGA9isjeQE-CsMTFjBdHPYfSGg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
