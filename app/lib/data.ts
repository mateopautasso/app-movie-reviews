import { sql } from '@vercel/postgres';
import { structuringOfSearchCard, limitResultFetching, formattingMovieCard } from './utils';
import { MovieCard } from './types';
import { revalidatePath } from 'next/cache';

export async function fetchNamesMovieOfTMBD(name: string) {
	const key = '7755fb15902d31e5c728982810f9760a';
	const headers: object = {
		accept: 'application/json',
		Authorization:
			'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDY2NGMxYTIxMjcwNDM0Y2M5NjY4MmNlNzJkMjU5MCIsInN1YiI6IjY0YmQ5NjVkZTlkYTY5MDBjYjdjNGRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7PTWYmv2r-K6X0bwbFpO9mkjuTqMd5FxpA0uvTb9TgQ',
	};
	const request = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=es-AR&page=1&api_key=${key}`,
		headers
	);
	const totalResult = await request.json();

	const limitResult = limitResultFetching(totalResult.results, 5);
	return structuringOfSearchCard(limitResult);
}

export async function fetchAllReview(): Promise<MovieCard[]> {
	revalidatePath('/');
	try {
		const request = await sql`SELECT * FROM movie_reviews`;
		const formatting = request.rows;
		return formatting.map((movie) => {
			const format = {
				id: movie.id,
				title: movie.title,
				poster: movie.poster,
				score: movie.score,
				review: movie.review,
				author: movie.author,
			};
			return formattingMovieCard(format);
		});
	} catch (error) {
		throw new Error();
	}
}
export async function fetchReviewById(id: string) {
	try {
		const request = await sql`SELECT * FROM movie_reviews WHERE id = ${id}`;
		const response = request.rows[0];
		const format = formattingMovieCard({
			id: response.id,
			title: response.title,
			poster: response.poster,
			score: response.score,
			review: response.review,
			author: response.author,
		});
		return format;
	} catch (error) {
		throw new Error();
	}
}
