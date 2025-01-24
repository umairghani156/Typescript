import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { SongsModule } from './songs/songs.module';
import { EventsModule } from './events/events.module';
import { MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule, EventsModule, SongsModule],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // configure middleware here if needed

   // consumer.apply(LoggerMiddleware).forRoutes('songs');

   //consumer.apply(LoggerMiddleware).forRoutes({path: 'songs/add-song', method: RequestMethod.POST});

   consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}
