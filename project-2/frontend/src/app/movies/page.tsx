'use client'

import MovieService from '@/services/movie.service';
import { useQuery } from '@tanstack/react-query';

export default function MoviesPage () {
	
	const { data, isLoading } = useQuery({queryKey: ['movies'], queryFn: MovieService.getMovies});

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!isLoading) {
		return (
			<div>
				<h1>Movies</h1>
				<ul>
					{data?.map((movie) => (
						<li key={movie.id}>
							<img src={movie.poster} alt="movie poster" />
							<p>{movie.title}</p>
							<p>{movie.description}</p>
							<p>{movie.poster}</p>
						</li>
					))}
				</ul>
			</div>
		)
	}
}
