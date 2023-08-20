'use client';
import { ProductType } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import CustomImage from './image';

const Product: FC<{ product: ProductType }> = ({ product }) => {
	return (
		<Link
			href={`/product/${product.id}`}
			className='h-[400px] flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform easy-out duration-200 border'
		>
			<div className='relative max-h-80 flex-1'>
				<CustomImage product={product} fill />
			</div>
			<h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font mt-5'>{product.category}</h3>
			<div className='flex items-center justify-between pt-4 pb-1 text-lg font-semibold text-gray-900 '>
				<p className=' w-44 truncate'>{product.title}</p>
				<p>${product.price}</p>
			</div>
			<p className='leading-relaxed text-base line-clamp-3'>{product.description}</p>
		</Link>
	);
};

export default Product;
