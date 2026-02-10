import BuyerSideSashboard from "@/components/layout/BuyerSideSashboard";


const layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='w-full flex py-4 '>
			<BuyerSideSashboard/>
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
