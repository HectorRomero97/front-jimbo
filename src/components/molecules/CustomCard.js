import React from 'react';
const CustomCard = (type) => ({ ...props }) => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow">
     {type === "users" ? (
            <>
                 <div className="stat">
                    <div className="stat-title">Id</div>
                    <div className="stat-desc text-white">{props.user_id}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Usuario</div>
                    <div className="stat-desc text-white">{props.user_name}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">email</div>
                    <div className="stat-desc text-white">{props.email}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">fecha de creacion</div>
                    <div className="stat-desc text-white">{props.created_at}</div>
                </div>
            </>
         ) : (
            <>
                 <div className="stat">
                    <div className="stat-title">Id</div>
                    <div className="stat-desc text-white">{props.product_id}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Producto</div>
                    <div className="stat-desc text-white">{props.product_name}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Descripcion</div>
                    <div className="stat-desc text-white">{props.product_description}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Precio</div>
                    <div className="stat-desc text-white">{props.price}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Fecha de creacion</div>
                    <div className="stat-desc text-white">{props.created_at}</div>
                </div>
            </>
        )}
   

    </div>
  );
};

export default CustomCard;