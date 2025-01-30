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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SongsService = class SongsService {
    constructor(prisma) {
        this.prisma = prisma;
        this.songs = [
            {
                title: 'song1',
                artist: 'artist1',
                album: 'album1',
            }
        ];
    }
    async createSong(data) {
        if (!data.album || !data.artist || !data.title || !data.releaseDate) {
            throw new Error('All fields are required');
        }
        try {
            return await this.prisma.song.create({
                data: {
                    title: data.title,
                    artist: data.artist,
                    album: data.album,
                    releaseDate: new Date(data.releaseDate)
                }
            });
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.HttpException(`A song with the title '${data.title}' already exists.`, common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException('An unexpected error occurred while creating the song.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getSongs() {
        try {
            const songs = await this.prisma.song.findMany();
            if (!songs) {
                throw new common_1.HttpException("No songs found", common_1.HttpStatus.NOT_FOUND);
            }
            return songs;
        }
        catch (error) {
            throw new common_1.HttpException("Server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR, { cause: error });
        }
    }
    updateSong(data, artName) {
        if (!this.songs || this.songs.length === 0) {
            throw new Error('No songs found');
        }
        console.log(data, typeof artName);
        this.songs = this.songs.map(song => {
            if (song.artist === artName) {
                return { ...song, ...data };
            }
            return song;
        });
        return this.songs;
    }
};
exports.SongsService = SongsService;
exports.SongsService = SongsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SongsService);
//# sourceMappingURL=songs.service.js.map