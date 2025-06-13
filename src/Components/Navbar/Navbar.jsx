import { useContext, useState } from "react";
import {
	FaBars,
	FaUserAlt,
	FaShoppingCart,
	FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { SearchContext } from "../../Context/SearchContext";
import "./Navbar.css";

const Navbar = () => {
	const { cart } = useContext(CartContext);
	const { searchTerm, setSearchTerm } = useContext(SearchContext);
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className="navbar">
			<div className="nav-container">
				{/* Hamburger Menu */}
				<button className="menu-toggle" onClick={toggleMenu}>
					<FaBars />
				</button>

				{/* Logo */}
				<h1 className="nav-title">My Shop</h1>
				<div className="desktop-links">
					<Link to="/">All Categories</Link>
					<Link to="/category/fragrances">Fragrances</Link>
					<Link to="/category/groceries">Groceries</Link>
				</div>

				{/* Search Bar */}
				<div className="search-box">
					<input
						type="text"
						placeholder="Search for Products"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

				{/* Nav Icons */}
				<div className="nav-icons">
					<Link to="/" className="home-link">Home</Link>
					<Link to="/cart">
						<FaShoppingCart />
						{cart.length > 0 && <span className="cart-count">{cart.length}</span>}
					</Link>
					<Link to="/login">
						<FaUserAlt />
					</Link>
				</div>

				{/* Overlay for mobile menu */}
				<div className={`overlay-menu ${menuOpen ? "open" : ""}`}>
					<button className="close-btn" onClick={toggleMenu}>
						<FaTimes />
					</button>
					<div className="overlay-links">
						<Link to="/" onClick={toggleMenu}>All Categories</Link>
						<Link to="/category/fragrances" onClick={toggleMenu}>Fragrances</Link>
						<Link to="/category/groceries" onClick={toggleMenu}>Groceries</Link>
					</div>
				</div>

				{/* Desktop links (hidden in responsive view) */}
				
			</div>
		</nav>
	);
};

export default Navbar;
