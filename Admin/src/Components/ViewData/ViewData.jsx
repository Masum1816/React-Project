import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DataDelete, DataGet, GetData, UpdateData } from "../../Services/Actions/AdminActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faIndianRupeeSign, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import './ViewData.css';

const ViewData = () => {

    const datas = useSelector(state => state.Datas);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (id) => {

        dispatch(UpdateData(id));
        navigate(`/EditData/${id}`);

    }

    const handleDelete = (id) => {

        dispatch(DataDelete(id));

    }

    useEffect(() => {
        dispatch(DataGet());
    }, [dispatch]);

    return(
        <>

            <div className="background">
                <h1 className="text-center viewCoffeeData">View Coffee</h1>
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-between flex-wrap">

                            {
                                datas && datas.length > 0 ? (
                                    datas.map((data) => (

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
                                                                <p className="text-white" onClick={() => handleUpdate(data.id)}>Edit</p>
                                                            </div>
                                                            <div className="add-item pt-1">
                                                                <p className="text-white" onClick={() => handleDelete(data.id)}>Delete</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
    )

}

export default ViewData;
















