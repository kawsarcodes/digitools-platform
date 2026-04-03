import { toast } from "react-toastify";

export default function Cart({ carts, setCarts }) {
  let totalPrice = 0;
  for (let i = 0; i < carts.length; i++) {
    totalPrice = totalPrice + carts[i].price;
  }

  const handleRemove = (id, name) => {
    const remaining = [];
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].id !== id) {
        remaining.push(carts[i]);
      }
    }
    setCarts(remaining);
    toast.error(`${name} removed from cart!`);
  };

  const handleCheckout = () => {
    if (carts.length === 0) {
      toast.info("Your cart is empty!");
    } else {
      setCarts([]);
      toast.success("Successfully proceeded to checkout!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Cart</h2>
        
        {carts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is currently empty.</p>
          </div>
        ) : (
          <div className="space-y-4 mb-8">
            {carts.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 rounded-2xl gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-sm flex-shrink-0">
                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemove(item.id, item.name)}
                  className="text-red-500 hover:text-red-700 font-medium text-sm px-4 py-2 w-full sm:w-auto text-right sm:text-left"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          <span className="text-gray-500 font-medium text-lg">Total:</span>
          <span className="text-3xl font-bold text-gray-900">${totalPrice}</span>
        </div>

        <button 
          onClick={handleCheckout}
          className="btn w-full bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full h-14 text-lg"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}