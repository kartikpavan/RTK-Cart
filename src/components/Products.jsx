import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch("https://fakestoreapi.com/products");
			const data = await response.json();
			setProducts(data);
			console.log(data);
		};
		fetchProducts();
	}, []);

	return (
		<div className="flex flex-wrap gap-6 justify-center ">
			{products.map((item) => {
				return <SingleProduct key={item.id} item={item} />;
			})}
		</div>
	);
};

export default Products;
