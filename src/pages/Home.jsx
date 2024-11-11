import React from "react";
import Slider from "react-slick";
import ProductList from "../ProductPage/ProductList"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

/**
 * Home component renders the homepage of the application.
 * It includes a Slider component displaying a list of products
 * and a ProductList component.
 *
 * The Slider uses predefined settings for displaying the products
 * with autoplay and navigation dots. Each product is displayed with
 * its image and name.
 */
function Home() {
  const products = [
    { id: 1, name: "Product 1", imageUrl: "/images/product1.jpg" },
    { id: 2, name: "Product 2", imageUrl: "/images/product2.jpg" },
    { id: 3, name: "Product 3", imageUrl: "/images/product3.jpg" },
    { id: 4, name: "Product 4", imageUrl: "/images/product4.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    pauseOnHover: true,
  };

  return (
    <div className="homepage">
      <section className="relative h-[60vh] max-w-7xl mx-auto my-10 rounded-lg shadow-lg overflow-hidden">
        <Slider {...settings} className="w-full h-full">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-center h-full bg-gray-200">
              <img src={product.imageUrl} alt={product.name} className="object-contain h-full max-h-[50vh] rounded-lg" />
              <h3 className="text-center text-xl font-bold text-primary mt-4">{product.name}</h3>
            </div>
          ))}
        </Slider>
      </section>
      <ProductList />
    </div>
  );
}

export default Home;
