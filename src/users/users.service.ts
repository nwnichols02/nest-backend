import { Injectable } from '@nestjs/common';

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
}
