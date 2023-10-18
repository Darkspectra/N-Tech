import { Link } from "react-router-dom";

const CardOverviewTwo = ({ products }) => {
    const { name, brand, type, price, description, rating, photo, _id } = products;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <div className="text-3xl font-semibold">
                            <h2 className="bg-yellow-300 font-bold">{name}</h2>
                            <h2> Brand: {brand}</h2>
                            <h2 > Type: {type}</h2>
                            <h2> Price: {price}</h2>
                            <h2 >{rating}</h2>
                        </div>
                        <Link to={`details/${_id}`}>
                            <button className="btn bg-blue-400 text-white font-semibold">Details</button>
                        </Link>
                        <Link to={`updateProduct/${_id}`}>
                            <button className="btn bg-blue-400 text-white font-semibold">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardOverviewTwo;