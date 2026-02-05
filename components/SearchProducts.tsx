"use client";
import { useSearchParams } from "next/navigation";
import ProductCardTwo from "./shared/ProductCardTwo";

const SearchProducts = () => {
	const searchParams = useSearchParams();
	return (
		<div className='flex-1 bg-muted-foreground p-4 rounded-4xl'>
			<p className='text-foreground text-sm my-1'>
				Showing 473 Products for{" "}
				<span className='text-primary'>
					&quot;{searchParams.get("search")}&quot;
				</span>
			</p>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4'>
				{[...Array(18)].map((item, index) => (
					<ProductCardTwo key={index} />
				))}
			</div>
		</div>
	);
};

export default SearchProducts;
