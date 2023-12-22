'use client';
import { placeholderMovieCard } from '@/app/lib/placeholder-data';
import CardReview from '@/app/ui/review/card-review';
import CardTitle from '@/app/ui/card-title';
import CardImageReview from '@/app/ui/review/card-image-review';
import CardStars from '@/app/ui/card-stars';
import CardReviewReview from '@/app/ui/review/card-review-review';
import CardAuthor from '@/app/ui/card-author';
import CardButton from '@/app/ui/card-button';
import { useParams } from 'next/navigation';

function MoviePage() {
	const params = useParams();
	console.log(params);
	return (
		<main className='flex flex-col items-center'>
			<CardReview>
				<CardTitle text={placeholderMovieCard.title} />
				<div className='flex flex-col gap-4'>
					<CardImageReview src={placeholderMovieCard.src} alt={placeholderMovieCard.title} />
					<div className='flex flex-col gap-2 w-full'>
						<CardStars score={placeholderMovieCard.score} />
						<div>
							<h4 className='text-xl font-bold'>Reseña:</h4>
							<CardReviewReview text='Lorem' />
						</div>
					</div>
					<div className='w-full flex flex-col gap-1'>
						<CardAuthor text={placeholderMovieCard.author} />
						<CardButton href='/' text='Regresar al inicio' />
					</div>
				</div>
			</CardReview>
		</main>
	);
}
export default MoviePage;
