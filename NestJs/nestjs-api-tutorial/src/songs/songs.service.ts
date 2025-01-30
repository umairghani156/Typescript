import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
        try {
            return await this.prisma.song.create({
                data: {
                    title: data.title,
                    artist: data.artist,
                    album: data.album,
                    releaseDate: new Date(data.releaseDate)
                }
            })
        } catch (error) {
            if (error.code === 'P2002') {
                throw new HttpException(
                  `A song with the title '${data.title}' already exists.`,
                  HttpStatus.BAD_REQUEST,
                );
              }
        
              // For any other unexpected errors
              throw new HttpException(
                'An unexpected error occurred while creating the song.',
                HttpStatus.INTERNAL_SERVER_ERROR,
              );
        }
       
           
       
    }

    async getSongs(){
        try {
            const songs = await this.prisma.song.findMany();
            if(!songs){
                throw new HttpException("No songs found", HttpStatus.NOT_FOUND)
            }
            return songs
        } catch (error) {
           throw new HttpException("Server error", HttpStatus.INTERNAL_SERVER_ERROR,{cause: error})
        }
    }

    updateSong(data: UpdateSongDTO, artName: string){
        if (!this.songs || this.songs.length === 0) {
            throw new Error('No songs found');
          }
        console.log(data, typeof artName);
        
        this.songs = this.songs.map(song => {
           if(song.artist === artName){
               return {...song, ...data}
           }
           return song
        })
        return this.songs
    }
}
