import React from 'react';
const CustomCard = (type) => ({ ...props }) => {
  return (
    <div className="card bg-primary text-primary-content w-96">
    <div className="card-body">
        {type === "users" ? (
            <>
                <h2 className="card-title">{props.user_id}</h2>
                <p>{props.user_name}</p>
                <p>{props.email}</p>
                <p>{props.created_at}</p>
            </>
         ) : (
            <> 
                <h2 className="card-title">{props.product_id}</h2>
                <p>{props.product_name}</p>
                <p>{props.product_description}</p>
                <p>{props.price}</p>
                <p>{props.created_at}</p>
            </>
        )}
    </div>
  </div>
  );
};

export default CustomCard;