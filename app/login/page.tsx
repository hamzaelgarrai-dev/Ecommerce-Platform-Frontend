import { Slack } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<div className='w-screen h-[calc(100vh-130px)] flex items-center justify-center'>
			{/* <div className='hidden relative w-[49%] h-full rounded-3xl  overflow-hidden'>
				<div className='absolute w-full h-full bg-radial-[at_50%_75%] from-[#fd874d] via-[#f6b8a1] to-[#f7e2e0] to-90% z-0'></div>
				<div className='absolute w-full h-full backdrop-blur-3xl bg-black/5 flex flex-col items-center justify-center'>
					<h1 className='text-2xl font-semibold text-black'>
						e-commerce platform
					</h1>
					<p className='text-center max-w-[70%] font-semibold'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
						atque quo deleniti rerum suscipit reprehenderit numquam
						perspiciatis, tenetur dolore unde quam dignissimos possimus ipsum
						iste qui quos illum voluptates dolorem?
					</p>
				</div>
			</div> */}
			{/* <div className='w-[49%] h-full bg-amber-50  p-10'> */}
			<div className='w-[80%] sm:w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] space-y-4'>
				<Slack size={34} className='text-primary fill-primary' />
				<h1 className='font-semibold text-4xl'>Create an account</h1>
				<p className='text-foreground '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni
					minus rem repellendus impedit fuga tempora,{" "}
				</p>
				<div>
					<label htmlFor='email' className='block font-semibold'>
						Your email
					</label>
					<input
						type='text'
						className='w-full border-2 border-[#e1e1e6] rounded-xl text-[16px] p-2 focus:outline-none'
						placeholder='fake@example.com'
					/>
				</div>
				<div>
					<label htmlFor='password' className='block font-semibold'>
						Password
					</label>
					<input
						type='password'
						className='w-full border-2 border-[#e1e1e6] rounded-xl text-[16px] p-2 focus:outline-none'
						placeholder='password'
					/>
				</div>
				<button className='bg-black text-white font-semibold rounded-xl py-2.5 w-full cursor-pointer'>
					Create account
				</button>
				<div className='flex items-center justify-center w-full gap-2'>
					<div className='bg-muted-foreground w-[30%] h-0.75 rounded-full'></div>
					<div>Or continue with</div>
					<div className='bg-muted-foreground w-[30%] h-0.75 rounded-full'></div>
				</div>
				<div className='border-2 border-border p-2 rounded-xl flex items-center justify-center'>
					<Image src={"/google.svg"} alt='google' width={30} height={30} />
				</div>
				<p className='text-center'>
					Don&apos;t hava an account?{" "}
					<Link href={"/register"} className='text-primary'>
						Register
					</Link>
				</p>
			</div>
			{/* </div> */}
		</div>
	);
};

export default page;
