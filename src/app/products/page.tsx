import Link from "next/link";
import React from "react";

const Products = () => {
  const products = [
    {
      id: "1",
      name: "mobile",
      price: 50,
    },
    {
      id: "2",
      name: "laptop",
      price: 2500,
    },
    {
      id: "3",
      name: "watch",
      price: 4999,
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link href={`/products/${product.id}`}> View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
