import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateSongDTO {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly artist: string;

    @IsNotEmpty()
    @IsString()
    readonly album: string;

   
}