import Movie from "@/models/movie";
import { Card } from '@/components/ui/card';

export default function MovieCard({ movie }: {movie: Movie}) {
	return(
		<Card className="flex max-h-64 overflow-hidden">
			<div>
				<img src={movie.poster} alt="movie poster" className="w-60 lg:w-48 h-full"/>
			</div>
			<div className="w-72 bg-zinc-800 p-3">
				<p className="font-black text-zinc-300 mb-2">{movie.title}</p>
				<p className="text-sm font-bold text-zinc-300">{movie.description}</p>
			</div>
		</Card>
	)
}
