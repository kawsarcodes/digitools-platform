import { ShoppingCart } from "lucide-react";

export default function NavBar({ carts }) {
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto px-4 py-4">
      <div className="navbar-start">
        <a className="text-2xl font-bold text-violet-600 cursor-pointer">DigiTools</a>
      </div>
      <div className="navbar-end gap-4">
        <div className="indicator cursor-pointer">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          {carts.length > 0 ? (
            <span className="badge badge-sm badge-primary bg-violet-600 border-none indicator-item">{carts.length}</span>
          ) : null}
        </div>
        <a className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full px-6">Get Started</a>
      </div>
    </div>
  );
}