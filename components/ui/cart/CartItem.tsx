import { CartItemType } from "./Cart";
import ProductCounter from "@/components/shared/ProductCounter";

const CartItem = ({ item }: { item: CartItemType }) => {
	return (
		<div className='flex gap-2 mb-3'>
			<div className='w-[30%] text-black p-6 bg-muted-foreground rounded-2xl flex items-center justify-center'>
				<item.Icon size={40} />
			</div>
			<div className='flex-1'>
				<h2 className='capitalize text-lg'>{item.title}</h2>
				<p className='text-foreground'>{item.category}</p>
				<div className='flex items-center justify-between'>
					<p>${item.price}</p>
					<ProductCounter />
				</div>
			</div>
		</div>
	);
};

export default CartItem;
