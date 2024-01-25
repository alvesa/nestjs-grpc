import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { randomUUID } from 'crypto';
import { HeroDto } from '../contracts/hero/HeroDto';
import { Hero } from '../contracts/hero/Hero';

@Controller()
export class HeroesController {
  constructor() {
    this.getAllHeroes();
  }
  private items: Hero[] = [];
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(
    data: HeroDto,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Hero {
    return this.items.find(({ id }) => id === data.id);
  }

  getAllHeroes() {
    let counter = 1;

    for (let index = 0; index < 1000; index++) {
      this.items.push({ id: counter, name: randomUUID() });
      counter++;
    }
  }
}
