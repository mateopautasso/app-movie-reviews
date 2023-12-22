import Link from 'next/link';

function CardButton({ text, href }: { text: string; href: string }) {
	return (
		<Link href={href} className='text-center p-2 border border-gray-300 rounded-md hover:bg-gray-200'>
			<strong>{text}</strong>
		</Link>
	);
}
export default CardButton;
