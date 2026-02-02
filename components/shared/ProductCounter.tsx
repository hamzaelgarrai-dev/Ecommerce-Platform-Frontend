import { Minus, Plus } from 'lucide-react';
import { useState } from 'react'

const ProductCounter = () => {
    const [count, setCount] = useState(0);
  return (
		<div className='border border-foreground p-0.75 rounded-full flex items-center gap-2'>
			<button
				className='p-1.5 rounded-full bg-muted-foreground cursor-pointer'
				disabled={!count}
				onClick={() => setCount((prev) => prev - 1)}
			>
				<Minus size={22} />
			</button>
			<p className='text-xl'>{count}</p>
			<button
				className='p-1.5 rounded-full bg-primary text-white cursor-pointer'
				onClick={() => setCount((prev) => prev + 1)}
			>
				<Plus size={22} />
			</button>
		</div>
	);
}

export default ProductCounter