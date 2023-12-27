import { UUID } from 'crypto';

export enum Routes {
	HOME = '/',
	ADDMOVIE = '/movie/addmovie',
}

export type basePathImageTMDB = `https://image.tmdb.org/t/p/${'w500' | 'original'}/${string}`;

export interface ResponseTMDBStructure {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: string;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface SearchResultCard {
	id?: number;
	title: string;
	year: string;
	poster: basePathImageTMDB;
	overview: string;
	onClick?: (arg0: any) => any;
}

export interface MovieCardContent {
	title: string;
	content: string;
}

export interface MovieCard {
	id: UUID;
	title: string;
	year?: string;
	poster: string;
	score: number;
	review: string;
	author: string;
}
