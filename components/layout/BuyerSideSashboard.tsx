"use client";
import {
	ClipboardList,
	Headset,
	Heart,
	LayoutDashboard,
	LogOut,
	MessageSquareText,
	SendToBack,
	UserCog,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BuyerSideSashboard = () => {
	const pathname = usePathname();

	const path = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);
	return (
		<aside className='h-[calc(100vh-87px)] flex flex-col justify-between'>
			<div className='flex flex-col gap-4'>
				<div className='space-y-2 rounded-[50px] bg-muted-foreground border border-border p-1 text-black w-13.25 overflow-hidden hover:w-36 hover:rounded-3xl transition-all duration-300 ease-in-out'>
					<Link
						href='/buyer/dashboard'
						className={`flex items-center gap-1 rounded-full ${
							path === "dashboard" ? "bg-primary text-white" : ""
						} transition-colors cursor-pointer`}
					>
						<button
							className={`rounded-full p-2.5 ${
								path === "dashboard" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<LayoutDashboard />
						</button>
						<div>Dashboard</div>
					</Link>
					<Link
						href='/buyer/dashboard/support'
						className={`flex items-center gap-1 rounded-full ${
							path === "support" ? "bg-primary text-white" : ""
						} transition-colors cursor-pointer`}
					>
						<button
							className={`rounded-full p-2.5 ${
								path === "support" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<Headset />
						</button>
						<div>Support</div>
					</Link>
				</div>
				<div className='space-y-2 bg-muted-foreground border border-border text-black p-1 w-13.25 rounded-[50px] overflow-hidden hover:w-36 hover:rounded-3xl transition-all duration-300 ease-in-out'>
					<Link
						href='/buyer/dashboard/favorite'
						className={`flex items-center gap-1 rounded-full ${
							path === "favorite" ? "bg-primary text-white" : ""
						} transition-colors cursor-pointer`}
					>
						<button
							className={`rounded-full p-2.5 ${
								path === "favorite" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<Heart />
						</button>
						<div>Favorite</div>
					</Link>
					<Link
						href='/buyer/dashboard/my-orders'
						className={`flex items-center gap-1 rounded-full ${
							path === "my-orders" ? "bg-primary text-white" : ""
						} transition-colors cursor-pointer`}
					>
						<button
							className={`rounded-full p-2.5 ${
								path === "my-orders" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<ClipboardList />
						</button>
						<div>Orders</div>
					</Link>
					<Link
						href='/buyer/dashboard/messages'
						className={`flex items-center gap-1 rounded-full ${
							path === "messages" ? "bg-primary text-white" : ""
						} transition-colors cursor-pointer`}
					>
						<button
							className={`rounded-full p-2.5 ${
								path === "messages" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<MessageSquareText />
						</button>
						<div>Messages</div>
					</Link>
					<Link
						href='/buyer/dashboard/profile'
						className={`flex items-center gap-1 rounded-full ${
							path === "profile" ? "bg-primary text-white" : ""
						} transition-colors cursor-pointer`}
					>
						<button
							className={`rounded-full p-2.5 ${
								path === "profile" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<UserCog />
						</button>
						<div>Profile</div>
					</Link>
				</div>
			</div>
			<div className='space-y-2 bg-muted-foreground border border-border text-black p-1 w-13.25 rounded-[50px] overflow-hidden hover:w-36 hover:rounded-3xl transition-all duration-300 ease-in-out'>
				{/* <button className='rounded-full p-2.5'>
					<SendToBack />
				</button> */}
				<Link
					href='/buyer/dashboard/profile'
					className={`flex items-center gap-1 rounded-full ${
						path === "profile" ? "bg-primary text-white" : ""
					} transition-colors cursor-pointer`}
				>
					<button
						className={`rounded-full p-2.5 ${
							path === "profile" ? "bg-primary text-white" : ""
						} transition-colors cursor-pointer`}
					>
						<SendToBack />
					</button>
					<div>Switch</div>
				</Link>
				<button
					className={`flex items-center gap-1 rounded-full ${
						path === "profile" ? "bg-primary text-white" : ""
					} transition-colors cursor-pointer`}
				>
					<div
						className={`rounded-full p-2.5 ${
							path === "profile" ? "bg-primary text-white" : ""
						} transition-colors cursor-pointer`}
					>
						<LogOut />
					</div>
					<div>Logout</div>
				</button>
			</div>
		</aside>
	);
};

export default BuyerSideSashboard;

{
	/* <aside className='h-[calc(100vh-87px)] flex flex-col justify-between'>
	<div className='flex flex-col gap-4'>
		<div className='flex flex-col gap-2 rounded-[50px] bg-muted-foreground border border-border p-1 text-black w-13.25 overflow-hidden hover:w-[140px] hover:rounded-3xl transition-all duration-300 ease-in-out'>
			<Link
				href='/buyer/dashboard'
				className='relative group flex items-center gap-1'
			>
				<button
					className={`rounded-full p-2.5 ${
						path === "dashboard" ? "bg-primary text-white" : ""
					} transition-colors cursor-pointer`}
				>
					<LayoutDashboard />
				</button>
				<div className='hidden group-hover:block bg-black text-white rounded-lg px-3 py-2 text-sm absolute bottom-full left-[50%] -translate-x-[50%] z-10'>
							Dashboard
						</div> 
				<div className=''>Dashboard</div>
			</Link>
			<Link href='/buyer/dashboard/support' className='relative group'>
				<button
					className={`rounded-full p-2.5 ${
						path === "support" ? "bg-primary text-white" : ""
					} transition-colors cursor-pointer`}
				>
					<Headset />
				</button>
				<div className='hidden group-hover:block bg-black text-white rounded-lg px-3 py-2 text-sm absolute bottom-full left-[50%] -translate-x-[50%] z-10'>
							Support
						</div>
			</Link>
		</div>
		<div className='flex flex-col gap-2 w-fit bg-muted-foreground border border-border text-black p-1 rounded-full'>
			<Link href='/buyer/dashboard/favorite' className='relative group'>
				<button
					className={`rounded-full p-2.5 ${
						path === "favorite" ? "bg-primary text-white" : ""
					} transition-colors cursor-pointer`}
				>
					<Heart />
				</button>
				<div className='hidden group-hover:block bg-black text-white rounded-lg px-3 py-2 text-sm absolute bottom-full left-[50%] -translate-x-[50%] z-10'>
					Favorite
				</div>
			</Link>
			<Link href='/buyer/dashboard/my-orders' className='relative group'>
				<button
					className={`rounded-full p-2.5 ${
						path === "my-orders" ? "bg-primary text-white" : ""
					} transition-colors cursor-pointer`}
				>
					<ClipboardList />
				</button>
				<div className='hidden group-hover:block bg-black text-white rounded-lg px-3 py-2 text-sm absolute bottom-full left-[50%] -translate-x-[50%] z-10'>
					Orders
				</div>
			</Link>
			<Link href='/buyer/dashboard/messages' className='relative group'>
				<button
					className={`rounded-full p-2.5 ${
						path === "messages" ? "bg-primary text-white" : ""
					} transition-colors cursor-pointer`}
				>
					<MessageSquareText />
				</button>
				<div className='hidden group-hover:block bg-black text-white rounded-lg px-3 py-2 text-sm absolute bottom-full left-[50%] -translate-x-[50%] z-10'>
					Messages
				</div>
			</Link>
			<Link href='/buyer/dashboard/profile' className='relative group'>
				<button
					className={`rounded-full p-2.5 ${
						path === "profile" ? "bg-primary text-white" : ""
					} transition-colors cursor-pointer`}
				>
					<UserCog />
				</button>
				<div className='hidden group-hover:block bg-black text-white rounded-lg px-3 py-2 text-sm absolute bottom-full left-[50%] -translate-x-[50%] z-10'>
					Profile
				</div>
			</Link>
		</div>
	</div>
	<div className='space-1 w-fit p-1 bg-muted-foreground border border-border text-black  rounded-full '>
		<div className='rounded-full p-2.5'>
			<SendToBack />
		</div>
		<div className='rounded-full p-2.5'>
			<LogOut />
		</div>
	</div>
</aside>; */
}
