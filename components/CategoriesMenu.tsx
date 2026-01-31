import { categories } from "@/utils/categories";
import { useState } from "react";

const CategoriesMenu = () => {
	const [selectedCategory, setSelectedCategory] = useState(categories[0].title);
	return (
		<div className='flex max-h-[60vh]'>
			<div className='categories w-fit flex flex-col gap-2 border-r-2 border-muted-foreground overflow-scroll py-4'>
				{categories.map((category, index) => (
					<div
						key={index}
						className={`flex items-center gap-2 ${
							selectedCategory === category.title ? "bg-[#FDEEEC]" : ""
						} hover:bg-[#FDEEEC] transition-colors duration-200 rounded-lg`}
						onClick={() => setSelectedCategory(category.title)}
					>
						<div className='bg-[#FDEEEC] rounded-lg p-1.5 text-primary'>
							<category.Icon />
						</div>
						{category.title}
					</div>
				))}
			</div>
			<div className='hidden sm:block flex-1 p-6 categories overflow-scroll'>
				<div className='font-semibold text-xl mb-6'>{selectedCategory}</div>
				<div className='flex flex-wrap p-4 gap-8'>
					{[...Array(10)].map((item, index) => (
						<div
							key={index}
							className='w-[25%] lg:w-[15%] flex flex-col items-center gap-2'
						>
							<div className='rounded-full bg-muted-foreground w-22 h-22'></div>
							<p>Category name</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CategoriesMenu;
