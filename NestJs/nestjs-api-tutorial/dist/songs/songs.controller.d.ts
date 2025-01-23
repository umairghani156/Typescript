import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
export declare class SongsController {
    private songsService;
    constructor(songsService: SongsService);
    createSong(dto: CreateSongDTO): {
        id: number;
        title: string;
        artist: string;
        album: string;
    }[];
    getSongs(): {
        id: number;
        title: string;
        artist: string;
        album: string;
    }[];
    updateSong(dto: UpdateSongDTO, id: number): {
        id: number;
        title: string;
        artist: string;
        album: string;
    }[];
    getSong(): void;
    deleteSong(): void;
}
