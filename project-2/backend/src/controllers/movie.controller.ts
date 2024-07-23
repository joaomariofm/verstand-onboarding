import { Controller, Get } from '@nestjs/common';
import { MovieService } from 'src/services/movie.service';
import { Movie } from '@prisma/client';

@Controller("movies")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get("list")
 	async getMovies(): Promise<Readonly<{ status: number; message?: string; movies?: Movie[]; }>> {
		const movies = await this.movieService.movies();

		return {
			status: 200,
			message: "Movies retrieved successfully",
			movies: movies
		}
	}
}
