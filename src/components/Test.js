import React from "react";

const Test = () => {
    const foodname = { name: 'item1', rate: 25, hotelId: 'f3175b85-4a41-4ba7-98c8-7cc4f203fc25' };
    const cart = [['item1', 'item1', 'item1']];

    console.log(foodname.name)
    console.log(cart)
    const count = cart.flat().reduce((acc,item)=> item === foodname.name ?acc+1:acc,0);
    console.log(count);
    console.log(Array.isArray(cart))

    return (<div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>Page Not Found</p>

    </div>);
};

export default Test;
