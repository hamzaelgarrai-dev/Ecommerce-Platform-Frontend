"use client";
import ProductCounter from "@/components/shared/ProductCounter";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

// { params }: { params: Promise<{ slug: string }> }
const page = () => {
	// const { slug } = await params;

	return (
		<div className='min-h-[calc(100vh-130px)] w-full bg-lime-400 flex justify-between items-start gap-4 p-10'>
			<div className='w-[55%] rounded-3xl space-y-2'>
				<div className='rounded-2xl border-2 border-primary overflow-hidden'>
					<Image src={"/hoodie.png"} alt='hoodie' width={800} height={900} />
				</div>
				<div className='flex gap-2 '>
					<div className='rounded-2xl border-2 border-primary overflow-hidden'>
						{" "}
						<Image
							src={"/hoodie.png"}
							alt='hoodie'
							width={100}
							height={900}
							className='rounded-xl'
						/>
					</div>
					<div className='rounded-2xl border-2 border-primary overflow-hidden'>
						{" "}
						<Image
							src={"/hoodie.png"}
							alt='hoodie'
							width={100}
							height={900}
							className='rounded-xl'
						/>
					</div>
					<div className='rounded-2xl border-2 border-primary overflow-hidden'>
						{" "}
						<Image
							src={"/hoodie.png"}
							alt='hoodie'
							width={100}
							height={900}
							className='rounded-xl'
						/>
					</div>
					<div className='rounded-2xl border-2 border-primary overflow-hidden'>
						{" "}
						<Image
							src={"/hoodie.png"}
							alt='hoodie'
							width={100}
							height={900}
							className='rounded-xl'
						/>
					</div>
				</div>
			</div>
			<div className='w-[45%] space-y-4'>
				<p className='text-foreground'>category name</p>
				<div className='flex items-center gap-4'>
					<h1 className='font-semibold text-3xl'>Houdie</h1>
					<div className='border-2 text-green-500 rounded-full px-3 py-0.75 bg-green-50'>
						in stock
					</div>
				</div>
				<div className='flex'>
					<Star size={20} className='fill-yellow-300 stroke-yellow-300' />
					<Star size={20} className='fill-yellow-300 stroke-yellow-300' />
					<Star size={20} className='fill-yellow-300 stroke-yellow-300' />
					<Star size={20} className='fill-yellow-300 stroke-yellow-300' />
					<Star size={20} className='fill-yellow-300 stroke-yellow-300' />
				</div>
				<div className='flex items-center gap-2'>
					<p className='font-semibold text-4xl text-primary'>$799</p>
					<p className='text-foreground line-through text-xl'>$1000</p>
				</div>
				<p className='text-foreground max-w-[65%]'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
					nesciunt repudiandae saepe excepturi? Quia itaque aspernatur nostrum
					aut asperiores, nesciunt nam. Vero impedit autem, vitae saepe
					temporibus eos incidunt.
				</p>
				<div>
					<p className='font-semibold mb-1'>Size/Volume</p>
					<div className='flex gap-2'>
						<div className='bg-primary text-white px-5 py-1.5 rounded-full border border-primary'>
							XL
						</div>
						<div className='bg-white text-black px-5 py-1.5 rounded-full border border-border'>
							XL
						</div>
						<div className='bg-white text-black px-5 py-1.5 rounded-full border border-border'>
							XL
						</div>
						<div className='bg-white text-black px-5 py-1.5 rounded-full border border-border'>
							XL
						</div>
					</div>
				</div>
				<div className='flex gap-2'>
					<ProductCounter />
					<button className='bg-primary rounded-full px-4 py-0.75 text-white'>
						Add to cart
					</button>
					<div className='rounded-full cursor-pointer p-2 w-fit h-fit bg-muted-foreground'>
						<Heart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
