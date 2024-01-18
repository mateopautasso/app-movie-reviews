'use client';
import NavbarItem from './navbar-item';
import { usePathname } from 'next/navigation';
import Logo from './logo';

function Navbar() {
	const path = usePathname();

	return (
		<header className='w-full flex justify-between my-3 px-2 h-24'>
			<Logo />
			<ul className='flex justify-between gap-2 items-center pt-2'>
				{path === '/' && <NavbarItem text='Subir' href='/movie/addmovie' />}
				{path === '/movie/addmovie' && <NavbarItem text='Ver' href='/' />}
				{path !== '/' && path !== '/movie/addmovie' ? (
					<>
						<NavbarItem text='Ver' href='/' />
						<NavbarItem text='Subir' href='/movie/addmovie' />
					</>
				) : null}
			</ul>
		</header>
	);
}
export default Navbar;
