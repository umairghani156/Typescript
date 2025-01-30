import { AuthService } from "./auth.service";
import { SignupDDTO } from "./dto/signup-user-dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: SignupDDTO): Promise<{
        message: string;
        data: {
            firstName: string | null;
            lastName: string | null;
            email: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            hash: string;
        };
    }>;
    signin(): {
        hey: string;
    };
}
