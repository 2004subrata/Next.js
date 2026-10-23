import React from "react";

const OptionalProductFilter = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  console.log(slug);

  return (
    <div>
      <h1>Optional Products Filter</h1>
    </div>
  );
};

export default OptionalProductFilter;
