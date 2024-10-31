import React from 'react';
import CustomCard from './CustomCard';
const CustomList = ({ contents }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {contents.map(content => (
        <CustomCard key={content.product_id ? content.product_id : content.user_id} content={content} />
      ))}
    </div>
  );
};

export default CustomList;