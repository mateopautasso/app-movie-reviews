function CardPreview({ children }: { children: React.ReactNode }) {
	return (
		<article className='card-preview p-8 flex flex-col justify-between flex-grow h-auto max-w-sm rounded-md bg-gray-50 border border-gray-300 gap-4 shadow-lg'>
			{children}
		</article>
	);
}
export default CardPreview;
