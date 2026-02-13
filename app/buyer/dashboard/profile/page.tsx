import { Camera } from "lucide-react";

const page = () => {
	return (
		<div className='flex px-4 w-full h-fit'>
			<div className='flex-[0.25] rounded-4xl border-2 border-border overflow-hidden pb-2'>
				<div className='relative bg-primary/10 w-full h-40 rounded-t-2xl flex items-center justify-center'>
					<div className='font-semibold text-6xl text-primary/60'>H</div>
					<div className='absolute -bottom-1/6 rounded-full bg-white p-3 cursor-pointer border border-border'>
						<Camera size={28} />
					</div>
				</div>

				<div className='mt-10 px-2 space-y-6'>
					<h2 className='font-semibold text-xl text-center'>Hamza Elgrai</h2>
					<div className='space-y-2'>
						<div className='flex items-center gap-2'>
							<p className='text-foreground text-[15px]'>Email</p>
							<h3 className='flex-1'>Hamza@example.com</h3>
						</div>
						<div className='flex items-center gap-2'>
							<p className='text-foreground text-[15px]'>Member ID</p>
							<h3 className='flex-1'>ma39194404039ttaj</h3>
						</div>
					</div>
					<button className='rounded-3xl bg-black text-white py-2 w-full cursor-pointer'>
						Edit your profile
					</button>
				</div>
			</div>
			<div className='flex-1 overflow-hidden'></div>
		</div>
	);
};

export default page;
