import TextInput from './text-input';

async function SearchByName() {
	return (
		<form className='w-full'>
			<label htmlFor='search-movie-by-name'>Buscar reseña</label>
			<TextInput
				id='search-movie-by-name'
				name='search-movie-by-name'
				placeholder='Titanic, Jurassic Park, etc.'
				ariaDescribedBy='Buscar reseña por título'
			/>
		</form>
	);
}
export default SearchByName;
