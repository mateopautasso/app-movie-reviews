'use server';
import { sql } from '@vercel/postgres';
import { v4 as uuidv4 } from 'uuid';
import { MovieCard } from './types';
import { createReviewFormat } from './utils';
import { UUID } from 'crypto';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import blurCard from './blur';

export async function insertReview(formData: FormData) {
	const titlesReview = formData.getAll('title-section') as string[];
	const contentReview = formData.getAll('content-section') as string[];

	const data: MovieCard = {
		id: uuidv4() as UUID,
		title: (formData.get('title') as string) || '(No se encontró el título)',
		poster: (formData.get('poster') as string) || blurCard,
		review: JSON.stringify(createReviewFormat(titlesReview, contentReview)),
		score: Number(formData.get('score')),
		author: formData.get('author') as string,
	};
	const { id, title, poster, review, score, author } = data;

	try {
		await sql`
		INSERT INTO 
		movie_reviews (id, title, poster, score, review, author)
		VALUES (${id}, ${title}, ${poster.toString()}, ${score}, ${review}, ${author})`;
		revalidatePath('/');
		redirect('/');
	} catch (error) {}
}
