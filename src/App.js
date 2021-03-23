import React, { useEffect, useState, createContext } from "react";

import "./App.scss";

import ProductCard from "./components/ProductCard";

// Render the products dinamically with a loop
import products from "./products";
import Cart from "./components/Cart";

function loadItems() {
	const items = localStorage.getItem("products");

	if (items) {
		try {
			return JSON.parse(items);
		} catch (error) {
			return [];
		}
	} else {
		return [];
	}
}

export const SalesContext = createContext("sfdghdfgxjnsdfgjn");

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [mode, setMode] = useState({
		rebajas: "rebajas",
		navidad: "navidad",
	});
	useEffect(() => {
		console.log("solo 1");
		setCartItems(loadItems());
	}, []);
	console.log("me renderizo");
	useEffect(() => {
		localStorage.setItem("products", JSON.stringify(cartItems));
	}, [cartItems]);

useEffect(() => {
	console.log('cambiando mode');
}, [mode])


	function handleAddToCart(id) {
		let index = cartItems.findIndex((item) => item.id === id);
		if (index !== -1) {
			//if el elemenmto clickado ya esta en el carrito
			const items = cartItems.map((item) => {
				if (item.id === id && item.quantity < 10) {
					item.quantity = Number(item.quantity) + 1;
				}
				return item;
			});
			setCartItems(items);
		} else {
			//if el elemenmto clickado NO esta en el carrito
			let newItem = {
				...products.find((prod) => prod.id === id),
				quantity: 1,
			};
			setCartItems([...cartItems, newItem]);
		}
	}

	function handleRemove(id) {
		const items = cartItems.filter((item) => item.id !== id);

		setCartItems(items);
	}

	function handleChange(event, id) {
		const items = cartItems.map((item) => {
			if (item.id === id) {
				item.quantity = Number(event.target.value);
			}

			return item;
		});

		setCartItems(items);
	}

	return (
		<SalesContext.Provider value={mode}>
			<main className="container-fluid">
				<div className="row">
					<div className="col col-6 col-lg-8 p-4">
						<section className="row row-cols-1">
							<div className="col">
								<h1 className="mb-4">Shop</h1>
							</div>
							<div className="col">
								<div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
									{products.map((product) => (
										<ProductCard
											key={product.id}
											img={product.img}
											title={product.title}
											price={product.price}
											handleAddToCart={() =>
												handleAddToCart(product.id)
											}
										/>
									))}
								</div>
							</div>
						</section>
					</div>
					<Cart
						cartItems={cartItems}
						handleRemove={handleRemove}
						handleChange={handleChange}
					/>
				</div>
			</main>
		</SalesContext.Provider>
	);
}

export default App;
