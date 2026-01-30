"use client";
import { Handbag, LucideProps, X } from "lucide-react";
import {
	Dispatch,
	ForwardRefExoticComponent,
	RefAttributes,
	SetStateAction,
} from "react";
import CartItem from "../CartItem";

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
		<div
			className={`${
				hideCart ? "translate-x-0" : "translate-x-full"
			} absolute top-0 right-0 w-[30%] h-screen bg-white p-4 flex flex-col border-l-2 border-muted-foreground  transition-transform duration-300 ease-in-out`}
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
			<button className='w-full rounded-full uppercase bg-primary text-white py-3 font-semibold cursor-pointer'>
				Complete order
			</button>
		</div>
	);
};

export default Cart;
