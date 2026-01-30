"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import CategoriesMenu from "./CategoriesMenu";

const UnderNavBar = () => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const toggleHover = () => {
		setIsHover(!isHover);
	};

	const subMenuAnimate = {
		enter: {
			opacity: 1,
			rotateX: 0,
			transition: { duration: 0.5 },
			display: "block",
		},
		exit: {
			opacity: 0,
			rotateX: -15,
			transition: { duration: 0.3 },
			display: "none",
		},
	};
	return (
		<div className='bg-[#FDEEEC]'>
			<div className='container mx-auto flex items-center gap-5 py-2 font-semibold text-[16px] text-black'>
				<motion.div
					onHoverStart={toggleHover}
					onHoverEnd={toggleHover}
					className='bg-white rounded-full p-1 pr-3 flex items-center gap-2 cursor-pointer'
				>
					<div className='bg-primary flex flex-col gap-1 justify-center items-center w-9 h-9 text-black rounded-full'>
						<div
							className={`w-6 h-0.75 rounded-full bg-white ${
								isHover ? "rotate-44 translate-y-1.75" : "rotate-0"
							} transition-all duration-500`}
						></div>
						<div
							className={`w-6 h-0.75 rounded-full bg-white ${
								isHover ? "opacity-0" : "opacity-100"
							} transition-all duration-300`}
						></div>
						<div
							className={`w-6 h-0.75 rounded-full bg-white ${
								isHover ? "-rotate-44 -translate-y-1.75" : "rotate-0"
							} transition-all duration-500`}
						></div>
					</div>
					<span>All Categories</span>
					<motion.div
						initial='exit'
						animate={isHover ? "enter" : "exit"}
						variants={subMenuAnimate}
						className='absolute w-screen top-[8.2rem] origin-[50%_-170px] p-4'
					>
						<CategoriesMenu />
					</motion.div>
				</motion.div>
				<ul className='flex items-center gap-5 '>
					<li>Home</li>
					<li>Stores</li>
					<li>Promotions</li>
					<li>Promotions</li>
				</ul>
			</div>
		</div>
	);
};

export default UnderNavBar;
