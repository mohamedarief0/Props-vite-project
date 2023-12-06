import { useState } from "react";
import Card from "./Component/Card";
import "./App.css";

function App() {
  let foodItesms = [
    {
      name: "burger",
    },
    {
      name: "pizza",
    },
  ];
  const country = "India";
  return (
    <div className="flex">
      {foodItesms.map(function (item) {
        return (
          <div >
            <Card name={item.name} country={country} />
            {/* <Card name={item.name} country={country} /> */}
          </div>
        );
      })}
    </div>
  );
}
export default App;
