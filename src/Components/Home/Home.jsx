import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./Home.css";
import { CartContext } from "../../Context/CartContext";
import { SearchContext } from "../../Context/SearchContext";

const Home = () => {
	const [products, setProducts] = useState([]);
	const { addToCart } = useContext(CartContext);
	const { searchTerm } = useContext(SearchContext);
	const { categoryName } = useParams();

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products || []);
			});
	}, []);

	let filteredProducts = products;

	// Filter by category
	if (categoryName) {
		filteredProducts = filteredProducts.filter(
			(product) => product.category.toLowerCase() === categoryName.toLowerCase()
		);
	}

	// Filter by search term
	if (searchTerm.trim()) {
		filteredProducts = filteredProducts.filter((product) =>
			product.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	if (products.length === 0) {
		return <p className="loading-message">Loading products...</p>;
	}

	return (
		<div className="home">
			<div className="product-list">
				{filteredProducts.length > 0 ? (
					filteredProducts.map((product) => (
						<Link
							to={`/product/${product.id}`}
							key={product.id}
							className="product-card-link"
						>
							<div className="product-card">
								<img src={product.thumbnail} alt={product.title} />
								<h3 style={{ color: "#333" }}>{product.title}</h3>
								<p style={{ color: "#222" }}>⭐ {product.rating}</p>
								<p style={{ display: "flex", gap: "1rem" }}>
									<span
										style={{ textDecoration: "line-through", color: "gray" }}
									>
										₹{(product.price * 82).toFixed(2)}
									</span>
									<span style={{ fontWeight: "bold", color: "green" }}>
										₹
										{(
											(product.price -
												(product.price * product.discountPercentage) / 100) *
											82
										).toFixed(2)}
									</span>
									<span style={{ color: "red", fontSize: "10px" }}>
										{product.discountPercentage}% OFF
									</span>
								</p>

								<button
									onClick={(e) => {
										e.preventDefault();
										addToCart(product);
									}}
								>
									Add to Cart
								</button>
							</div>
						</Link>
					))
				) : (
					<h3 style={{ textAlign: "center", width: "100%" }}>
						No matching products found.
					</h3>
				)}
			</div>
		</div>
	);
};

export default Home;
