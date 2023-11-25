import { ProductCard } from "@/components/cards/ProductCard";

export default function Market() {
    return (
        <div className="bg-lime-200 flex flex-wrap max-w h-screen">
            <ProductCard img={'/images/tomatoes.png'} title={"Tomate"} price={"1.30"} />
            <ProductCard img={'/images/alface.jpeg'} title={"Alface"} price={"0.80"} />
            <ProductCard img={'/images/orange.png'} title={"Laranja"} price={"1.00"} />
            <ProductCard img={'/images/pepino.png'} title={"Pepino"} price={"1.00"} />
            <ProductCard img={'/images/cebola.jpeg'} title={"Cebola"} price={"1.00"} />
            <ProductCard img={'/images/potatoes.png'} title={"Batatas"} price={"1.00"} />
        </div>
    )
}