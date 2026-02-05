import {
	ArrowLeftRight,
	ClipboardList,
	Headset,
	Heart,
	LayoutDashboard,
	LogOut,
	MessageSquareText,
	UserCog,
} from "lucide-react";

const layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='w-full flex '>
			<aside className='h-[calc(100vh-71px)] flex flex-col justify-between p-2 rounded-full'>
				<div className='flex flex-col gap-4'>
					<div className='rounded-4xl bg-muted-foreground border border-border p-1 text-black'>
						<div className='rounded-full p-2.5 '>
							<LayoutDashboard />
						</div>
						<div className='rounded-full p-2.5 flex items-center gap-2 '>
							<Headset />
						</div>
					</div>
					<div className='space-y-2 w-fit bg-muted-foreground border border-border text-black p-1 rounded-full'>
						<div className='rounded-full p-2.5 bg-primary text-white'>
							<Heart />
						</div>
						<div className='rounded-full p-2.5'>
							<ClipboardList />
						</div>
						<div className='rounded-full p-2.5'>
							<MessageSquareText />
						</div>
						<div className='rounded-full p-2.5'>
							<UserCog />
						</div>
					</div>
				</div>
				<div className='space-1 p-1 bg-muted-foreground border border-border text-black  rounded-full '>
					<div className='rounded-full p-2.5'>
						<ArrowLeftRight />
					</div>
					<div className='rounded-full p-2.5'>
						<LogOut />
					</div>
				</div>
			</aside>
			{children}
		</div>
	);
};

export default layout;

// 	<div id='tooltip' className='relative cursor-pointer group'>
// saad
// 		<span
// 			className={
// 				"absolute hidden group-hover:inline-block bg-neutral-900 text-white text-xs p-2 whitespace-nowrap rounded right top-1/2 -translate-y-1/2 left-[calc(100%+5px)]"

// 			}
// 		>
// 			Hover
// 		</span>
// 		<span
// 			className={classNames(
// 				"absolute hidden group-hover:inline-block border-[6px]",
// 				position === "top"
// 					? "left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-neutral-900"
// 					: "",
// 				position === "bottom"
// 					? "left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-neutral-900"
// 					: "",
// 				position === "left"
// 					? "top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-neutral-900"
// 					: "",
// 				position === "right"
// 					? "top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-neutral-900"
// 					: ""
// 			)}
// 		></span>
// 	</div>
// );
