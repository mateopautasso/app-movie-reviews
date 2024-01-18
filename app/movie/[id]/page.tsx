import CardReview from '@/app/ui/review/card-review';
import CardTitle from '@/app/ui/card-title';
import CardImageReview from '@/app/ui/review/card-image-review';
import CardStars from '@/app/ui/card-stars';
import CardReviewReview from '@/app/ui/review/card-review-review';
import CardAuthor from '@/app/ui/card-author';
import { LinkButton } from '@/app/ui/buttons';
import { getReviewById } from '@/app/lib/data';
import { MovieCardContent } from '@/app/lib/types';

async function MoviePage({ params }: { params: { id: string } }) {
	const id = params.id;
	const data = await getReviewById(id);
	return (
		<main className='flex flex-col items-center'>
			<CardReview>
				<CardTitle text={data.title} />
				<div className='flex flex-col gap-4'>
					<CardImageReview src={data.poster} alt={data.title} />
					<div className='flex flex-col gap-2 w-full'>
						<CardStars score={data.score} />
						<div>
							<h4 className='text-2xl font-semibold'>Reseña:</h4>
							<CardReviewReview sections={data.review as MovieCardContent[]} />
						</div>
					</div>
					<div className='w-full flex flex-col gap-1'>
						<CardAuthor text={data.author} />
						<LinkButton href='/' text='Regresar al inicio' />
					</div>
				</div>
			</CardReview>
		</main>
	);
}
export default MoviePage;
