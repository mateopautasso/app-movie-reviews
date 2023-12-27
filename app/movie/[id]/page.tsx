import CardReview from '@/app/ui/review/card-review';
import CardTitle from '@/app/ui/card-title';
import CardImageReview from '@/app/ui/review/card-image-review';
import CardStars from '@/app/ui/card-stars';
import CardReviewReview from '@/app/ui/review/card-review-review';
import CardAuthor from '@/app/ui/card-author';
import { LinkButton } from '@/app/ui/buttons';
import { fetchReviewById } from '@/app/lib/data';
import { formattingMovieCard } from '@/app/lib/utils';

async function MoviePage({ params }: { params: { id: string } }) {
	const id = params.id;
	const data = await fetchReviewById(id);
	const dataFormatted = formattingMovieCard(data);

	return (
		<main className='flex flex-col items-center'>
			<CardReview>
				<CardTitle text={dataFormatted.title} />
				<div className='flex flex-col gap-4'>
					<CardImageReview src={dataFormatted.poster} alt={dataFormatted.title} />
					<div className='flex flex-col gap-2 w-full'>
						<CardStars score={dataFormatted.score} />
						<div>
							<h4 className='text-2xl font-bold'>Reseña:</h4>
							<CardReviewReview sections={dataFormatted.review} />
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
