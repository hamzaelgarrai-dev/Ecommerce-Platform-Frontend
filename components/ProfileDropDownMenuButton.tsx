import {
	ChevronDown,
	ClipboardList,
	Headset,
	Heart,
	LucideProps,
	MessageSquareText,
	User,
	UserCog,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const profileDrowDownList: {
	text: string;
	Icon: ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
	>;
}[] = [
	{ text: "Favorites & Historique", Icon: Heart },
	{ text: "My orders", Icon: ClipboardList },

	{ text: "Messages", Icon: MessageSquareText },

	{ text: "Help center", Icon: Headset },

	{ text: "Account Settings", Icon: UserCog },
];

const subMenuAnimate = {
	enter: {
		opacity: 1,
		// rotateX: 0,
		transition: { duration: 0.3 },
		display: "block",
	},
	exit: {
		opacity: 0,
		// rotateX: -15,
		transition: { duration: 0.2 },
		display: "none",
	},
};

const ProfileDropDownMenuButton = () => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const toggleHover = () => {
		setIsHover(!isHover);
	};
	return (
		<div>
			<motion.div
				onHoverStart={toggleHover}
				onHoverEnd={toggleHover}
				className='flex items-center gap-1 bg-[#dadada] p-1 rounded-xl text-black/90 cursor-pointer'
			>
				<div className='bg-white rounded-lg p-1.5 '>
					<User size={26} />
				</div>
				<span>Hamza</span>
				<ChevronDown size={22} />
				<motion.div
					initial='exit'
					animate={isHover ? "enter" : "exit"}
					variants={subMenuAnimate}
					className='absolute w-full top-full right-1/4  bg-white shadow-[0_1px_10px_rgba(0,0,0,0.25)] p-4 rounded-2xl'
				>
					<ul className='space-y-2'>
						{profileDrowDownList.map((item, index) => (
							<Link
								href='/buyer/dashboard/favorite'
								key={index}
								className='group flex items-center gap-2 text-foreground bg-white hover:bg-primary/10 rounded-full px-3 py-1.5 transform-content cursor-pointer'
							>
								<item.Icon
									size={22}
									className='group-hover:text-primary transition-colors'
								/>
								<span className='group-hover:text-black transition-colors'>
									{item.text}
								</span>
							</Link>
						))}
					</ul>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default ProfileDropDownMenuButton;
