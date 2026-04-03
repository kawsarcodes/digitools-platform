import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import Banner from "./component/Banner";
import CallToAction from "./component/CallToAction";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Pricing from "./component/Pricing";
import Products from "./component/Products";
import Stats from "./component/Stats";
import Steps from "./component/Steps";

const getModels = async () => {
  const res = await fetch("/products.json");
  const data = await res.json();
  return data;
};

const modelPromise = getModels();

export default function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NavBar carts={carts} setActiveTab={setActiveTab} />
      <Banner />
      <Stats />

      <div className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Digital Tools</h2>
        <p className="text-gray-600 mb-10">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1 border border-gray-100 rounded-full bg-white">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded-full w-36 h-12 checked:!bg-gradient-to-r checked:!from-violet-600 checked:!to-purple-500 checked:!text-white transition-all duration-300"
              aria-label="Products"
              onChange={() => setActiveTab("model")}
              checked={activeTab === "model"}
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded-full w-36 h-12 checked:!bg-gradient-to-r checked:!from-violet-600 checked:!to-purple-500 checked:!text-white transition-all duration-300"
              aria-label={`Cart (${carts.length})`}
              onChange={() => setActiveTab("cart")}
              checked={activeTab === "cart"}
            />
          </div>
        </div>
      </div>

      {activeTab === "model" ? (
        <Products modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      ) : (
        <Cart carts={carts} setCarts={setCarts} />
      )}

      <Steps />
      <Pricing />
      <CallToAction />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}