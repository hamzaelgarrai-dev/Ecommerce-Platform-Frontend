import { Camera, Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type SearchBarProps = { setShowSearchBar: Dispatch<SetStateAction<boolean>> };
const SearchBar = ({ setShowSearchBar }: SearchBarProps) => {
	return (
		<>
			<div className='md:hidden absolute top-1/12  left-1/2 -translate-x-1/2  w-[90vw] sm:w-[80vw] z-10'>
				<div className='flex items-center gap-2 rounded-full bg-muted-foreground p-3.5 mb-6'>
					<Search size={26} />
					<input
						type='text'
						placeholder='Search for product'
						className='flex-1 focus:outline-none text-lg'
					/>
					<Camera size={26} className='cursor-pointer' />
				</div>
				<div className='rounded-3xl p-6 flex flex-col gap-4 bg-muted-foreground'>
					<div className='flex gap-2'>
						<Search size={22} />
						<span>handbag</span>
					</div>
					<div className='flex gap-2'>
						<Search size={22} />
						<span>handbag</span>
					</div>
					<div className='flex gap-2'>
						<Search size={22} />
						<span>handbag</span>
					</div>
				</div>
			</div>
			<div
				className='md:hidden absolute top-0 w-full h-screen bg-black/45 z-0'
				onClick={() => setShowSearchBar(false)}
			></div>
		</>
	);
};

export default SearchBar;
