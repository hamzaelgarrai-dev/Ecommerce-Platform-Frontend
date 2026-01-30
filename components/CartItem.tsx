import { Minus, Plus } from "lucide-react";
import { CartItemType } from "./Cart";
import { useState } from "react";

const CartItem = ({ item }: { item: CartItemType }) => {
	const [count, setCount] = useState(0);
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
					<div className='border border-foreground p-0.5 rounded-full flex items-center gap-2'>
						<button
							className='p-1 rounded-full bg-muted-foreground cursor-pointer'
							disabled={!count}
							onClick={() => setCount((prev) => prev - 1)}
						>
							<Minus size={18} />
						</button>
						<p className='text-lg'>{count}</p>
						<button
							className='p-1 rounded-full bg-primary text-white cursor-pointer'
							onClick={() => setCount((prev) => prev + 1)}
						>
							<Plus size={18} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
