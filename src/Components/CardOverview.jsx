import { useLoaderData, useParams } from "react-router-dom";
import CardOverviewTwo from "./CardOverviewTwo";
import Photo from "./Photo";


const CardOverview = () => {
    const products = useLoaderData();
    const { name } = useParams();
    const sortedProducts = products.filter(product => product.brand == name)
    return (
        <div>
            <Photo></Photo>
            <div className="grid grid-cols-2 gap-10">
                {
                    sortedProducts.map(product => <CardOverviewTwo key={products._id} products={product}></CardOverviewTwo>)
                }
            </div>
        </div>
    );
};

export default CardOverview;