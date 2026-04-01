import { ShoppingCart } from "lucide-react";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto px-4 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
          </ul>
        </div>
        <a className="text-2xl font-bold text-violet-600 cursor-pointer">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="indicator cursor-pointer">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
        </div>
        <a className="font-medium text-gray-700 cursor-pointer hidden sm:block">Login</a>
        <a className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full px-6">Get Started</a>
      </div>
    </div>
  );
}