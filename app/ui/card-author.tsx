function CardAuthor({ text }: { text: string }) {
	return (
		<p className='text-sm'>
			<strong>Autor: </strong>
			{text}.
		</p>
	);
}
export default CardAuthor;
