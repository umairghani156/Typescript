import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
import { log } from 'node:console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SongsService {
    private songs = [
        {
            title: 'song1',
            artist: 'artist1',
            album: 'album1',
        }
    ]
    constructor(
        private prisma : PrismaService
    ){}

    async createSong(data: CreateSongDTO){
       if(!data.album || !data.artist || !data.title || !data.releaseDate){
           throw new Error('All fields are required')
       }

       return this.prisma({
           
       })
    }

    getSongs(){
        throw new Error('Method not implemented.');
        return this.songs
    }

    updateSong(data: UpdateSongDTO, id: number){
        if (!this.songs || this.songs.length === 0) {
            throw new Error('No songs found');
          }
        console.log(data, typeof id);
        
        this.songs = this.songs.map(song => {
           if(song.id === Number(id)){
               return {...song, ...data}
           }
           return song
        })
        return this.songs
    }
}
