import { MovieCardContent } from '@/app/lib/types';
import React from 'react';

function SectionReview({ title, content }: { title: string; content: string }) {
	const contenidoConSaltosDeLinea = content.split('\n').map((line, index) => (
		<React.Fragment key={index}>
			{line}
			<br />
		</React.Fragment>
	));
	return (
		<div className='w-full flex flex-col gap-2'>
			<h5 className='w-full text-lg text-start font-bold underline leading-tight'>{title}</h5>
			<p className='text-base text-gray-800 text-start w-full' style={{ textWrap: 'pretty' }}>
				{contenidoConSaltosDeLinea}
			</p>
		</div>
	);
}

function CardReviewReview({ sections }: { sections: MovieCardContent[] }) {
	return (
		<div className='w-full flex flex-col gap-8 my-2'>
			{sections.map((section, index) => (
				<SectionReview key={index} title={section.title} content={section.content} />
			))}
		</div>
	);
}
export default CardReviewReview;
