import Image, { StaticImageData } from 'next/image';
import blurCard from '@/app/lib/blur';

function CardImagePreview({ src, alt }: { src: StaticImageData | string; alt: string }) {
	return (
		<figure className='w-full relative overflow-hidden h-full min-h-[400px] rounded-sm'>
			<Image fill={true} src={src} alt={alt} className='object-cover' placeholder='blur' blurDataURL={blurCard} />
		</figure>
	);
}
export default CardImagePreview;
