import Movie from "@/models/movie";

export default class MovieService {
	static async getMovies(): Promise<Movie[]>{
		const res = await fetch('http://localhost:3001/movies/list');
		return res.json();
	}
}
