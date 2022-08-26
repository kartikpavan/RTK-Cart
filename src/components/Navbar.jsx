import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux/es/exports"; // to get data from the store to a component we use useSelector

const Navbar = () => {
	const items = useSelector((state) => state.cart); // always get latest value b'coz the component is re-rendered everytime item changes
	return (
		<nav className="w-full h-20 bg-primary">
			<div className="w-[70%] h-full mx-auto">
				<div className="flex items-center justify-between h-full">
					<Link to="/" className="text-3xl font-semibold">
						REDUX STORE
					</Link>
					<ul className="flex items-center gap-4 text-lg ">
						<Link to="/">HOME</Link>
						<Link to="/cart">CART</Link>
						<Link to="/cart" className="indicator cursor-pointer">
							<BsCart size={24} />
							<span className="indicator-item badge badge-accent">
								{items.length}
							</span>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
