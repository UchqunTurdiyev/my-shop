'use client';

import Link from 'next/link';
import { BsCartPlusFill } from 'react-icons/bs';
import { FaOpencart } from 'react-icons/fa';

export default function Navbar() {
	return (
		<header className='text-gray-600 body-font bg-slate-200'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<Link href={'/'} className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
					<FaOpencart className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full' />

					<span className='ml-3 text-xl'>SHops</span>
				</Link>
				<nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
					<Link href={'/'} className='mr-5 hover:text-gray-900'>
						Home
					</Link>
					<Link href={'/products'} className='mr-5 hover:text-gray-900'>
						Products
					</Link>
					<Link href={'/contact'} className='mr-5 hover:text-gray-900'>
						Contact
					</Link>
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
