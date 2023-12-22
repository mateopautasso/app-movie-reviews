function CardAddMovieLabel({ text, htmlFor }: { text: string; htmlFor: string }) {
	return (
		<label className='text-2xl text-gray-500' htmlFor={htmlFor}>
			{text}
		</label>
	);
}
export default CardAddMovieLabel;
