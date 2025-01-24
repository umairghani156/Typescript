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
    @IsNumber()
    releaseDate: number

   
}