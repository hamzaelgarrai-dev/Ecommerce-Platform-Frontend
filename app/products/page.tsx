import SearchProducts from "@/components/SearchProducts";
import { Star } from "lucide-react";

const page = () => {
	return (
		<div className='w-full flex gap-4 '>
			<div className='hidden lg:block sticky top-18 flex-[0.2] h-full py-3 bg-white text-foreground space-y-4'>
				<div>
					<h2 className='flex items-center justify-between text-[16px] font-semibold text-black'>
						<span>Filter</span>
						<span>Clear all</span>
					</h2>
				</div>
				<hr className='border rounded-full border-border' />
				<div>
					<h2 className='text-foreground mb-1'>Price</h2>
					<div className='flex items-center gap-1'>
						<input
							type='number'
							placeholder='Min'
							className='w-[40%] focus:outline-none border-2 border-border rounded-lg p-0.75'
						/>
						<span>-</span>
						<input
							type='number'
							placeholder='Max'
							className='w-[40%] focus:outline-none border-2 border-border rounded-lg p-0.75'
						/>
						<button className='w-[20%] font-semibold p-0.75 text-white rounded-lg border-2 border-primary bg-primary'>
							ok
						</button>
					</div>
				</div>
				<hr className='border rounded-full border-border' />
				<div>
					<h2 className='text-foreground mb-1'>Other</h2>
					<div className='flex items-center gap-2 mb-1'>
						<input type='checkbox' id='stars' />
						<label htmlFor='stars' className='flex items-center gap-1'>
							<Star className='stroke-yellow-400 fill-yellow-400' size={17} />3
							start above
						</label>
					</div>
					<div className='flex items-center gap-2'>
						<input type='checkbox' id='new' />
						<label htmlFor='new' className='flex items-center gap-1'>
							<span className='rounded-md text-[10px] font-semibold py-0.5 px-0.75  text-white bg-black'>
								new
							</span>
							New release
						</label>
					</div>
				</div>
				<hr className='border rounded-full border-border' />
			</div>
			<SearchProducts />
		</div>
	);
};

export default page;
