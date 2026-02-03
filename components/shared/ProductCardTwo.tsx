import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCardTwo = () => {
	return (
		<div className='group relative h-fit flex flex-col rounded-3xl border border-border overflow-hidden bg-white'>
			<div className='absolute bg-[#FDEEEC] right-0 top-0 rounded-bl-2xl rounded-tr-2xl text-primary text-sm py-2 px-2 z-2'>
				-50%
			</div>
			<Link href={`/products/${9393}/details`}>
				<div className='rounded-2xl overflow-hidden'>
					<Image
						src='/hoodie.png'
						alt='hoodie'
						width={250}
						height={100}
						className=' group-hover:scale-110 transition-transform duration-300 ease-in-out'
					/>
				</div>
				<div className='px-2 py-1'>
					<div className='flex items-center justify-between'>
						<h2 className='font-semibold text-xl'>Handbag</h2>
					</div>
					<p className='text-foreground text-sm leading-5 w-full'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
						nostrum nam 
					</p>
					<div className='flex items-center gap-2'>
						<p className='font-semibold text-xl'>$799</p>
						<p className='text-foreground line-through text-sm'>$1000</p>
					</div>
				</div>
			</Link>

			<div className='flex justify-between gap-2 pr-4'>
				<button className='flex-1 bg-primary text-white py-2.5 cursor-pointer px-4 flex items-center justify-center gap-1.5 rounded-bl-3xl rounded-tr-3xl'>
					<span>Add to Cart</span>
				</button>
				<div className='rounded-full cursor-pointer p-2 w-fit h-fit bg-muted-foreground'>
					<Heart />
				</div>
			</div>
		</div>
	);
};

export default ProductCardTwo;
