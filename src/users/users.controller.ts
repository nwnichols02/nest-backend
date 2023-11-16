import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

// handle incoming requests from client and return responses

@Controller('users') // domainName/users
export class UsersController {
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
    return [];
  }

  @Get('interns') // GET /users/interns/:id
  findAllInterns(): any {
    return [];
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: any) {
    return user;
  }

  @Patch(':id') // GET /users/:id
  update(@Param('id') id: string, @Body() userUpdate: any) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // GET /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
