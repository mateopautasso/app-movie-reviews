'use server';
import { sql } from '@vercel/postgres';
import { MovieCard } from './types';
import { createReviewFormat } from './utils';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { randomUUID } from 'crypto';
import { TYPES_ERRORS_FORM_ADD_MOVIE as TYPES_ERRORS, ReturnStateForm } from './types';

export async function insertReview(state: ReturnStateForm, formData: FormData): Promise<ReturnStateForm> {
	const titlesReview = formData.getAll('title-section') as string[];
	const contentReview = formData.getAll('content-section') as string[];

	const data: MovieCard = {
		id: state.id || randomUUID(),
		title: formData.get('title') as string,
		poster: formData.get('poster') as string,
		review: JSON.stringify(createReviewFormat(titlesReview, contentReview)),
		score: Number(formData.get('score')),
		author: formData.get('author') as string,
	};
	const { id, title, poster, review, score, author } = data;

	if (!title) {
		return {
			type: TYPES_ERRORS.FIELD_TITLE,
			message: 'Por favor ingrese una película.',
		};
	} else if (titlesReview[0] === '' || contentReview[0] === '') {
		return {
			type: TYPES_ERRORS.FIELD_REVIEW,
			message: 'Por favor ingrese el título y el contenido de la reseña.',
		};
	} else if (!author) {
		console.log(contentReview);
		return {
			type: TYPES_ERRORS.FIELD_AUTHOR,
			message: 'Por favor ingrese un autor.',
		};
	}

	try {
		await sql`
		INSERT INTO 
		movie_reviews (id, title, poster, score, review, author)
		VALUES (${id}, ${title}, ${poster.toString()}, ${score}, ${review as string}, ${author})`;
	} catch (error) {
		return {
			type: TYPES_ERRORS.DATABASE,
			message: 'Database Error: Failed to Create Invoice.',
		};
	}
	revalidatePath('/');
	redirect('/');
}
