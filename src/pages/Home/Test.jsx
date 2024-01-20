import React from "react";
import Academic from "../../components/Menu/Academic";

const Test = () => {
const handleClick = (restaurant) => {
    console.log(restaurant)
}
    
    return(
        <>
            testing
            {
                              Academic.map((restaurant, index)=>(
                                 <div className="item" key={index} onClick={() => handleClick(restaurant)} id={restaurant.location}>
                                     {restaurant.name}
                                 </div>
                                )
                              )
                            }
        </>
    )
}

export default Test