function AuthorField() {
	return (
		<input
			className='p-2 bg-transparent border-2 border-gray-400 rounded-md'
			type='text'
			id='author'
			name='author'
			placeholder='Mateo Pautasso'
			aria-describedby='error-input-author'
		/>
	);
}
export default AuthorField;
