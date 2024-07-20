import { Controller, Get } from '@nestjs/common';
import { MovieService } from 'src/services/movie.service';
import { Movie } from '@prisma/client';

@Controller("movies")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get("list")
 	async getMovies(): Promise<Movie[]> {
		return this.movieService.movies()
	}
}
