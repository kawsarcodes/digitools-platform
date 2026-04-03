import { Check } from "lucide-react";
import { toast } from "react-toastify";

export default function ProductCard({ product, carts, setCarts }) {
  const { id, name, description, price, period, tag, tagType, features, icon } = product;

  let isAdded = false;
  for (let i = 0; i < carts.length; i++) {
    if (carts[i].id === id) {
      isAdded = true;
    }
  }

  const handleAddToCart = () => {
    if (isAdded) {
      toast.warning(`${name} is already in the cart!`);
    } else {
      setCarts([...carts, product]);
      toast.success(`${name} added to cart!`);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-100">
      <div className="card-body">
        <div className="flex justify-between items-start mb-2">
          <div className="w-12 h-12 bg-gray-50 rounded-lg p-2">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          {tag && (
            <div className={`badge ${tagType === 'warning' ? 'badge-warning' : tagType === 'success' ? 'badge-success' : 'badge-secondary'}`}>
              {tag}
            </div>
          )}
        </div>
        
        <h2 className="card-title text-xl font-bold">{name}</h2>
        <p className="text-gray-500 text-sm h-12">{description}</p>
        
        <div className="my-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-500 text-sm">{period}</span>
        </div>
        
        <ul className="space-y-2 mb-4">
          {features.map((feature, idx) => {
            return (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                {feature}
              </li>
            );
          })}
        </ul>
        
        <div className="card-actions justify-end mt-auto">
          <button 
            onClick={handleAddToCart}
            className={`btn w-full rounded-full ${isAdded ? 'btn-disabled' : 'bg-violet-600 hover:bg-violet-700 text-white border-none'}`}
          >
            {isAdded ? 'Added to Cart' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
}