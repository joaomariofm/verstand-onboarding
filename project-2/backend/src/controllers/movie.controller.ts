import { Controller, Get } from '@nestjs/common';
import { MovieService } from 'src/services/movie.service';
import { GetMoviesResponse } from 'src/types';

@Controller("movies")
export class MovieController {

  constructor(private readonly movieService: MovieService) {}

  @Get("list")
 	async getMovies(): Promise<GetMoviesResponse> {
		const movies = await this.movieService.movies();

		return {
			status: 200,
			message: "Movies retrieved successfully",
			movies: movies
		}
	}
}
