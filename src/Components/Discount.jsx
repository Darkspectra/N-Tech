import Marquee from "react-fast-marquee";


const Discount = () => {
    return (
        <div>
            <Marquee pauseOnHover={true} speed={100}>
                <p className="mr-12 text-4xl font-bold">Get ready for some fantastic news for all Apple enthusiasts! Starting today, Apple has announced a limited-time discount on a range of iPhones with discount <span className="text-4xl font-bold text-green-600">30%</span> </p>
            </Marquee>
        </div>
    );
};

export default Discount;