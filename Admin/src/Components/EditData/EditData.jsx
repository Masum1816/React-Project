import { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { DataUpdate, SingleRecordData } from "../../Services/Actions/AdminActions";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import starbucks from './Images/logo.png'
import './EditData.css';

const EditData = () => {
    const Data = useSelector(state => state.Data);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [loading, setLoading] = useState(false);
    const imageListRef = ref(storage, "images/");

    const [data, setData] = useState({
        id: '',
        image: '',
        name: '',
        description: '',
        size: '',
        price: ''
    });

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        if (type === "file") {
            setImageUpload(files[0]);
        } else {
            setData({ ...data, [name]: value });
        }
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

        dispatch(DataUpdate(data));
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

    useEffect(() => {
        if (id) {
            dispatch(SingleRecordData(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (Data) {
            setData(Data);
        }
    }, [Data]);

    return (
        <div className="background-EditData mb-5 pb-5">
            <div className="logo-container">
                <img src={starbucks} className="img-width-logo" alt="starbucks" />
            </div>
            <div className="container edit-data-container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="form-title">Edit Coffee Data</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formImage">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={handleChange} className="form-input" />
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

export default EditData;
