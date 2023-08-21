'use client';
import { ProductType } from '@/interfaces';
import React, { FC } from 'react';
import { useState } from 'react';
import Product from './product';

export const ProductList: FC<{ product: ProductType[] }> = ({ product }) => {
	const [search, setSearch] = useState<string>('');

	return (
		<div>
			<div className='min-h-screen max-w-7xl mx-auto px-8 xl:0 '>
				<section className='flex flex-col space-y-12'>
					<h1 className='text-5xl font-bold text-center'>My shop deal</h1>
					<div className='flex w-full md:justify-start justify-center items-end'>
						<div className='relative mr-4 lg:w-full xl:w-1/2 w-2/4'>
							<input
								placeholder='Search products...'
								type='text'
								id='hero-field'
								name='hero-field'
								className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								onChange={e => setSearch(e.target.value)}
							/>
						</div>
						<button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
							Search
						</button>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8'>
						{product
							.filter(el => {
								return search.toLowerCase() === '' ? el : el.title.toLowerCase().includes(search);
							})
							.map(el => (
								<Product key={el.id} product={el} />
							))}
					</div>
				</section>
			</div>
		</div>
	);
};
