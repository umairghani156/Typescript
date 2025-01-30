import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { Connection } from 'src/common/constants/connection';

@Controller('songs')
export class SongsController {
    constructor(
        private songsService: SongsService,
        @Inject('CONNECTION')
        private connection : Connection
    ) {
        console.log(`Connection: ${this.connection.CONNECTION_STRING}`);
    }

    @Post("add-song")
    async createSong(
        @Body() dto: CreateSongDTO
    ) {
        
      const result = await this.songsService.createSong(dto);

      return {
        message: "Song created successfully",
        data: result
      }

    }

    @Get("all-songs")
    async getSongs() {
        try {
            return this.songsService.getSongs()
            
        } catch (error) {
            throw new HttpException("Server error", HttpStatus.INTERNAL_SERVER_ERROR,{
                cause: error
            })
            
        }
    }

    @Put(":id")
    updateSong(@Body() dto: UpdateSongDTO,
    @Param ("artName") artName: string) {
        console.log(typeof artName);
        
         return this.songsService.updateSong(dto, artName)
    }

    @Get(":id")
    getSong(
        @Param ("id",
            new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})
        )
       id: number
    ) {
      return "Fetch song with id: " + typeof id
    }

    @Delete(":id")
    deleteSong() {}

}
