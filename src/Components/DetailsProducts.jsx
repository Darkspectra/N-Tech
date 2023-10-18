import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsProducts = () => {
    const items = useLoaderData();
    const { id } = useParams();
    const card = items.find(card => card._id == id)

    const handleAddCart = () => {
        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(card)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    console.log(card);

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <p className="text-3xl font-semibold my-7">{card.description}</p>
            <figure><img src={card.photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <div className="text-3xl font-semibold">
                            <h2>{card.name}</h2>
                            <h2>{card.brand}</h2>
                            <h2>{card.type}</h2>
                            <h2>{card.price}</h2>
                            <h2>{card.rating}</h2>
                        </div>
                        <button onClick={handleAddCart} className="btn  font-bold bg-green-300">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProducts;