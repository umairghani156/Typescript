import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
import { log } from 'node:console';

@Injectable()
export class SongsService {
    private songs = [
        {
            id: 1,
            title: 'song1',
            artist: 'artist1',
            album: 'album1',
        }
    ]
    constructor(){}

    createSong(data: CreateSongDTO){
       
     this.songs.push(data);
     return this.songs
    }

    getSongs(){
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
