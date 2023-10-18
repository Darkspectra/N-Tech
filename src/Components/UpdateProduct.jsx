import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const products = useLoaderData()
    const { name, brand, type, price, description, rating, photo, _id } = products;


    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, brand, type, price, description, rating, photo };
        console.log(updatedCoffee);

        fetch(`https://tech-store-server-42x7j8qao-farhan-novos-projects.vercel.app/product/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update Products</h2>
            <form onSubmit={handleUpdateProduct}>
                <div className="">
                    <div className="md:w-full">
                        <p className="text-2xl">Image</p>
                        <input className="input input-bordered w-full" defaultValue={photo} name="photo" placeholder="Photo URL" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Name</p>
                        <input className="input input-bordered w-full" defaultValue={name} name="name" placeholder="Name" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Brand Name</p>
                        <input className="input input-bordered w-full" defaultValue={brand} name="brand" placeholder="Brand Name" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Type</p>
                        <input className="input input-bordered w-full" defaultValue={type} name="type" placeholder="Type Name" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Price</p>
                        <input className="input input-bordered w-full" defaultValue={price} name="price" placeholder="price" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Short Description</p>
                        <input className="input input-bordered w-full" defaultValue={description} name="description" placeholder="Short Description" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Rating</p>
                        <input className="input input-bordered w-full" defaultValue={rating} name="rating" placeholder="Rating" />
                    </div>
                </div>

                <input type="submit" value="Update" className="btn btn-block text-white bg-slate-500" />
            </form>
        </div>
    );
};

export default UpdateProduct;