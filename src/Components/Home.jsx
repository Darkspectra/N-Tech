
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TechFooter from "./TechFooter";
import Cards from "./Cards";
import extra from "../assets/extra.png";

const Home = () => {
    const brands = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 gap-20 my-14 ">
                {
                    brands.map(brand => <Cards key={brand.id} brand={brand}></Cards>)
                }
            </div>
            <div className="flex items-center mx-auto">
                <div>
                    <p className="text-4xl font-bold">Do not Miss you chance! <br />Grab Discount now using <br/> <span className="text-lime-500">NSINS</span> promo code!</p>
                </div>
                <div>
                    <img src={extra} alt="" />
                </div>
            </div>
            <TechFooter></TechFooter>
        </div>
    );
};

export default Home;