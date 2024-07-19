import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { MovieController } from './controllers/movie.controller';
import { MovieService } from './services/movie.service';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [PrismaService, MovieService],
})
export class AppModule {}
