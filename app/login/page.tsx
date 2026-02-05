import { Slack } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<div className='w-full flex justify-center items-center p-4 sm:p-8'>
			<div className='w-full max-w-md space-y-4'>
				<Slack size={34} className='text-primary fill-primary' />
				<h1 className='font-semibold text-3xl sm:text-4xl'>
					Create an account
				</h1>
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
				<div className='relative flex items-center py-2'>
					<div className=' bg-border grow h-0.75 rounded-full'></div>
					<div className='shrink mx-2'>Or continue with</div>
					<div className='bg-border grow h-0.75 rounded-full'></div>
				</div>
				<div className='w-full border-2 border-border p-2 rounded-xl flex items-center justify-center'>
					<Image src={"/google.svg"} alt='google' width={30} height={30} />
				</div>
				<p className='text-center'>
					Don&apos;t hava an account?{" "}
					<Link href={"/register"} className='text-primary'>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};

export default page;
