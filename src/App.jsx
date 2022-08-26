import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="w-[90%] h-full mx-auto pt-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
