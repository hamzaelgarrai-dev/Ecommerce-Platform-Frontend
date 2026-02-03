import ProductCard from "@/components/shared/ProductCard";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className='font-sans min-w-screen  min-h-[calc(100vh-130px)] p-2 flex gap-4'>
			<ProductCard />
			
		</div>
	);
}
