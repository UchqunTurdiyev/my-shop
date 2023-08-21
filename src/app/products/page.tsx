import Featured from '@/components/featured';
import Product from '@/components/product';
import { ProductType } from '@/interfaces';
import React from 'react';

export default async function ProductsPage() {
	const res = await fetch('https://fakestoreapi.com/products');
	const product: ProductType[] = await res.json();
	return (
		<div className='min-h-screen max-w-7xl mx-auto px-8 xl:0 '>
			<Featured />;
			<section className='flex flex-col space-y-12'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8'>
					{product.map(product => (
						<Product key={product.id} product={product} />
					))}
				</div>
			</section>
		</div>
	);
}
