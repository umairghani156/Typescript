import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { EventsModule } from './events/events.module';
import { MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule, EventsModule],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {

   consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}
