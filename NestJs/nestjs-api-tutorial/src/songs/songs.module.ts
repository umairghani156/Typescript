import { Injectable, Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connecton } from 'src/common/constants/connection';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  exports: [PrismaService],
  controllers: [SongsController],
  providers: [
    SongsService,
    PrismaService,
    {
      provide: 'CONNECTION',
      useValue: connecton
    }
  ]
})
export class SongsModule {}
