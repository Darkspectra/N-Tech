
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TechFooter from "./TechFooter";
import Cards from "./Cards";

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
            <TechFooter></TechFooter>
        </div>
    );
};

export default Home;