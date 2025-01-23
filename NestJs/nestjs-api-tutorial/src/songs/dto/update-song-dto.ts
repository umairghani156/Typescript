import { IsOptional, IsString } from "class-validator"

export class UpdateSongDTO {
    @IsString()
    @IsOptional()
    title: string

    @IsString()
    @IsOptional()
    artist?: string

    @IsString()
    @IsOptional()
    album?: string
}