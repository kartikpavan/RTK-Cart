import { useSelector, useDispatch } from "react-redux/es/exports";
import { remove } from "../store/cartSlice";
const Cart = () => {
	const products = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const removeCartItemHandeler = (productId) => {
		dispatch(remove(productId));
	};

	return (
		<>
			{products.length === 0 ? (
				<h1 className="text-3xl"> NO ITEMS in CART</h1>
			) : (
				<div className="overflow-x-auto">
					<table className="table w-full">
						{/* <!-- head --> */}
						<thead>
							<tr>
								<th>Product</th>
								<th>Title</th>
								<th>Price</th>
								<th>Remove</th>
							</tr>
						</thead>
						<tbody>
							{/* <!-- row 1 --> */}
							{products.map((product) => {
								return (
									<tr key={product.id}>
										<td>
											<img src={product.image} alt="/" className="w-32" />
										</td>
										<td className="text-xl font-bold">{product.title}</td>
										<td className="text-xl font-bold">{product.price}</td>
										<td>
											<button
												className="btn btn-sm btn-outline btn-error"
												onClick={() => removeCartItemHandeler(product.id)}
											>
												Remove
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
};

export default Cart;
