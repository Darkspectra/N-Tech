import Swal from "sweetalert2";

const ShowCart = ({ cart, items, setItems }) => {
    const { name, brand, type, price, description, rating, photo, _id } = cart;


    const handleDelete = _Id => {
        console.log(_Id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/cart/${_Id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = items.filter(item => item._id != _Id);
                            setItems(remaining);
                        }
                    })

                console.log("delete confirmed")
            }
        })

    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <div className="text-3xl font-semibold">
                            <h2>{name}</h2>
                            <h2>{brand}</h2>
                            <h2>{type}</h2>
                            <h2>{price}</h2>
                            <h2>{rating}</h2>
                        </div>
                        <button onClick={()=> handleDelete(_id)} className="btn bg-red-500 text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCart;