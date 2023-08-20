import React from "react";
import "./Fruit.css";
import { useSelector } from "react-redux";
export default function FruityCart() {
  const fruityCart = useSelector((state) => state.fruitsCart);
  console.log("fruitsCart", fruityCart);
  return (
    // <div className="bg-slate-100 rounded">
    //   <p className="text-2xl p-5 border-b border-slate-400"> your FruityCart</p>
    //   <ul></ul>
    //   <p className="text-xl p-5 border-t border-slate-400">Total price :</p>
    // </div>
    <div className="cartdown">
      <p className="fruitp"> your FruityCart</p>
      <ul>
        {fruityCart.card.length > 0 &&
          fruityCart.card.map((fruit) => (
            <li className="px-5 py-2 text-xl" key={fruit.id}>
              <span className="font-semibold mr-2">{fruit.quantity}</span>
              <span>{fruit.name}</span>
            </li>
          ))}
        {fruityCart.card.length === 0 && (
          <li className="font-semibold ml-2 p-1">...Grab your fruits !</li>
        )}
      </ul>
      <p className="fruitprice">
        Total price :
        {fruityCart.card.length > 0 && (
          <span>
            {" "}
            {fruityCart.card.reduce(
              (acc, item) => item.price * item.quantity + acc,
              0
            )}
            $
          </span>
        )}
      </p>
    </div>
  );
}
