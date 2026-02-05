import ProductCard from "@/components/shared/ProductCard";
import ProductCardTwo from "@/components/shared/ProductCardTwo";

export default function Home() {
	return (
		<div className='font-sans min-w-screen p-2 flex gap-4'>
			<ProductCard />
			<ProductCardTwo />
		</div>
	);
}
