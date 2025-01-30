import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SongsService {
    private prisma;
    private songs;
    constructor(prisma: PrismaService);
    createSong(data: CreateSongDTO): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        artist: string;
        album: string;
        releaseDate: Date;
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
    updateSong(data: UpdateSongDTO, artName: string): {
        title: string;
        artist: string;
        album: string;
    }[];
}
