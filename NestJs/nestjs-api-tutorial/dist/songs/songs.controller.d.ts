import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
import { Connection } from 'src/common/constants/connection';
export declare class SongsController {
    private songsService;
    private connection;
    constructor(songsService: SongsService, connection: Connection);
    createSong(dto: CreateSongDTO): Promise<any>;
    getSongs(): {
        title: string;
        artist: string;
        album: string;
    }[];
    updateSong(dto: UpdateSongDTO, id: number): {
        title: string;
        artist: string;
        album: string;
    }[];
    getSong(id: number): string;
    deleteSong(): void;
}
