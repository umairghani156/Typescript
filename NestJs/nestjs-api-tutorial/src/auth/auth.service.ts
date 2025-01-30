import { Body, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { SigninDTO, SignupDDTO } from "./dto/signup-user-dto";
import { log } from "node:console";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";

import * as bcrypt from 'bcryptjs';
@Injectable({})

export class AuthService {
   constructor(
      private prisma : PrismaService,
      private jwtService: JwtService
   ){}
   async signup(
      @Body() dto : SignupDDTO
   ) {
     try{
      if(!dto.firstName || !dto.lastName || !dto.email || !dto.password) throw new Error('Please fill all the fields');

      const existingUser = await this.prisma.user.findFirst({
         where: {
            email: dto.email
         }
      });

      if(existingUser){
         throw new HttpException('User already exists', HttpStatus.CONFLICT);
      }

       // Hash the password before saving it
       const hashedPassword = await bcrypt.hash(dto.password, 10);

       // Create new user
       const newUser = await this.prisma.user.create({
         data: {
           firstName: dto.firstName,
           lastName: dto.lastName,
           email: dto.email,
           hash: hashedPassword, // Save hashed password, not plain password
         },
       });

      if(!newUser){
         throw new HttpException('User not created', HttpStatus.NOT_IMPLEMENTED);
      }
      return {
         message: 'User created successfully',
         data: newUser,
       };
     }catch(error){
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'An unexpected error occurred while creating the user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
     }
   }

   async signin(
      dto: SigninDTO
   ){
     if(!dto.email || !dto.password) throw new Error('Please fill all the fields');

     try {
      const user = await this.prisma.user.findFirst({
         where:{
            email: dto.email
         }
      })

      if (!user) {
         throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      const isPasswordValid = await bcrypt.compare(dto.password, user.hash);
      if (!isPasswordValid) {
         throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }


      // Generate JWT Token
      const payload = { username: user.email, sub: user.id }; // `sub` refers to the user ID
      const accessToken = this.jwtService.sign(payload); // Signing the payload with the secret
      return {
         message: 'Signin successful',
         accessToken,
      };
     } catch (error) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'An unexpected error occurred while logging in the user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
     }
   }
}