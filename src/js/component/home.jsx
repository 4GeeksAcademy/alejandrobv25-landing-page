import React from "react";
import { Cards } from "./cards";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";
import { Productos } from "./productos";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container-fluid d-lg-flex py-4" id="cardSection">
				{
					Productos.map((item, index) => (
						<Cards image={item.image} title={item.title} description={item.description} />
					))
				}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
