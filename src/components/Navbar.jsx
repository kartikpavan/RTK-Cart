import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
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
						<div className="indicator cursor-pointer">
							<BsCart size={24} />
							<span className="indicator-item badge badge-accent">2</span>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
