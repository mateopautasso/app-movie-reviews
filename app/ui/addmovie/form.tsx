import { insertReview } from '@/app/lib/actions';
import { ActionButton } from '../buttons';
import { ChooseMovieField } from '../search-cards';
import FormLabel from './label';
import ReviewField from './review-field-container';

function Form() {
	return (
		<form action={insertReview} className='w-full p-6 flex flex-col h-auto rounded-md bg-gray-50 border border-gray-300 gap-6 shadow-lg'>
			<div className='flex flex-col relative'>
				<FormLabel text='Título de la película' htmlFor='select-movie' />
				<ChooseMovieField />
			</div>

			<div className='flex flex-col'>
				<FormLabel text='Reseña' htmlFor='review' />
				<ReviewField />
			</div>

			<div className='flex flex-col'>
				<FormLabel text='Puntaje' htmlFor='score' />
				<select className='p-2 bg-transparent border-2 border-gray-400 rounded-md' id='score' name='score'>
					<option value={1}>⭐</option>
					<option value={2}>⭐⭐</option>
					<option value={3}>⭐⭐⭐</option>
					<option value={4}>⭐⭐⭐⭐</option>
					<option value={5}>⭐⭐⭐⭐⭐</option>
				</select>
			</div>

			<div className='flex flex-col'>
				<FormLabel text='Autor' htmlFor='author' />
				<input
					className='p-2 bg-transparent border-2 border-gray-400 rounded-md'
					type='text'
					id='author'
					name='author'
					placeholder='Mateo Pautasso'
					required
				/>
			</div>

			<ActionButton text='Subir reseña' type='submit' />
		</form>
	);
}
export default Form;
