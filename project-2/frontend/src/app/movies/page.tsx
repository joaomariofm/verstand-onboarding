'use client'

import "./index.css";
import MovieService from '@/services/movie.service';
import MovieCard from '@/components/movie-card';
import { useQuery } from '@tanstack/react-query';

export default function MoviesPage () {
	const { data, isLoading } = useQuery({queryKey: ['movies'], queryFn: MovieService.getMovies});

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!isLoading) {
		return (
			<div className="p-6">
				<ul className="flex flex-wrap justify-center gap-5">
					{data?.map((movie) => (
						<li key={movie.id}>
							<MovieCard movie={movie}/>
						</li>
					))}
				</ul>
			</div>
		)
	}
}
