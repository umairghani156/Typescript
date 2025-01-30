"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const signup_user_dto_1 = require("./dto/signup-user-dto");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async signup(dto) {
        try {
            if (!dto.firstName || !dto.lastName || !dto.email || !dto.password)
                throw new Error('Please fill all the fields');
            const existingUser = await this.prisma.user.findFirst({
                where: {
                    email: dto.email
                }
            });
            if (existingUser) {
                throw new common_1.HttpException('User already exists', common_1.HttpStatus.CONFLICT);
            }
            const hashedPassword = await bcrypt.hash(dto.password, 10);
            const newUser = await this.prisma.user.create({
                data: {
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    email: dto.email,
                    hash: hashedPassword,
                },
            });
            if (!newUser) {
                throw new common_1.HttpException('User not created', common_1.HttpStatus.NOT_IMPLEMENTED);
            }
            return {
                message: 'User created successfully',
                data: newUser,
            };
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('An unexpected error occurred while creating the user', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    signin() {
        return { hey: 'I am signin' };
    }
};
exports.AuthService = AuthService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_user_dto_1.SignupDDTO]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "signup", null);
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map