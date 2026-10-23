import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log(slug, "slug");

  return (
    <div>
      <h1>Product Details Page {slug}</h1>
    </div>
  );
};

export default ProductDetails;
