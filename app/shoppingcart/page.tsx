"use client";
import ProductCounter from "@/components/shared/ProductCounter";
import { Handbag } from "lucide-react";

const page = () => {
	return (
		<div className='w-full bg-muted-foreground flex gap-4 p-20 rounded-4xl'>
			<div className='w-[70%] flex flex-col gap-4'>
				{[...Array(4)].map((item, index) => (
					<div
						key={index}
						className='w-full bg-white rounded-3xl p-4 flex items-center gap-4'
					>
						<div className='w-[20%] text-black p-10 bg-muted-foreground rounded-2xl flex items-center justify-center'>
							<Handbag size={40} />
						</div>
						<div className='flex-1 h-full flex items-center justify-between'>
							<div>
								<div className='mb-2'>
									<h2 className='capitalize text-2xl font-semibold'>backbag</h2>
									<p className='text-foreground'>Bag</p>
									<p className='text-foreground'>
										Color: <span className='text-black'>black</span>
									</p>
								</div>

								<div className='flex items-center gap-2'>
									<p className='text-foreground line-through text-sm'>$1000</p>
									<p className='font-semibold text-2xl'>$799</p>
									<p className='text-primary'>20% OFF</p>
								</div>
							</div>
							<div className='h-full flex flex-col justify-evenly'>
								<ProductCounter />
								<p className='underline text-red-500 text-center'>Remove</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='w-[30%] rounded-4xl bg-white p-6 flex flex-col gap-4 h-fit '>
				<h2 className='font-semibold text-xl mb-2'>Order Summary</h2>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<p>Item(s) total:</p>
						<p className='text-foreground line-through'>4000$</p>
					</div>
					<div className='flex items-center justify-between'>
						<p>Item(s) discount:</p>
						<p className='text-primary text-[16px]'>-800$</p>
					</div>
					<hr className='border rounded-full border-border' />
					<div className='flex items-center justify-between'>
						<p>Total</p>
						<p className='text-primary text-[16px]'>3200$</p>
					</div>
				</div>
				<button className='w-full rounded-full bg-black text-white py-3'>
					Checkout New
				</button>
			</div>
		</div>
	);
};

export default page;
