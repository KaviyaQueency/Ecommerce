import ProductCard from './Card';
import React from 'react';

const Product5 = () => {
  return (
    <div style={{ padding: 10 }}>
      <ProductCard
        image="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4OUFsUUpuUVQ3cUdJUXc0NW5mTVpFdE9MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMzlKVGsyNDdnTWJxWHVYZ20wTDc3dFA&traceId=1"
        title="Cool Headphones"
        price="$59.99"
      />
    </div>
  );
};

export default Product5;