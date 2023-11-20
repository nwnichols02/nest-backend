/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['ADMIN', 'ENGINEER', 'INTERN'], {
        message: 'Role must be one of ADMIN, ENGINEER, or INTERN',
    })
    role: 'ADMIN' | 'ENGINEER' | 'INTERN';
}

