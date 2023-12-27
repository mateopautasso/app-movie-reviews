import { MovieCardContent, SearchResultCard, ResponseTMDBStructure, basePathImageTMDB, MovieCard } from './types';

export function createReviewFormat(titles: string[], content: string[]): MovieCardContent[] {
	let review: MovieCardContent[] = [];
	for (let i = 0; i < titles.length; i++) {
		review = [...review, { title: titles[i] as string, content: content[i] as string }];
	}
	return review;
}

export function limitResultFetching(result: [], limit: number) {
	return result.slice(0, limit);
}

export function structuringOfSearchCard(data: ResponseTMDBStructure[]): SearchResultCard[] {
	return data.map((movie) => {
		return {
			id: movie.id,
			title: movie.title,
			year: movie.release_date,
			poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
			overview: movie.overview,
		};
	});
}

export function getReleaseYear(date: string) {
	return date.split('').slice(0, 4).join('');
}

export function formattingMovieCard(object: MovieCard): MovieCard {
	const card = object;
	const { id, title, poster, score, review, author } = card;
	return {
		id,
		title,
		poster: poster.toString(),
		score,
		review: JSON.parse(review),
		author,
	};
}
