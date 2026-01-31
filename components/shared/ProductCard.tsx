import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

const ProductCard = () => {
	return (
		<div className='relative flex flex-col gap-1 rounded-2xl p-2 shadow-[0_0_8px_rgba(0,0,0,0.30)] w-[20%]'>
			<div className='absolute bg-[#FDEEEC] right-3 top-3 rounded-full text-primary text-sm py-0.5 px-1.5'>
				-50%
			</div>
			<Image
				src='/hoodie.png'
				alt='hoodie'
				width={300}
				height={100}
				className='rounded-[10px]'
			/>
			{/* <div className='flex flex-col gap-1'> */}
			<h2 className='font-semibold text-xl'>Handbag</h2>
			<p className='text-foreground leading-5'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nostrum
				nam nobis sed accusantium repellat,{" "}
			</p>
			<div className='flex gap-2 items-center'>
				<p className='font-semibold text-xl'>$799</p>
				<p className='text-foreground line-through text-sm'>$1000</p>
			</div>
			{/* </div> */}
			<div className='flex items-center justify-between gap-2'>
				<button className='flex-1 bg-primary text-white py-2 cursor-pointer px-4 flex items-center justify-center gap-1.5 rounded-full'>
					<ShoppingCart size={20} /> <span>Add to Cart</span>
				</button>
				<div className='rounded-full cursor-pointer p-2 bg-muted-foreground'>
					<Heart />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
