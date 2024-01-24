/* eslint-disable prettier/prettier */
// Original file: src/grpc/protos/hero.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Hero as _hero_Hero, Hero__Output as _hero_Hero__Output } from '../hero/Hero';
import type { HeroDto as _hero_HeroDto, HeroDto__Output as _hero_HeroDto__Output } from '../hero/HeroDto';

export interface HeroesServiceClient extends grpc.Client {
  FindOne(argument: _hero_HeroDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _hero_HeroDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _hero_HeroDto, options: grpc.CallOptions, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _hero_HeroDto, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  findOne(argument: _hero_HeroDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  findOne(argument: _hero_HeroDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  findOne(argument: _hero_HeroDto, options: grpc.CallOptions, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  findOne(argument: _hero_HeroDto, callback: grpc.requestCallback<_hero_Hero__Output>): grpc.ClientUnaryCall;
  
}

export interface HeroesServiceHandlers extends grpc.UntypedServiceImplementation {
  FindOne: grpc.handleUnaryCall<_hero_HeroDto__Output, _hero_Hero>;
  
}

export interface HeroesServiceDefinition extends grpc.ServiceDefinition {
  FindOne: MethodDefinition<_hero_HeroDto, _hero_Hero, _hero_HeroDto__Output, _hero_Hero__Output>
}
