import Link from 'next/link';
function AsideItem({ text, href }: { text: string; href: string }) {
	return (
		<li className='text-xl font-bold underline text-center'>
			<Link href={href}>{text}</Link>
		</li>
	);
}
export default AsideItem;
