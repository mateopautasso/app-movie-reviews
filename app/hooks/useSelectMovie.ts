import { useState } from 'react';
import { SearchResultCard } from '../lib/types';
import { useDebouncedCallback } from 'use-debounce';

interface ReturnValue {
	movies: SearchResultCard[];
	inputMovieSelected: SearchResultCard | null;
	handleFetching: (e: React.ChangeEvent<HTMLInputElement>) => any;
	choseMovie: (value: SearchResultCard) => any;
}

export function useSelectMovie(fetchingFunction: (arg0: string) => any): ReturnValue {
	const [movies, setMovies] = useState<SearchResultCard[]>([]);
	const [inputMovieSelected, setInputMovieSelected] = useState<SearchResultCard | null>(null);

	const handleFetching = useDebouncedCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
		const res = await fetchingFunction(e.target.value);
		setMovies(res);
	}, 300);

	const choseMovie = (value: SearchResultCard) => {
		setMovies([]);
		setInputMovieSelected(value);
	};

	return { movies, inputMovieSelected, handleFetching, choseMovie };
}
