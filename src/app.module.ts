import { Module } from '@nestjs/common';
import { HeroesController } from './grpc/controllers/heroes.controller';

@Module({
  imports: [],
  controllers: [HeroesController],
  providers: [],
})
export class AppModule {}
