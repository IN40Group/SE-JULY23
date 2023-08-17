// import React, { useState } from 'react'

// const Car = () => {
//     const [brand,setBrand]=useState("Ford")
//     const [model,setModel]=useState("Mustang")
//     const [color,setColor]=useState("Black")
//     const [year,setYear]=useState("1989")
//   return (
//     <div>
//       <h1>My {brand}</h1>
//       <p> It is a {color}  {model} from {year}</p>
//     </div>
//   )
// }

// export default Car;
import React, { useState } from "react";

const Car = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1960",
    color: "black",
  });
//   Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.

//   We then return an object, spreading the previousState and overwriting only the color.
  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };
  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        {" "}
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button
        type="button"
        onClick={updateColor}>
        Blue
      </button>
    </div>
  );
};

export default Car;
