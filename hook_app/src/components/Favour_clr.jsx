
// There are 3 rules for hooks:

import React,{ useState } from "react";

// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional
function FavouriteColor(){
    const [color, setColor] = useState("red");

    return(<>

    <h1>My Favourite Color is {color}</h1>
    <button type="button" onClick={()=>setColor("blue")}>Blue</button>
    <button type="button" onClick={()=>setColor("Green")}>Green</button>
    <button type="button" onClick={()=>setColor("Red")}>Red</button>
    <button type="button" onClick={()=>setColor("Maroon")}>Maroon</button>
    </>);
    
}
export default FavouriteColor;