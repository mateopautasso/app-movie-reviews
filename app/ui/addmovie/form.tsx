'use client';
import { insertReview } from '@/app/lib/actions';
import { ActionButton } from '../buttons';
import { useFormState } from 'react-dom';
import { ReturnStateForm, TYPES_ERRORS_FORM_ADD_MOVIE } from '@/app/lib/types';
import { UUID } from 'crypto';
import { ChooseMovieField } from '../search-cards';
import FormLabel from './label';
import ReviewField from './review-field-container';
import StarsField from './stars-field';
import AuthorField from './author-field';
import ErrorField from './error-field';

function Form() {
	const initialState: ReturnStateForm = {
		id: crypto.randomUUID() as UUID,
		type: null,
		message: null,
	};
	const [state, formAction] = useFormState(insertReview, initialState);

	return (
		<form action={formAction} className='w-full p-6 flex flex-col h-auto rounded-md bg-gray-50 border border-gray-300 gap-6 shadow-lg'>
			<div className='flex flex-col relative'>
				<FormLabel text='Título de la película' htmlFor='select-movie' />
				<ChooseMovieField />
				{state.type === TYPES_ERRORS_FORM_ADD_MOVIE.FIELD_TITLE && <ErrorField text={state.message} idInput='error-input-choose-movie' />}
			</div>

			<div className='flex flex-col'>
				<FormLabel text='Reseña' htmlFor='review' />
				<ReviewField />
				{state.type === TYPES_ERRORS_FORM_ADD_MOVIE.FIELD_REVIEW && <ErrorField text={state.message} idInput='error-input-review' />}
			</div>

			<div className='flex flex-col'>
				<FormLabel text='Puntaje' htmlFor='score' />
				<StarsField />
			</div>

			<div className='flex flex-col'>
				<FormLabel text='Autor' htmlFor='author' />
				<AuthorField />
				{state.type === TYPES_ERRORS_FORM_ADD_MOVIE.FIELD_AUTHOR && <ErrorField text={state.message} idInput='error-input-author' />}
			</div>

			<ActionButton text='Subir reseña' type='submit' />
		</form>
	);
}
export default Form;
