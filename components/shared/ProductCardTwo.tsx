import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const images = ["/saad.JPG", "/zustand.png", "/hoodie.png"];
const ProductCardTwo = () => {
	// console.log(Math.floor(Math.random() * 3));
	return (
		<div className='group relative h-full flex flex-col rounded-3xl border border-border overflow-hidden bg-white'>
			<div className='absolute bg-[#FDEEEC] right-0 top-0 rounded-bl-2xl rounded-tr-2xl text-primary text-sm py-2 px-2 z-2'>
				-50%
			</div>
			<Link href={`/products/${9393}/details`}>
				<div className='aspect-square rounded-2xl overflow-hidden'>
					<Image
						src={images[Math.floor(Math.random() * 3)]}
						alt='hoodie'
						width={600}
						height={600}
						className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out'
					/>
				</div>
				<div className='flex flex-1 flex-col grow px-2 py-1'>
					<h2 className='font-semibold text-xl leading-tight line-clamp-1'>
						Handbag
					</h2>

					<p className='text-foreground text-sm leading-5 w-full line-clamp-2'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
						nostrum nam
					</p>
					<div className='flex items-center gap-2 pt-1'>
						<p className='font-semibold text-xl'>$799</p>
						<p className='text-foreground line-through text-sm'>$1000</p>
					</div>
				</div>
			</Link>

			<div className='flex justify-between gap-2 pr-2'>
				<button className='text-[clamp(14px,1vw,1.5vw)] flex-1 bg-primary text-white py-2.5 cursor-pointer px-4 flex items-center justify-center gap-1.5 rounded-bl-3xl rounded-tr-3xl'>
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
