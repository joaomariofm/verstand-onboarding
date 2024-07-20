import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { MovieController } from './controllers/movie.controller';
import { MovieService } from './services/movie.service';

@Module({
  imports: [],
  controllers: [UserController, MovieController],
  providers: [PrismaService, MovieService, UserService],
})
export class AppModule {}
