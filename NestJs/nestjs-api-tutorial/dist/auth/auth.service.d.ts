import { SignupDDTO } from "./dto/signup-user-dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
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
