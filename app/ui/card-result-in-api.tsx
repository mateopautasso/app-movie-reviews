import Image from 'next/image';
import { SearchResultCard } from '../lib/types';
import blurCard from '../lib/blur';

export function CardResultInApi({ data, onClick }: { data: SearchResultCard; onClick: (data: SearchResultCard) => void }) {
	const handleClick = () => {
		onClick({
			id: data.id,
			title: data.title,
			year: data.year,
			overview: data.overview,
			poster: data.poster,
		});
	};

	return (
		<div className='w-full h-[108px] p-1 flex items-center gap-2 bg-white hover:bg-gray-200 cursor-pointer' onClick={handleClick}>
			<Image
				width={75}
				height={100}
				src={data.poster}
				alt={data.title}
				className='h-full w-[75px] min-w-[75px] object-cover overflow-hidden rounded-md border-2 border-gray-700'
				placeholder='blur'
				blurDataURL={blurCard}
			/>

			<div className='h-full flex flex-col justify-around text-ellipsis'>
				<h4 className='font-semibold text-md leading-none'>
					{data.title}
					<span className='text-sm font-semibold text-gray-400'> - {data.year}</span>
				</h4>
				<p className='text-[0.80rem] max-h-[50px] leading-none font-semibold text-gray-600 xxs:line-clamp-2 xs:line-clamp-3 sm:line-clamp-4 md:leading-tight'>
					{data.overview}
				</p>
			</div>
		</div>
	);
}
