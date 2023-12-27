'use client';
import NavbarItem from './navbar-item';
import { Routes } from '@/app/lib/types';
import { usePathname } from 'next/navigation';

function Navbar() {
	const path = usePathname();
	return (
		<header className='w-full flex flex-col my-3 px-2'>
			<ul className='flex justify-between w-full gap-2 items-center'>
				<NavbarItem text='Ver reseñas' href='/' />
				<NavbarItem text='Subir reseña' href='/movie/addmovie' />
			</ul>
		</header>
	);
}
export default Navbar;
