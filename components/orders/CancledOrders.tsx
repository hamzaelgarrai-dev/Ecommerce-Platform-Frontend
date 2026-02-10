import { ArrowRight, Handbag, MapPin, Minus, Package, Truck } from "lucide-react";

const CancledOrders = () => {
	return (
		<div className='border-2 border-border  rounded-2xl'>
			<div className='p-4 space-y-4'>
				<div className='flex items-center justify-between'>
					<div>
						<p className='text-foreground'>Order ID</p>
						<div className='flex items-center gap-2'>
							<Package /> <span className='text-xl'>ORD-1111</span>
						</div>
					</div>
					<div className='flex items-center gap-2'>
						<div className='px-3 py-1 rounded-full border border-border text-sm text-foreground'>
							Estimated arrival: 11 Feb 2026
						</div>
						<div className='flex items-center gap-2 px-3 py-1 bg-red-100 rounded-full text-sm text-red-500'>
							<div className='w-2 h-2 bg-red-500 rounded-full'></div>
							<span>Canceled</span>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-foreground'>
						<Truck size={20} /> <span>Casablanca, Morocco</span>
					</div>
					<div className='flex'>
						<Minus size={22} />
						<Minus size={22} />
						<Minus size={22} />
						<Minus size={22} />
						<ArrowRight size={22} />
					</div>
					<div className='flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-foreground'>
						<MapPin size={20} /> <span>Daouha, Qatar</span>
					</div>
				</div>
				<div className='w-full bg-white rounded-3xl flex items-center gap-4 border border-border'>
					<div className='w- text-black p-10 bg-muted-foreground rounded-2xl flex items-center justify-center'>
						<Handbag size={40} />
					</div>
					<div className='flex-1 h-full'>
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
					</div>
				</div>
			</div>
			<div className='bg-muted-foreground w-full px-4 py-3 flex items-center justify-between rounded-b-2xl'>
				<h1 className='font-semibold text-lg'>
					Total: 340${" "}
					<span className='text-foreground text-[16px]'>(2 items)</span>
				</h1>
				<button className='px-4 cursor-pointer py-2 bg-black text-white rounded-full'>
					Details
				</button>
			</div>
		</div>
	);
};

export default CancledOrders;
