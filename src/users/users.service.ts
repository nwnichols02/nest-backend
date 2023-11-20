import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto'; // handle incoming requests from client and return responses

//Nest classes may be treated as a provider, services, factories, helpers, can be injected as a dependency, etc.

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Jack Doe',
      email: 'jack@gmail.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'ADMIN' | 'ENGINEER' | 'INTERN') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (!rolesArray.length) {
        throw new NotFoundException(`Role ${role} not found`);
      }
      return rolesArray;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
