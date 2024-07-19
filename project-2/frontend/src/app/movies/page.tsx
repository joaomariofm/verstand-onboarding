'use client'

import MovieService from '@/services/movie.service';
import { Card } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import "./index.css";

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
							<Card className="max-w-64 h-96 overflow-hidden">
								<div className="w-full h-1/3 relative z-0">
									<img src={movie.poster} alt="movie poster" className="w-full"/>
								</div>
								<div className="description-container px-4 pt-3 h-2/3 relative z-10">
									<p className="font-black text-zinc-300 mb-2">{movie.title}</p>
									<p className="font-bold text-zinc-300">{movie.description}</p>
								</div>
							</Card>
						</li>
					))}
				</ul>
			</div>
		)
	}
}
