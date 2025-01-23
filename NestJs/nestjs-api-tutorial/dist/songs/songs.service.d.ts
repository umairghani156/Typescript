import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
export declare class SongsService {
    private songs;
    constructor();
    createSong(data: CreateSongDTO): {
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
    updateSong(data: UpdateSongDTO, id: number): {
        id: number;
        title: string;
        artist: string;
        album: string;
    }[];
}
