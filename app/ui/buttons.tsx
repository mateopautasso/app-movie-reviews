'use client';
import Link from 'next/link';

export function LinkButton({ text, href }: { text: string; href: string }) {
	return (
		<Link href={href} className='text-center p-2 border border-gray-300 rounded-md hover:bg-gray-200'>
			<strong>{text}</strong>
		</Link>
	);
}
export function ActionButton({ text, type, onClick }: { text: string; onClick?: () => void; type: 'submit' | 'reset' | 'button' }) {
	return (
		<button onClick={onClick} type={type} className='text-center p-2 border border-gray-300 rounded-md hover:bg-gray-200'>
			<strong>{text}</strong>
		</button>
	);
}
