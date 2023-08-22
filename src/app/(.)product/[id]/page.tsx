'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ProductType } from '@/interfaces';
import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import CustomImage from '@/components/image';
import { FaStar } from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';
import ReactStars from 'react-stars';
import { toast } from 'react-toastify';

const ProductDetailedPage = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [product, setProduct] = useState<ProductType>();
	const [isOpen, setIsOpen] = useState(true);
	const [isAdded, setIsAdded] = useState(false);

	const { id } = useParams();
	const router = useRouter();

	useEffect(() => {
		async function getData() {
			setLoading(true);
			const res = await fetch(`https://fakestoreapi.com/products/${id}`);
			const product = await res.json();
			setProduct(product);
			setLoading(false);
		}
		getData();
	}, [id]);

	function handlClose() {
		setIsOpen(false);
		router.back();
	}

	const addToCard = () => {
		setIsAdded(true);
		const products: ProductType[] = JSON.parse(localStorage.getItem('cart') as string) || [];
		const isExistProducts = products.find(c => c.id === product?.id);

		if (isExistProducts) {
			const updatedData = products.map(c => {
				if (c.id === product?.id) {
					return {
						...c,
						quantity: c.quantity + 1,
					};
				}

				return c;
			});
			localStorage.setItem('cart', JSON.stringify(updatedData));
		} else {
			const data = [...products, { ...product, quantity: 1 }];
			localStorage.setItem('cart', JSON.stringify(data));
		}
		toast('Product added to your bag!!');
	};

	return (
		<Dialog open={isOpen} onClose={handlClose} className='relative z-50'>
			<div className='fixed inset-0 bg-black/50 ' aria-hidden='true' />

			<div className='fixed inset-0 overflow-y-auto'>
				<div className='flex min-h-full items-center  justify-between p-4'>
					<Dialog.Panel className={'mx-auto max-w-3xl rounded bg-white p-10'}>
						{loading ? (
							<div className='h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin' />
						) : (
							<div className='flex flex-col md:flex-row gap-x-8 md:h-96 h-[500px]'>
								{product?.image && (
									<div className='relative sm:w-72 w-52  mx-auto my-4  h-full  md:inline'>
										<CustomImage product={product} fill />
									</div>
								)}
								<div className='flex-1 flex flex-col'>
									<div className='flex-1'>
										<h4 className='font-semibold'>{product?.title}</h4>
										<p className='font-medium text-sm'>${product?.price}</p>
										<div className='flex items-center my-4 text-sm'>
											<p>{product?.rating.rate}</p>{' '}
											{product?.rating.rate && (
												<div className='flex items-center ml-2 mr-6'>
													{/* {Array.from({ length: Math.floor(product.rating.rate) }, (_, i) => (
														<FaStar className='w-4 h-4 text-yellow-500' key={i} />
													))}
													{Array.from({ length: 5 - Math.floor(product.rating.rate) }, (_, i) => (
														<BsStar key={i} className='w-4 h-4 text-yellow-500' />
													))} */}
													<ReactStars value={product.rating.rate} edit={false} />
												</div>
											)}
											<p className='text-blue-600 hover:underline cursor-pointer text-xs'>
												See al {product?.rating.count} reviews
											</p>
										</div>
										<p className='line-clamp-5 text-sm'>{product?.description}</p>
									</div>
									<div className='space-y-3 text-sm'>
										<button
											onClick={addToCard}
											className='w-full rounded-md py-2 bg-blue-600 text-white border-transparent hover:border-blue-600 border-2 hover:bg-transparent hover:text-black'
										>
											Add to bag
										</button>
										<button
											onClick={() => window.location.reload()}
											className='w-full rounded-md py-2 hover:bg-blue-600 hover:text-white hover:border-transparent border-blue-600 border-2 bg-transparent text-black'
										>
											View full details
										</button>
									</div>
								</div>
							</div>
						)}
					</Dialog.Panel>
				</div>
			</div>
		</Dialog>
	);
};

export default ProductDetailedPage;
