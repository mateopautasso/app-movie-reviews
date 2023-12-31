'use client';
import Image from 'next/image';

import { fetchNamesMovieOfTMBD } from '../lib/data';
import { getReleaseYear } from '@/app/lib/utils';
import blurCard from '@/app/lib/blur';
import { useSelectMovie } from '../hooks/useSelectMovie';
import { CardResultInApi } from './card-result-in-api';

interface MovieSelected {
	title: string;
	year: string;
	poster: string;
	overview: string;
}

export function MovieSelected({ title, year, poster, overview }: MovieSelected) {
	return (
		<div className='w-full h-[108px] p-1 flex items-center gap-2 bg-transparent'>
			<Image
				width={75}
				height={100}
				src={poster}
				alt={title}
				className='h-full w-[75px] min-w-[75px] object-cover overflow-hidden rounded-md border-2 border-gray-700'
				placeholder='blur'
				blurDataURL={blurCard}
			/>

			<div className='h-full flex flex-col justify-around gap-1 text-ellipsis'>
				<h4 className='font-semibold text-md'>
					{title}
					<span className='text-sm font-semibold text-gray-400'> - {year}</span>
				</h4>
				<p className='text-[0.80rem] max-h-[50px] leading-none font-semibold text-gray-600 xxs:line-clamp-2 xs:line-clamp-3 sm:line-clamp-4 md:leading-tight'>
					{overview}
				</p>
			</div>
		</div>
	);
}

export function ChooseMovieField() {
	const { movies, inputMovieSelected, handleFetching, choseMovie } = useSelectMovie(fetchNamesMovieOfTMBD);

	return (
		<div className='flex flex-col gap-[2px] w-full rounded-b-md overflow-hidden'>
			<input
				className='p-2 bg-transparent border-2 border-gray-400 rounded-md'
				type='text'
				id='select-movie'
				name='select-movie'
				placeholder='Titanic, Jurassic Park, etc.'
				onChange={handleFetching}
			/>
			<input
				className='hidden'
				type='text'
				name='title'
				id='title'
				readOnly
				value={inputMovieSelected ? inputMovieSelected.title : ''}
				aria-describedby='error-input-choose-movie'
			/>
			<input
				className='hidden'
				type='text'
				name='poster'
				id='poster'
				readOnly
				value={inputMovieSelected ? inputMovieSelected.poster : ''}
			/>

			{movies.length > 0 && (
				<div className='absolute top-[81px] flex flex-col gap-[2px] border-2 w-full bg-gray-700 border-gray-700 rounded-b-md overflow-hidden'>
					{movies.map((movie) => {
						return <CardResultInApi key={movie.id} data={movie} onClick={choseMovie} />;
					})}
				</div>
			)}
			{inputMovieSelected ? (
				<div>
					<h6 className='text-sm font-semibold text-gray-700 ml-1 mt-2'>Película seleccionada:</h6>
					<MovieSelected
						title={inputMovieSelected.title}
						year={getReleaseYear(inputMovieSelected.year)}
						poster={inputMovieSelected.poster}
						overview={inputMovieSelected.overview}
					/>
				</div>
			) : (
				<p className='text-center mt-4 text-gray-700 font-semibold'>Debes seleccionar una película</p>
			)}
		</div>
	);
}
