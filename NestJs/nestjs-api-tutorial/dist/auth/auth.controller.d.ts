import { AuthService } from "./auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(): {
        hey: string;
    };
    signin(): {
        hey: string;
    };
}
