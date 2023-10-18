import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsProducts = () => {
    const items = useLoaderData();
    const { id } = useParams();
    const card = items.find(card => card._id == id)

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
                        <Link to={`cart/${card._id}`}>
                            <button className="btn join-item">Add to Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProducts;