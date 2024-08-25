import { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { DataPost } from "../../Services/Actions/AdminActions";
import { storage } from "../../firebaseConfig";
import starbucks from './Images/logo.png';
import './AddData.css';

const AddData = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [loading, setLoading] = useState(false);
    const imageListRef = ref(storage, "images/");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setImageUpload(file);
        } else {
            alert('Please select a valid image file');
        }
    };

    const [data, setData] = useState({
        id: '',
        image: '',
        name: '',
        description: '',
        size: '',
        price: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (imageUpload) {
            const imageRef = ref(storage, `images/${imageUpload.name}`);
            await uploadBytes(imageRef, imageUpload);
            const url = await getDownloadURL(imageRef);
            data.image = url;
        }

        dispatch(DataPost(data));
        navigate('/ViewData');
        setLoading(false);

        setData({
            id: '',
            image: '',
            name: '',
            description: '',
            size: '',
            price: ''
        });
    };

    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    return (
        <div className="background-AddData mb-5 pb-5">
            <div className="logo-container">
                <img src={starbucks} className="img-width-logo" alt="starbucks" />
            </div>
            <div className="container add-data-container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="form-title">Add New Coffee</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formImage">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={handleFileChange} className="form-input" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Coffee Name</Form.Label>
                                <Form.Control type="text" name="name" value={data.name} placeholder="Enter Coffee Name" onChange={handleChange} className="form-input" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" value={data.description} placeholder="Enter Description" onChange={handleChange} className="form-input" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formSize">
                                <Form.Label>Coffee Size</Form.Label>
                                <Form.Control type="text" name="size" value={data.size} placeholder="Enter Coffee Size" onChange={handleChange} className="form-input" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPrice">
                                <Form.Label>Coffee Price</Form.Label>
                                <Form.Control type="number" name="price" value={data.price} placeholder="Enter Coffee Price" onChange={handleChange} className="form-input" />
                            </Form.Group>

                            <Button type="submit" className="submit-btn">
                                {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddData;
