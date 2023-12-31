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

export type Review = string | MovieCardContent[];

export interface MovieCard {
	id: UUID;
	title: string;
	year?: string;
	poster: string;
	score: number;
	review: Review;
	author: string;
}

export enum TYPES_ERRORS_FORM_ADD_MOVIE {
	FIELD_TITLE = 'title',
	FIELD_REVIEW = 'review',
	FIELD_AUTHOR = 'author',
	DATABASE = 'database',
	SUCCESS = 'success',
}

export type ReturnStateForm = {
	id?: UUID;
	type: TYPES_ERRORS_FORM_ADD_MOVIE | null;
	message: string | null;
};
