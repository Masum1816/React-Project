import { useState } from "react";
import { useNavigate } from "react-router";
import { Form, Button } from "react-bootstrap";
import './Order.css';

const Order = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        fname: '',
        lname: '',
        mail: '',
        number: '',
        address: ''
    });

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/ViewOrder');
        console.log("DATA : ", data);
    };

    return (
        <div className="background-Order mb-5 pb-5">
            <div className="container order-container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="form-title">User Details</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="fname" 
                                    value={data.fname} 
                                    placeholder="Enter First Name" 
                                    onChange={handleChange} 
                                    className="form-input"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="lname" 
                                    value={data.lname} 
                                    placeholder="Enter Last Name" 
                                    onChange={handleChange} 
                                    className="form-input"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="mail" 
                                    value={data.mail} 
                                    placeholder="Enter Email Address" 
                                    onChange={handleChange} 
                                    className="form-input"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control 
                                    type="tel" 
                                    name="number" 
                                    value={data.number} 
                                    placeholder="Enter Contact Number" 
                                    onChange={handleChange} 
                                    className="form-input"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="address" 
                                    value={data.address} 
                                    placeholder="Enter Address" 
                                    onChange={handleChange} 
                                    className="form-input"
                                />
                            </Form.Group>

                            <Button type="submit" className="submit-btn">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
