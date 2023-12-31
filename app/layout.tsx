import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

import Navbar from './ui/navbar/navbar';
import SectionTitle from './ui/section-title';

export const metadata: Metadata = {
	title: 'App de reseñas',
	description: 'Aplicación a través de la cual podrás ver e incluso subir tus propias reseñas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-gray-100 min-h-screen px-4 py-8 lg:p-8`}>
				<SectionTitle text='App de reseñas' />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
