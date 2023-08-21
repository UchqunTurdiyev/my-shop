'use client';
import { ProductType } from '@/interfaces';
import React, { FC, useCallback } from 'react';
import { useState } from 'react';
import Product from './product';
import { FcSearch } from 'react-icons/fc';
import { TfiReload } from 'react-icons/tfi';

export const ProductList: FC<{ product: ProductType[] }> = ({ product }) => {
	const [search, setSearch] = useState<string>('');
	const [filter, setFilter] = useState<string>('');

	const filteredData = useCallback(() => {
		switch (filter) {
			case "men's clothing":
				return product.filter(c => c.category === "men's clothing");
			case 'jewelery':
				return product.filter(c => c.category === 'jewelery');
			case 'electronics':
				return product.filter(c => c.category === 'electronics');
			case "women's clothing":
				return product.filter(c => c.category === "women's clothing");
			default:
				return product;
		}
	}, [filter]);

	const handlAllCategory = () => {
		window.location.reload();
	};

	return (
		<div>
			<div className='min-h-screen max-w-7xl mx-auto px-8 xl:0 '>
				<section className='flex flex-col space-y-12'>
					<h1 className='text-5xl font-bold text-center mt-16'>My shop deal</h1>
					<div className='flex w-full md:justify-start justify-center items-end'>
						<div className='mr-6 flex items-center flex-wrap gap-2'>
							<button
								onClick={handlAllCategory}
								className='flex items-center gap-2 text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md'
							>
								All category <TfiReload />
							</button>
							{allCategoryButton.map(el => (
								<button
									key={el.id}
									onClick={() => setFilter(el.id)}
									className='inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md'
								>
									{el.label}
								</button>
							))}
						</div>
						<div className='relative mr-4 lg:w-full xl:w-1/2 w-2/4'>
							<input
								placeholder='Search products...'
								type='text'
								id='hero-field'
								name='hero-field'
								className='w-full relative bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								onChange={e => setSearch(e.target.value)}
							/>
							<FcSearch className='text-2xl absolute right-2 top-2 cursor-pointer' />
						</div>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8'>
						{filteredData()
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

export const allCategoryButton = [
	{ label: "Men's ", id: "men's clothing" },
	{ label: 'Jewelery', id: 'jewelery' },
	{ label: 'Electronics', id: 'electronics' },
	{ label: "women's", id: "women's clothing" },
];
