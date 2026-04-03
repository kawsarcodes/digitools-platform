import { ShoppingCart } from "lucide-react";

export default function NavBar({ carts, setActiveTab }) {
  const handleCartClick = () => {
    setActiveTab("cart");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductsClick = () => {
    setActiveTab("model");
  };

  return (
    <nav className="w-full bg-base-100 sticky top-0 z-50 border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4 py-4">
                
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#products" onClick={handleProductsClick}>Products</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <a href="#" className="text-2xl font-bold text-violet-600 cursor-pointer">DigiTools</a>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
            <li><a href="#products" onClick={handleProductsClick}>Products</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <div className="indicator cursor-pointer" onClick={handleCartClick}>
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {carts.length > 0 && (
              <span className="badge badge-sm badge-primary bg-violet-600 border-none indicator-item">{carts.length}</span>
            )}
          </div>
          <a className="font-medium text-gray-700 cursor-pointer hidden sm:block">Login</a>
          <a className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full px-6">Get Started</a>
        </div>
        
      </div>
    </nav>
  );
}