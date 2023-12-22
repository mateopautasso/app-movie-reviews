'use client';
import { handleSubmitReview } from './utilities';

function CardAddMovie({ children }: { children: React.ReactNode }) {
	return (
		<form
			className='w-full p-8 flex flex-col h-auto rounded-md bg-gray-50 border border-gray-300 gap-6 shadow-lg mt-8'
			onSubmit={(e) => handleSubmitReview(e)}
		>
			{children}
		</form>
	);
}
export default CardAddMovie;
