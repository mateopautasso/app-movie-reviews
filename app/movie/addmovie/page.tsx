import CardAddMovie from '@/app/ui/addmovie/card-add-movie';
import CardAddMovieLabel from '@/app/ui/addmovie/card-add-movie-label';

function AddMoviePage() {
	return (
		<main className='flex flex-col items-center'>
			<CardAddMovie>
				<div className='flex flex-col gap-1'>
					<CardAddMovieLabel text='Título de la película' htmlFor='addmovie-title' />
					<input className='p-2 bg-transparent border-2 border-gray-400 rounded-md' type='text' id='addmovie-title' name='addmovie-title' placeholder='Titanic, Jurassic Park, etc.' />
				</div>
				<div className='flex flex-col gap-1'>
					<CardAddMovieLabel text='Poster' htmlFor='addmovie-poster' />
					<input
						className='p-2 bg-transparent border-2 border-gray-400 rounded-md'
						type='file'
						accept='.png, .jpg, .jpeg, .webp, .avif'
						id='addmovie-poster'
						name='addmovie-poster'
						placeholder='Titanic, Jurassic Park, etc.'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<CardAddMovieLabel text='Reseña' htmlFor='addmovie-review' />
					<textarea
						className='p-2 bg-transparent border-2 border-gray-400 rounded-md resize-none'
						id='addmovie-review'
						name='addmovie-review'
						placeholder='Me encanto la parte en la que el T-Rex se comió a Jack...'
						rows={10}
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<CardAddMovieLabel text='Puntaje' htmlFor='addmovie-score' />
					<select className='p-2 bg-transparent border-2 border-gray-400 rounded-md' id='addmovie-score' name='addmovie-score'>
						<option value={1}>⭐</option>
						<option value={2}>⭐⭐</option>
						<option value={3}>⭐⭐⭐</option>
						<option value={4}>⭐⭐⭐⭐</option>
						<option value={5}>⭐⭐⭐⭐⭐</option>
					</select>
				</div>
				<button className='text-center p-2 border border-gray-300 rounded-md hover:bg-gray-200'>
					<strong>Subir reseña</strong>
				</button>
			</CardAddMovie>
		</main>
	);
}
export default AddMoviePage;
