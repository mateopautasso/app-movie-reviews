function CardPreview({ children }: { children: React.ReactNode }) {
	return (
		<article className='p-8 flex flex-col flex-grow h-auto max-w-sm rounded-md bg-gray-50 border border-gray-300 gap-4 shadow-lg'>
			{children}
		</article>
	);
}
export default CardPreview;
