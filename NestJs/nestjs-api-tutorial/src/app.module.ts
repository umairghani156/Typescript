import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { SongsModule } from './songs/songs.module';
import { EventsModule } from './events/events.module';


@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule, EventsModule, SongsModule],
})
export class AppModule {}
