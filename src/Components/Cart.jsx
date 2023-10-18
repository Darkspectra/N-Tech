import { useLoaderData } from "react-router-dom";
import ShowCart from "./ShowCart";
import { useState } from "react";


const Cart = () => {
    const carts = useLoaderData();

    const [items, setItems] = useState(carts);
    return (
        <div>
            <h2 className="text-3xl font-bold m-7">Total Items: {carts.length}</h2>
            <div className="grid grid-cols-2 gap-10">
                {
                    carts.map(cart=> <ShowCart key={cart._id} cart={cart} items={items} setItems={setItems}></ShowCart>)
                }
            </div>
        </div>
    );
};

export default Cart;