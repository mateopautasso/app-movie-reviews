import Image, { StaticImageData } from 'next/image';

function CardImageReview({ src, alt }: { src: StaticImageData | string; alt: string }) {
	return (
		<figure className='w-full h-[400px] relative overflow-hidden rounded-sm'>
			<Image fill={true} objectFit='cover' objectPosition='center' src={src} alt={alt} />
		</figure>
	);
}
export default CardImageReview;
