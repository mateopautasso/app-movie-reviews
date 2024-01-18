import Link from 'next/link';
function NavbarItem({ text, href }: { text: string; href: string }) {
	return (
		<li className='text-lg font-bold underline text-center'>
			<Link href={href}>{text}</Link>
		</li>
	);
}
export default NavbarItem;
