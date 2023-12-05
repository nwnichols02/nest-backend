import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DogsController } from './dogs/dogs.controller';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import HttpControllerController from './http-controller/http-controller.controller';

@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule],
  controllers: [AppController, HttpControllerController, DogsController],
  providers: [AppService],
})
export class AppModule {}
