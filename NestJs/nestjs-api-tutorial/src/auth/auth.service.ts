import { Injectable } from "@nestjs/common";

@Injectable({})

export class AuthService {
   signup() {
    return {hey:'I am signup'}
   }

   signin(){
    return {hey:'I am signin'}
   }
}