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