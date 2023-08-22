import Hero from '@/components/hero';
import HeroFeatured from '@/components/hero-featured';
import { ProductList } from '@/components/product-list';
import { ProductType } from '@/interfaces';

export default async function Home() {
	const res = await fetch('https://fakestoreapi.com/products');
	const product: ProductType[] = await res.json();

	return (
		<div className='min-h-screen max-w-7xl mx-auto px-2 md:px-8 xl:0 '>
			<Hero />
			<ProductList product={product} />
			<HeroFeatured />
		</div>
	);
}
