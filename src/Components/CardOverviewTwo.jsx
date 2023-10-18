import { Link } from "react-router-dom";

const CardOverviewTwo = ({ products }) => {
    const { name, brand, type, price, description, rating, photo, _id } = products;

    // const handleDelete = _Id => {
    //     console.log(_Id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {


    //             fetch(`http://localhost:5000/coffee/${_Id}`, {
    //                 method: "DELETE"
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your Coffee has been deleted.',
    //                             'success'
    //                         )
    //                         const remaining = coffees.filter(cof=> cof._id != _Id);
    //                         setCoffees(remaining);
    //                     }
    //                 })

    //             console.log("delete confirmed")
    //         }
    //     })

    // }
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
                        <Link to={`details/${_id}`}>
                            <button className="btn join-item">Details</button>
                        </Link>
                        <Link to={`updateProduct/${_id}`}>
                            <button className="btn join-item">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardOverviewTwo;