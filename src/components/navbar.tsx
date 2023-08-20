'use client';

import Link from 'next/link';
import { BsCartPlusFill } from 'react-icons/bs';

export default function Navbar() {
	return (
		<header className='text-gray-600 body-font'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<Link href={'/'} className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
						viewBox='0 0 24 24'
					>
						<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
					</svg>
					<span className='ml-3 text-xl'>Tailblocks</span>
				</Link>
				<nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
					<a className='mr-5 hover:text-gray-900'>Home</a>
					<a className='mr-5 hover:text-gray-900'>About</a>
					<a className='mr-5 hover:text-gray-900'>Third Link</a>
					<a className='mr-5 hover:text-gray-900'>Fourth Link</a>
				</nav>
				<Link href={'/shopping-card'}>
					<button className='inline-flex items-center text-white bg-blue-600  py-1 px-3 focus:outline-none hover:bg-transparent hover:border-blue-600 border-2 hover:text-blue-600 rounded text-base mt-4 md:mt-0'>
						My Bag <BsCartPlusFill className='ml-2' />
					</button>
				</Link>
				<button className='inline-flex ml-2 items-centerw-full rounded-md py-1 px-3 hover:bg-blue-600 hover:text-white hover:border-transparent border-blue-600 border-2 bg-transparent text-black focus:outline-none  text-base mt-4 md:mt-0'>
					Login
				</button>
			</div>
		</header>
	);
}