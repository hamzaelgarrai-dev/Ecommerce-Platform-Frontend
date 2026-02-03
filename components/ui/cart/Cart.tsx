"use client";
import { Handbag, LucideProps, X } from "lucide-react";
import {
	Dispatch,
	ForwardRefExoticComponent,
	RefAttributes,
	SetStateAction,
} from "react";
import CartItem from "./CartItem";
import Link from "next/link";

type CartProps = {
	hideCart: boolean;
	setHideCart: Dispatch<SetStateAction<boolean>>;
};

export type CartItemType = {
	title: string;
	category: string;
	price: number;
	Icon: ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
	>;
};
const CartItems: CartItemType[] = [
	{
		title: "backbag",
		category: "Bag",
		price: 150,
		Icon: Handbag,
	},
	{
		title: "backbag",
		category: "Bag",
		price: 150,
		Icon: Handbag,
	},
	{
		title: "backbag",
		category: "Bag",
		price: 150,
		Icon: Handbag,
	},
];
const Cart = ({ hideCart, setHideCart }: CartProps) => {
	return (
		<>
			<div
				className={`${
					hideCart ? "" : "hidden"
				} absolute top-0 bg-black/25 w-full h-screen z-10`}
				onClick={() => setHideCart(false)}
			></div>

			<div
				className={`${
					hideCart ? "translate-x-0" : "translate-x-full"
				} absolute top-0 right-0 w-[80%] sm:w-[65%] md:w-[55%] lg:w-[50%] xl:w-[35%] h-screen bg-white p-4 flex flex-col border-l-2 border-muted-foreground transition-transform duration-300 ease-in-out z-20`}
			>
				<div className='w-full flex items-center justify-between'>
					<h3 className='font-semibold text-2xl'>Shopping Cart</h3>
					<div
						className='p-1 rounded-full bg-muted-foreground cursor-pointer'
						onClick={() => setHideCart(false)}
					>
						<X size={28} />
					</div>
				</div>
				<div className='flex-1 py-4'>
					{CartItems.map((item, index) => (
						<CartItem key={index} item={item} />
					))}
				</div>
				<Link
					href='/shoppingcart'
					className='w-full rounded-full text-center uppercase bg-primary text-white py-3 font-semibold'
					onClick={() => setHideCart(false)}
				>
					Complete order
				</Link>
			</div>
		</>
	);
};

export default Cart;
