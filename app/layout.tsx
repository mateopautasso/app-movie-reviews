import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

import Navbar from './ui/navbar/navbar';
import NavbarItem from './ui/navbar/navbar-item';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-gray-100 min-h-screen px-4 py-8 lg:p-8`}>
				<Navbar>
					<NavbarItem text='Ver todas las reseñas' href='/' />
					<NavbarItem text='Subir nueva reseña' href='/movie/addmovie' />
				</Navbar>
				{children}
			</body>
		</html>
	);
}
