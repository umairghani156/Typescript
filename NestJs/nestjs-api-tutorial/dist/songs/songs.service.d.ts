import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SongsService {
    private prisma;
    private songs;
    constructor(prisma: PrismaService);
    createSong(data: CreateSongDTO): Promise<any>;
    getSongs(): {
        title: string;
        artist: string;
        album: string;
    }[];
    updateSong(data: UpdateSongDTO, id: number): {
        title: string;
        artist: string;
        album: string;
    }[];
}
