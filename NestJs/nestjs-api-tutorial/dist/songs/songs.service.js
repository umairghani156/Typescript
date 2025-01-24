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
        return this.prisma({});
    }
    getSongs() {
        throw new Error('Method not implemented.');
        return this.songs;
    }
    updateSong(data, id) {
        if (!this.songs || this.songs.length === 0) {
            throw new Error('No songs found');
        }
        console.log(data, typeof id);
        this.songs = this.songs.map(song => {
            if (song.id === Number(id)) {
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