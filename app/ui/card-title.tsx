function CardTitle({ text }: { text: string }) {
	return (
		<h2 className='text-3xl font-semibold text-start' style={{ textWrap: 'balance' }}>
			{text}
		</h2>
	);
}
export default CardTitle;
