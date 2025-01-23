import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';

@Controller('songs')
export class SongsController {
    constructor(
        private songsService: SongsService
    ) {}

    @Post("add-song")
    createSong(
        @Body() dto: CreateSongDTO
    ) {
      return this.songsService.createSong(dto);

    }

    @Get("all-songs")
    getSongs() {
        return this.songsService.getSongs()
    }

    @Put(":id")
    updateSong(@Body() dto: UpdateSongDTO,
    @Param ("id") id: number) {
        console.log(typeof id);
        
         return this.songsService.updateSong(dto, id)
    }

    @Get(":id")
    getSong() {}

    @Delete(":id")
    deleteSong() {}

}
