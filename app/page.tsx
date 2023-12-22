import { placeholderMovieCard } from './lib/placeholder-data';
import SectionTitle from './ui/section-title';
import CardPreview from './ui/preview/card-preview';
import CardTitle from './ui/card-title';
import CardImagePreview from './ui/preview/card-image-preview';
import CardStars from './ui/card-stars';
import CardAuthor from './ui/card-author';
import CardButton from './ui/card-button';

export default function Home() {
	return (
		<main className='flex flex-col items-center'>
			<SectionTitle text='Lista de reseñas' />
			<section className='w-full h-full flex justify-center flex-wrap gap-8'>
				<CardPreview>
					<CardTitle text={placeholderMovieCard.title} />
					<div className='flex flex-col gap-4 flex-grow h-full'>
						<CardImagePreview src={placeholderMovieCard.src} alt={placeholderMovieCard.title} />
						<CardStars score={placeholderMovieCard.score} />
						<div className='w-full flex flex-col gap-1'>
							<CardAuthor text={placeholderMovieCard.author} />
							<CardButton text='Ver reseña' href='#' />
						</div>
					</div>
				</CardPreview>
			</section>
		</main>
	);
}
