import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { CommandModule } from 'nestjs-command';
import { SeedCommand } from './common/commands/seed.command';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL, {
      useNewUrlParser: true,
    }),
    UsersModule,
    AuthModule,
    PostsModule,
    CommandModule,
  ],
  controllers: [AppController],
  providers: [AppService, SeedCommand],
})
export class AppModule {}
