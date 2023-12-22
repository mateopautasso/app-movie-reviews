import Image, { StaticImageData } from 'next/image';

function CardImagePreview({ src, alt }: { src: StaticImageData | string; alt: string }) {
	return (
		<figure className='w-full relative overflow-hidden h-[300px] rounded-sm'>
			<Image fill={true} objectFit='cover' objectPosition='center' src={src} alt={alt} />
		</figure>
	);
}
export default CardImagePreview;
