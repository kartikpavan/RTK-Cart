import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const SingleProduct = ({ item }) => {
	const dispatch = useDispatch();

	const handleAddToCart = (product) => {
		dispatch(add(product));
	};

	const { id, title, price, image } = item;
	return (
		<div className="card w-96 bg-base-100 shadow-xl py-4">
			<figure>
				<img src={image} alt={title} className="w-[100px] h-[200px] object-contain" />
			</figure>
			<div className="flex flex-col items-center gap-2">
				<h2 className="card-title">{title.slice(0, 30)}</h2>
				<p className="font-bold">$ {price}</p>
				<button className="btn btn-primary w-[50%]" onClick={() => handleAddToCart(item)}>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default SingleProduct;
