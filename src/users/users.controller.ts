import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto'; // handle incoming requests from client and return responses

// handle incoming requests from client and return responses

@Controller('users') // domainName/users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // /users
  // GET /users
  // GET /users/:id
  // POST /users
  // PATCH /users/:id
  // DELETE /users/:id

  //! ORDER DOES MATTER like a waterfall

  @Get() // GET /users or /users?role=value
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): any {
    return this.usersService.findAll(role);
  }

  // @Get('interns') // GET /users/interns
  // findAllInterns(): any {
  //   return [];
  // }

  @Get(':id') // GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post() // POST /users
  create(
    @Body(ValidationPipe)
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id') // GET /users/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id') // GET /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
