'use client';
import CustomImage from '@/components/image';
import { ProductType } from '@/interfaces';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';

const ShoppingCardPage = () => {
	const [total, setTotal] = useState<number>(0);
	const [product, setProduct] = useState<ProductType[]>(
		JSON.parse((typeof window !== 'undefined' && localStorage.getItem('cart')) || '[]')
	);

	const removeProduct = (id: number) => {
		const updateCard = product.filter(el => el.id !== id);
		localStorage.setItem('cart', JSON.stringify(updateCard));
		setProduct(updateCard);
	};

	const handleIncrement = (id: number) => {
		const updateCard = product.map(el => {
			if (el.id == id) {
				return {
					...el,
					quantity: el.quantity + 1,
				};
			}

			return el;
		});
		localStorage.setItem('cart', JSON.stringify(updateCard));
		setProduct(updateCard);
	};

	const handleDecrement = (id: number) => {
		const existProduct = product.find(c => c.id === id);
		if (existProduct?.quantity === 1) {
			removeProduct(existProduct.id);
		} else {
			const updateCard = product.map(el => {
				if (el.id == id) {
					return {
						...el,
						quantity: el.quantity - 1,
					};
				}

				return el;
			});
			localStorage.setItem('cart', JSON.stringify(updateCard));
			setProduct(updateCard);
		}
	};

	useEffect(() => {
		const total = product.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0);
		setTotal(total);
	}, [product]);

	return (
		<>
			{product.length ? (
				<div className='h-screen bg-gray-100 pt-20'>
					<h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
					<div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
						<div className='rounded-lg md:w-2/3'>
							{product &&
								product.map(el => (
									<div key={el.id} className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
										<div className='relative w-52'>
											<CustomImage product={el} fill />
										</div>
										<div className='sm:ml-4 sm:flex sm:w-full gap-x-4 sm:justify-between'>
											<div className='mt-5 sm:mt-0'>
												<h2 className='text-lg font-bold text-gray-900 line-clamp-2'>{el.title}</h2>
												<p className='text-sm  text-gray-600 line-clamp-2'>{el.description}</p>
												<div className='flex gap-8 items-center py-2'>
													<ReactStars value={el.rating.rate} edit={false} />
													<p className='text-blue-600 hover:underline cursor-pointer text-xs'>
														See al {el?.rating.count} reviews
													</p>
												</div>
											</div>
											<div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
												<div className='flex items-center border-gray-100'>
													<span
														onClick={() => handleDecrement(el.id)}
														className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'
													>
														{' '}
														-{' '}
													</span>
													<p className='px-3 py-1 border text-sm'>{el.quantity}</p>

													<span
														onClick={() => handleIncrement(el.id)}
														className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'
													>
														{' '}
														+{' '}
													</span>
												</div>
												<div className='flex items-center space-x-4'>
													<p className='text-sm'>
														{(el.price * el.quantity).toLocaleString('en-US', { style: 'currency', currency: 'usd' })}
													</p>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														strokeWidth='1.5'
														stroke='currentColor'
														className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
														onClick={() => removeProduct(el.id)}
													>
														<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
													</svg>
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
						{/* <!-- Sub total --> */}
						<div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
							<div className='mb-2 flex justify-between'>
								<p className='text-gray-700'>Subtotal</p>
								<p className='text-gray-700'>{total.toLocaleString('en-US', { currency: 'usd', style: 'currency' })}</p>
							</div>
							<div className='flex justify-between'>
								<p className='text-gray-700'>Shipping</p>
								<p className='text-gray-700'>{(10).toLocaleString('en-US', { currency: 'usd', style: 'currency' })}</p>
							</div>
							<hr className='my-4' />
							<div className='flex justify-between'>
								<p className='text-lg font-bold'>Total</p>
								<div className=''>
									<p className='mb-1 text-lg font-bold'>
										{(total + 10).toLocaleString('en-US', { currency: 'usd', style: 'currency' })}
									</p>
									<p className='text-sm text-gray-700'>including VAT</p>
								</div>
							</div>
							<button className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'>
								Check out
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className='lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16'>
					<div className='xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
						<div className='relative'>
							<div className='absolute'>
								<div className=''>
									<h1 className='my-2 text-gray-800 font-bold text-2xl'>Your cart is empty!!</h1>
									<p className='my-2 text-gray-800'>
										If you want to buy quality goods, click on this button and click the button to add to the basket.
									</p>
									<Link href={'/'}>
										<button className='sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50'>
											Take me there!
										</button>
									</Link>
								</div>
							</div>
							<div>
								<img src='https://i.ibb.co/G9DC8S0/404-2.png' />
							</div>
						</div>
					</div>
					<div>
						<img src='https://i.ibb.co/ck1SGFJ/Group.png' />
					</div>
				</div>
			)}
		</>
	);
};

export default ShoppingCardPage;
