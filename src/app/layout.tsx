import Navbar from '@/components/navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/footer';
import { FaOpencart } from 'react-icons/fa';

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
	title: 'Shops',
	description: 'Shops clothes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<link
				rel='shortcut icon'
				href='https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2021/02/online-shopping-cart-png-free-file_60219041b8db3.png'
				type='image/x-icon'
			/>

			<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
			<meta name='author' content='Uchqun Turdiev' />
			<meta property='og:description' content='Shops' />
			<meta
				property='og:image'
				content='https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2021/02/online-shopping-cart-png-free-file_60219041b8db3.png'
			/>
			<meta property='og:image:height' content='630' />
			<meta property='og:image:width' content='1200' />
			<meta property='og:locale' content='uz_UZ' />

			<meta
				name='twitter:image'
				content='https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2021/02/online-shopping-cart-png-free-file_60219041b8db3.png'
			/>
			<meta name='twitter:card' content='summary_large_image' />
			<link
				rel='shortcut icon'
				href='https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2021/02/online-shopping-cart-png-free-file_60219041b8db3.png'
				type='image/x-icon'
			/>
			<body className={montserrat.className}>
				<Navbar />
				<ToastContainer />
				{children}
				<Footer />
			</body>
		</html>
	);
}
