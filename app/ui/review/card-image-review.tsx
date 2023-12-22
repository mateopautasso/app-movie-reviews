import Image, { StaticImageData } from 'next/image';
import ImgCard from '@/assets/Los_Fabelman-672134059-large.jpg';

function CardImageReview({ src, alt }: { src: StaticImageData | string; alt: string }) {
	return (
		<figure className='w-full h-[400px] relative overflow-hidden rounded-sm'>
			<Image fill={true} objectFit='cover' objectPosition='center' src={ImgCard} alt={alt} />
		</figure>
	);
}
export default CardImageReview;
