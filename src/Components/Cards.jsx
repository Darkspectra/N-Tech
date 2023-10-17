import { Link } from "react-router-dom";



const Cards = ({ brand }) => {
    const { id, image, name } = brand;
    return (
        <div>
            <Link className="ml-32" to={`/products/${id}`}>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className=" rounded text-4xl text-center">{name}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cards;