import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateSongDTO {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    artist: string;

    @IsNotEmpty()
    @IsString()
    album: string;

    @IsNotEmpty()
    @IsString()
    releaseDate: string

   
}