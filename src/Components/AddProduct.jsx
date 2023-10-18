import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const newProduct = { name, brand, type, price, description, rating, photo };
        console.log(newProduct);

        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
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
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add Products</h2>
            <form onSubmit={handleAddProduct}>
                <div className="">
                    <div className="md:w-full">
                        <p className="text-2xl">Image</p>
                        <input className="input input-bordered w-full" name="photo" placeholder="Photo URL" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Name</p>
                        <input className="input input-bordered w-full" name="name" placeholder="Name" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Brand Name</p>
                        <input className="input input-bordered w-full" name="brand" placeholder="Brand Name" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Type</p>
                        <input className="input input-bordered w-full" name="type" placeholder="Type Name" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Price</p>
                        <input className="input input-bordered w-full" name="price" placeholder="price" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Short Description</p>
                        <input className="input input-bordered w-full" name="description" placeholder="Short Description" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Rating</p>
                        <input className="input input-bordered w-full" name="rating" placeholder="Rating" />
                    </div>
                </div>

                <input type="submit" value="Add Product" className="btn btn-block text-white bg-slate-500" />
            </form>
        </div>
    );
};

export default AddProduct;