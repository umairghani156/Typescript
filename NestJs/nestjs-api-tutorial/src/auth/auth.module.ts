import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtModule } from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";


@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService],
    imports:[
        JwtModule.register({
            secret: "",
            signOptions: {expiresIn:"1h"}
        }),
        PassportModule,
    ],
    exports: [PrismaService]
})
export class AuthModule {}