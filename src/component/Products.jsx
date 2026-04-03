import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products({ modelPromise, carts, setCarts }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    modelPromise.then((data) => {
      setProducts(data);
    });
  }, [modelPromise]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => {
          return (
            <ProductCard 
              key={product.id} 
              product={product} 
              carts={carts} 
              setCarts={setCarts} 
            />
          );
        })}
      </div>
    </div>
  );
}