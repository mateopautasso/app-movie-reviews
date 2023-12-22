function CardTitle({ text }: { text: string }) {
	return (
		<h2 className='text-2xl font-bold max-w-[280px] text-start' style={{ textWrap: 'balance' }}>
			{text}
		</h2>
	);
}
export default CardTitle;
