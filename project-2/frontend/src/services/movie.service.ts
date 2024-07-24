import Movie from "@/models/movie";

export default class MovieService {
	static async getMovies(): Promise<Movie[]>{
		const response = await fetch('http://localhost:3001/movies/list');

		const parsedResponse = await response.json();

		if (parsedResponse.status !== 200) {
			throw new Error('Something went wrong');
		}

		return parsedResponse.data;
	}
}
