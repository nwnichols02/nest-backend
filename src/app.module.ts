import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DogsController } from './dogs/dogs.controller';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ChatWayGateway } from './chat-way/chat-way.gateway';
import HttpControllerController from './http-controller/http-controller.controller';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      }, 
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      }
    ]),
  
    UsersModule,
    DatabaseModule,
    EmployeesModule,
    MyLoggerModule
  ],
  controllers: [AppController, HttpControllerController, DogsController],
  providers: [
    AppService,
    ChatWayGateway,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }],
})
export class AppModule { }
