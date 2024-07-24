import { Controller, Get } from '@nestjs/common';
import { MovieService } from 'src/services/movie.service';
import { ControllerResponse } from 'src/types';

@Controller("movies")
export class MovieController {

  constructor(private readonly movieService: MovieService) {}

  @Get("list")
 	async getMovies(): Promise<ControllerResponse> {
		const movies = await this.movieService.movies();

		return {
			status: 200,
			message: "Movies retrieved successfully",
			data: [ ...movies ]
		}
	}
}
