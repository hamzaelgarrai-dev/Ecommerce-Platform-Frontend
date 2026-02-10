import { Plus } from "lucide-react";

const page = () => {
	// const [selectedSection, setSelectedSection] = useState("favorite")
	return (
		<div className='w-full h-screen px-4'>
			<h1 className='font-semibold text-3xl mb-6'>Favorites</h1>
			<div className='bg-muted-foreground flex border border-border rounded-xl w-fit'>
				<button className='bg-primary text-white px-4 py-2 rounded-xl cursor-pointer'>
					Favorite
				</button>
				<button className='px-4 py-2 rounded-xl cursor-pointer'>History</button>
			</div>
			<div className='flex gap-4 my-10'>
				<div className='flex-[0.25] rounded-3xl border-2 border-border bg-white p-4 space-y-4 '>
					<div className='flex items-center justify-between'>
						<h2 className='font-semibold text-xl'>My list</h2>
						<button className='bg-primary px-3 py-2 text-white rounded-xl flex items-center gap-1 cursor-pointer'>
							<Plus /> <span>Add list</span>
						</button>
					</div>
					<div className='space-y-2'>
						<button className='w-full bg-muted-foreground hover:bg-muted-foreground transition-colors rounded-xl py-2 text-start px-3 cursor-pointer'>
							<span>All</span>
							<p className='text-foreground'>3 items</p>
						</button>
						<button className='w-full hover:bg-muted-foreground transition-colors rounded-xl py-2 text-start px-3 cursor-pointer'>
							<span>Ungrouped</span>
							<p className='text-foreground'>3 items</p>
						</button>
						<button className='w-full hover:bg-muted-foreground transition-colors rounded-xl py-2 text-start px-3 cursor-pointer'>
							<span>All</span>
							<p className='text-foreground'>3 items</p>
						</button>
					</div>
				</div>
				<div className='flex-1 bg-muted-foreground rounded-4xl p-4'></div>
			</div>
		</div>
	);
};

export default page;
