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
				<div className='flex flex-col gap-2 rounded-4xl bg-muted-foreground border border-border p-1 text-black'>
					<Link href='/buyer/dashboard'>
						<button
							className={`rounded-full p-2.5 ${
								path === "dashboard" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<LayoutDashboard />
						</button>
					</Link>
					<Link href='/buyer/dashboard/support'>
						<button
							className={`rounded-full p-2.5 ${
								path === "support" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<Headset />
						</button>
					</Link>
				</div>
				<div className='flex flex-col gap-2 w-fit bg-muted-foreground border border-border text-black p-1 rounded-full'>
					<Link href='/buyer/dashboard/favorite'>
						<button
							className={`rounded-full p-2.5 ${
								path === "favorite" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<Heart />
						</button>
					</Link>
					<Link href='/buyer/dashboard/my-orders'>
						<button
							className={`rounded-full p-2.5 ${
								path === "my-orders" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<ClipboardList />
						</button>
					</Link>
					<Link href='/buyer/dashboard/messages'>
						<button
							className={`rounded-full p-2.5 ${
								path === "messages" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<MessageSquareText />
						</button>
					</Link>
					<Link href='/buyer/dashboard/profile'>
						<button
							className={`rounded-full p-2.5 ${
								path === "profile" ? "bg-primary text-white" : ""
							} transition-colors cursor-pointer`}
						>
							<UserCog />
						</button>
					</Link>
				</div>
			</div>
			<div className='space-1 p-1 bg-muted-foreground border border-border text-black  rounded-full '>
				<div className='rounded-full p-2.5'>
					<SendToBack />
				</div>
				<div className='rounded-full p-2.5'>
					<LogOut />
				</div>
			</div>
		</aside>
	);
};

export default BuyerSideSashboard;
