import { useDispatch, useSelector } from "react-redux";
import './Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import ViewOrder from "../ViewOrder/ViewOrder";

const Cart = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cartData);
    console.log("Cart items:", cart);

    const handleOrder = (data) => {

        navigate('/Order');
        dispatch(ViewOrder(data));

    }

    return (
        <>

            <div className="background">
                <h1 className="text-center viewCoffeeData">Add to Cart</h1>
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-between flex-wrap">

                            {
                                cart && cart.length > 0 ? (
                                    cart.map((data) => (

                                        <div className="col-4" key={data.id}>
                                            <div className="card-items mt-4">
                                                <div className="card-title">
                                                    <div className="d-flex">
                                                        <div className="img-card">
                                                            <img src={data.avatar} alt={data.avatar}/>
                                                        </div>
                                                        <div className="card-body-data">
                                                            <h3>{data.name}</h3>
                                                            <p>{data.description}</p>
                                                            <p>SIZE : {data.size}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className='price-text pt-4'>
                                                            <p className='price-text'><FontAwesomeIcon className='rup-icon' icon={faIndianRupeeSign} />{data.price}</p>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="add-item pt-1 me-2">
                                                                <p className="text-white">Remove</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="text-center viewCoffeeData mt-5" onClick={() => handleOrder(data)}>Place Order</h1>
                                        </div>
                                    ))
                                    
                                    ):(
                                        <tr>
                                            <td className="text-white">No Data Available</td>
                                        </tr>
                                    )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
