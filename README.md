# Steps

## Install

`pnpm i --save @grpc/grpc-js @grpc/proto-loader`

## Prepare nest to call microservices based on grpc

``` javascript
const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  AppModule,
  {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, '../proto/hero/hero.proto'),
    },
  },
);
```

## Ensure to listen on proto folders and copy the files to dist

``` json
{
  "compilerOptions": {
    "assets": ["**/*.proto"],
    "watchAssets": true
  }
}

```

## Defining proto file

``` protobuf
syntax = "proto3";

package hero;

service HeroesService {
    rpc FindOne (HeroDto) returns (Hero) {}
}

message HeroDto {
    int32 id = 1;
}

message Hero {
    int32 id = 1;
    string name = 2;
}
```

## Then whe define the controller call from grpc

``` javascript
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class HeroesController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(
    data: HeroDto,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
```