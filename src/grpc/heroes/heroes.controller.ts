import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { randomInt, randomUUID } from 'crypto';

interface HeroDto {
  id: number;
  name: string;
}

interface Hero {
  id: number;
  name: string;
}

@Controller()
export class HeroesController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(
    data: HeroDto,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Hero {
    const items: Array<Hero> = [];

    for (let index = 0; index < 1000; index++) {
      items.push({ id: randomInt(1000), name: randomUUID() });
    }

    return items.find(({ id }) => id === data.id);
  }
}
