import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
import Navbar from './ui/navbar/navbar';

export const metadata: Metadata = {
	title: 'Movie Reviews',
	description: 'Aplicación a través de la cual podrás ver y subir tus propias reseñas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-gray-100 min-h-screen px-4 pb-8 lg:px-8`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
