import bg1 from "../assets/banner.jpg"

const Banner = () => {
    return (
        <div>
            <div className="display:relative">
                <h2 className="font-bold text-white text-6xl display: absolute left-[30%] top-[38%]"><span className="text-yellow-200">~Tech Shop~</span> <br /><span className="text-2xl">-Fast Online Delivery-<br />-Authentic Products- <br />-Exchange Offer-</span></h2>
            </div>
            <img className="rounded-2xl" src={bg1} alt="" />
            <p className="text-6xl font-bold my-7">Available Brands</p>
        </div>
    );
};

export default Banner;