import React from "react";
import "./product.css";

export const Products = () => {
  return (
    <div className="prodChild">
      <img
        className="prodImage"
        src="https://miro.medium.com/max/2584/1*LohbhVyO75jzNDaAXdJeng.png"
        alt=""/>
      <div className='prodNamePrice'>
        <div>
          <h2 className="prodName">Red Sneaker</h2>
        </div>
        <div>
          <h2 className="prodPrice">$20</h2>
        </div>
      </div>
      <button className="prodButton">Buy Now</button>
      <button className="prodButton">Add to Cart</button>
    </div>
  );
};
