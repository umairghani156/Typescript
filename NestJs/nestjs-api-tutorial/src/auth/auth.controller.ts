import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SigninDTO, SignupDDTO } from "./dto/signup-user-dto";

@Controller('auth')

export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signup(
      @Body() dto : SignupDDTO
    ) {
      const result = await  this.authService.signup(dto);

      return result
       
    }
    @Post('signin')
    async signin(
      @Body () dto : SigninDTO
    ) {
       const result = await this.authService.signin(dto);

       return result
        
    }

}