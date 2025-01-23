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
let SongsService = class SongsService {
    constructor() {
        this.songs = [
            {
                id: 1,
                title: 'song1',
                artist: 'artist1',
                album: 'album1',
            }
        ];
    }
    createSong(data) {
        this.songs.push(data);
        return this.songs;
    }
    getSongs() {
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
    __metadata("design:paramtypes", [])
], SongsService);
//# sourceMappingURL=songs.service.js.map