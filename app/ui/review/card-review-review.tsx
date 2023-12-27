import { MovieCardContent } from '@/app/lib/types';

function SectionReview({ title, content }: { title: String; content: String }) {
	return (
		<div className='w-full'>
			<h5 className='w-full text-lg text-start font-bold'>{title}</h5>
			<p className='text-base text-gray-800 text-start w-full' style={{ textWrap: 'pretty' }}>
				{content}
			</p>
		</div>
	);
}

function CardReviewReview({ sections }: { sections: MovieCardContent[] }) {
	return (
		<div className='w-full flex flex-col gap-4 my-2'>
			{sections.map((section, index) => (
				<SectionReview key={index} title={section.title} content={section.content} />
			))}
		</div>
	);
}
export default CardReviewReview;
