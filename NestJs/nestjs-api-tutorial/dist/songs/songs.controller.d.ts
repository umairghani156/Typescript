import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
import { Connection } from 'src/common/constants/connection';
export declare class SongsController {
    private songsService;
    private connection;
    constructor(songsService: SongsService, connection: Connection);
    createSong(dto: CreateSongDTO): Promise<{
        message: string;
        data: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            artist: string;
            album: string;
            releaseDate: Date;
        };
    }>;
    getSongs(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        artist: string;
        album: string;
        releaseDate: Date;
    }[]>;
    updateSong(dto: UpdateSongDTO, artName: string): {
        title: string;
        artist: string;
        album: string;
    }[];
    getSong(id: number): string;
    deleteSong(): void;
}
