function CardReview({ children }: { children: React.ReactNode }) {
	return (
		<article className='p-8 flex flex-col h-auto rounded-md bg-gray-50 border border-gray-300 gap-4 shadow-lg mt-8'>
			{children}
		</article>
	);
}
export default CardReview;
