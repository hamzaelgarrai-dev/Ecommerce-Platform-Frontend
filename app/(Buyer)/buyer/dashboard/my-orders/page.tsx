"use client";
import ArrivalOrders from "@/components/orders/ArrivalOrders";
import CancledOrders from "@/components/orders/CancledOrders";
import OnShippingOrders from "@/components/orders/OnShippingOrders";
import { Activity, useState } from "react";

const Page = () => {
	const [selectedOrders, setSelectedOrders] = useState("shipping");
	return (
		<div className='px-4 w-full'>
			<div className='mb-6 w-fit p-1 bg-muted-foreground rounded-full flex items-center gap-3 border border-border'>
				<button
					onClick={() => setSelectedOrders("shipping")}
					className={`${
						selectedOrders === "shipping"
							? "bg-primary text-white border-primary"
							: "bg-white text-black border-border"
					}   p-1 pl-3 rounded-full flex items-center gap-2 border  cursor-pointer transition-colors`}
				>
					<span>On Shipping</span>
					<div
						className={`${
							selectedOrders === "shipping"
								? "bg-white text-black"
								: "bg-black text-white"
						} text-center rounded-full w-8 h-8 p-1 transition-colors`}
					>
						2
					</div>
				</button>
				<button
					onClick={() => setSelectedOrders("arrived")}
					className={`${
						selectedOrders === "arrived"
							? "bg-primary text-white border-primary"
							: "bg-white text-black border-border"
					}   p-1 pl-3 rounded-full flex items-center gap-2 border  cursor-pointer transition-colors`}
				>
					<span>Arrived</span>
					<div
						className={`${
							selectedOrders === "arrived"
								? "bg-white text-black"
								: "bg-black text-white"
						} text-center rounded-full w-8 h-8 p-1 transition-colors`}
					>
						2
					</div>
				</button>
				<button
					onClick={() => setSelectedOrders("canceled")}
					className={`${
						selectedOrders === "canceled"
							? "bg-primary text-white border-primary"
							: "bg-white text-black border-border"
					}   p-1 pl-3 rounded-full flex items-center gap-2 border  cursor-pointer transition-colors`}
				>
					<span>Canceled</span>
					<div
						className={`${
							selectedOrders === "canceled"
								? "bg-white text-black"
								: "bg-black text-white"
						} text-center rounded-full w-8 h-8 p-1 transition-colors`}
					>
						2
					</div>
				</button>
			</div>
			<Activity mode={selectedOrders === "shipping" ? "visible" : "hidden"}>
				<OnShippingOrders />
			</Activity>
			<Activity mode={selectedOrders === "arrived" ? "visible" : "hidden"}>
				<ArrivalOrders />
			</Activity>
			<Activity mode={selectedOrders === "canceled" ? "visible" : "hidden"}>
				<CancledOrders />
			</Activity>
		</div>
	);
};

export default Page;
