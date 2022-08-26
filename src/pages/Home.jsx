import React from "react";
import Products from "../components/Products";

const Home = () => {
	return (
		<div>
			<h1 className="text-2xl text-center font-semibold">Welcome to redux toolkit Store</h1>
			<section>
				<Products />
			</section>
		</div>
	);
};

export default Home;
