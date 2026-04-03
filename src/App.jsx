import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Products from "./component/Products";
import Stats from "./component/Stats";

const getModels = async () => {
  const res = await fetch("/products.json");
  const data = await res.json();
  return data;
};

const modelPromise = getModels();

export default function App() {
  const [carts, setCarts] = useState([]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NavBar carts={carts} />
      <Banner />
      <Stats />
      
      <div className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Digital Tools</h2>
        <p className="text-gray-600 mb-10">Choose from our curated collection of premium digital products.</p>
      </div>

      <Products modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}