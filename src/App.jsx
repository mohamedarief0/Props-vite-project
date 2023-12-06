import { useState } from "react";
import Card from "./Component/Card";
import "./App.css";

function App() {
  let foodItesms = [{
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta with rich meat sauce",
    price:  12.99,
  },
  {
    name: "Chicken Caesar Salad",
    description: "Fresh romaine lettuce, grilled chicken, and Caesar dressing",
    price: 9.99,
  },
  {
    name: "Margherita Pizza",
    description: "Traditional pizza with tomato, mozzarella, and basil",
    price: 14.99,
  },
  {
    name: "Sushi Platter",
    description: "Assorted sushi rolls with soy sauce and wasabi",
    price: 18.99,
  },
  {
    name: "Chocolate Fondue",
    description: "Melted chocolate served with fruits and marshmallows",
    price: 8.99,
  },
];
  const country = "India";
  return (
    <div className="flex">
      {foodItesms.map(function (item) {
        return (
          <div >
            <Card name={item.name} desc={item.description} price={item.price} country={country} />
            {/* <Card name={item.name} country={country} /> */}
          </div>
        );
      })}
    </div>
  );
}
export default App;
