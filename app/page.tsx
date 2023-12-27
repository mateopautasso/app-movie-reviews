import CardPreview from './ui/preview/card-preview';
import CardTitle from './ui/card-title';
import CardImagePreview from './ui/preview/card-image-preview';
import CardStars from './ui/card-stars';
import CardAuthor from './ui/card-author';
import { LinkButton } from './ui/buttons';
import { fetchAllReview } from './lib/data';

export default async function Home() {
	const allMovies = await fetchAllReview();

	return (
		<main className='flex flex-col items-center'>
			<section className='w-full h-full flex justify-center flex-wrap gap-8'>
				{allMovies.length > 0 ? (
					allMovies.map((movie): React.ReactElement => {
						return (
							<CardPreview key={movie.id}>
								<CardTitle text={movie.title} />
								<CardImagePreview src={movie.poster} alt={movie.title} />
								<div className='w-full flex flex-col gap-1'>
									<CardStars score={movie.score} />
									<CardAuthor text={movie.author} />
									<LinkButton text='Ver reseña' href={`/movie/${movie.id}`} />
								</div>
							</CardPreview>
						);
					})
				) : (
					<h5 className='text-3xl text-center'>Todavía no hay reseñas en nuestra base de datos.</h5>
				)}
			</section>
		</main>
	);
}
