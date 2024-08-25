import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { AddToCart, fetchFirebaseData } from "../../Services/Actions/AuthAction";
import { useEffect } from "react";
import { faCircleUser, faIndianRupeeSign, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import logo from './Images/logo.png';
import starbucks1 from './Images/banner-1.jpg';
import starbucks2 from './Images/banner-2.jpg';
import starbucks3 from './Images/banner-3.jpg';
import handecrafted1 from './Images/Handcrafted-1.jpg';
import handecrafted2 from './Images/Handcrafted-2.jpg';
import handecrafted3 from './Images/Handcrafted-3.jpg';
import handecrafted4 from './Images/Handcrafted-4.jpg';
import handecrafted5 from './Images/Handcrafted-5.jpg';
import handecrafted6 from './Images/Handcrafted-6.jpg';
import learning from './Images/Learning.jpg'
import instagram from './Images/instagram.svg'
import twitter from './Images/twitter.svg'
import facebook from './Images/facebook.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-bootstrap';

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector(state => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/LogIN" />;
    }

    const firebaseData = useSelector(state => state.firebaseData);
    const cartData = useSelector(state => state.cartData);

    const handleAddToCart = (event, item) => {
        event.preventDefault();
        if (!cartData.find(cartData => cartData.id === item.id)) {
            console.log("Adding item to cart:", item);
            dispatch(AddToCart(item));
        } else {
            console.log("Item already in cart");
        }
    };

    const handleCart = () => {

        navigate('./cart');

    }
    

    useEffect(() => {
        dispatch(fetchFirebaseData());
    }, [dispatch]);


    return(

        <>
            <header>
                <div className="container padding-container">
                    <div className="row">
                        <div className="col-1 image">
                            <img src={logo} alt='logo' />
                        </div>
                        <div className="col-6 ul-link">
                            <div className="d-flex">
                                <div className="nav-data">
                                    <div className="nav-data-menu">
                                        <h6>Home</h6>
                                    </div>
                                </div>
                                <div className="nav-data">
                                    <div className="nav-data-menu">
                                        <h6>Gift</h6>
                                    </div>
                                </div>
                                <div className="nav-data">
                                    <div className="nav-data-menu">
                                        <h6>Order</h6>
                                    </div>
                                </div>
                                <div className="nav-data">
                                    <div className="nav-data-menu">
                                        <h6>Pay</h6>
                                    </div>
                                </div>
                                <div className="nav-data">
                                    <div className="nav-data-menu">
                                        <h6>Store</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="data-search">
                                <div className='d-flex'>
                                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                                    <input type='text' placeholder='Looking for something specific?' />
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="d-flex">
                                <div>
                                    <button className="button-icon" onClick={handleCart}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                        </svg>
                                    </button>   
                                </div>
                            <div className="user-icon">
                                <FontAwesomeIcon className='user-icon-task' icon={faCircleUser} />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>

                <section className='background-container'>
                    <div className="container">
                        <div className="starbucks-class">
                            <div className="row alogn-items-center">
                                <div className="d-flex justify-content-between">
                                    <div className='starbucks-text pt-1'>
                                        <h5 className='text-white pt-2'>Welcome to Starbucks...</h5>
                                    </div>
                                    <div className="know-more mt-2 p-1 ps-3 align-items-center">
                                        <p className='text-white'>Know More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='mt-5'>
                    <div className="container">
                        <Carousel data-bs-theme="dark" className='carousel'>
                            <Carousel.Item className='carousel'>
                                <img
                                className="d-block w-100"
                                src={starbucks1}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className='carousel'>
                                <img
                                className="d-block w-100"
                                src={starbucks2}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className='carousel'>
                                <img
                                className="d-block w-100"
                                src={starbucks3}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>

                <section>
                    <div className="handecrafted">
                        <div className="container p-5">
                            <div className='pt-5 pb-3'>
                                <h2 className='handcrafted-text'>Handcrafted Curations</h2>
                            </div>
                            <div className='all-includes'>
                                <div className="d-flex justify-content-between">
                                    <div className="bestseller">
                                        <img src={handecrafted1} alt='handecrafted1' />
                                        <p className='text-center'>Bestseller</p>
                                    </div>
                                    <div className="bestseller">
                                        <img src={handecrafted2} alt='handecrafted1' />
                                        <p className='text-center'>Drinks</p>
                                    </div>
                                    <div className="bestseller">
                                        <img src={handecrafted3} alt='handecrafted1' />
                                        <p className='text-center'>Food</p>
                                    </div>
                                    <div className="bestseller">
                                        <img src={handecrafted4} alt='handecrafted1' />
                                        <p className='text-center'>Merchandise</p>
                                    </div>
                                    <div className="bestseller">
                                        <img src={handecrafted5} alt='handecrafted1' />
                                        <p className='text-center'>Coffee At Home</p>
                                    </div>
                                    <div className="bestseller">
                                        <img src={handecrafted6} alt='handecrafted1' />
                                        <p className='text-center'>Ready to Eat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="berista">
                        <div className="container">
                            <h2 className='handcrafted-text'>Barista Recommends</h2>
                            <div className="d-flex justify-content-between flex-wrap">
                                {
                                    firebaseData.map((item) => (

                                        <div className="col-4" key={item.id}>
                                            <div className="card-items mt-4">
                                                <div className="card-title">
                                                    <div className="d-flex">
                                                        <div className="img-card">
                                                            <img src={item.avatar} alt={item.name} />
                                                        </div>
                                                        <div className="card-body-data">
                                                            <h3>{item.name}</h3>
                                                            <p>{item.description}</p>
                                                            <p>SIZE : {item.size}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className='price-text pt-4'>
                                                            <p className='price-text'><FontAwesomeIcon className='rup-icon' icon={faIndianRupeeSign} />{item.price}</p>
                                                        </div>
                                                        <div className="add-item pt-1 mt-3">
                                                            <p className='text-white' onClick={(event) => handleAddToCart(event, item)}>Add Item</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="learning">
                        <div className="container">
                            <h2 className='handcrafted-text'>Learn more about the world of coffee!</h2>
                            <img src={learning} alt='learning' className='learning-image mt-4' />
                        </div>
                    </div>
                </section>

            </main>

            <footer>
                <div className="footer-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-2 pt-5 image-footer">
                                <img src={logo} alt='logo' />
                            </div>
                            <div className="col-2 pt-5">
                                <h3 className='footer-header text-white pt-1'>About Us</h3>
                                <p className='footer-main text-white'>Our Heritage</p>
                                <p className='footer-main text-white'>Coffeehouse</p>
                                <p className='footer-main text-white'>Our Company</p>
                            </div>
                            <div className="col-2 pt-5">
                                <h3 className='footer-header text-white pt-1'>Responsibility</h3>
                                <p className='footer-main text-white'>Diversity</p>
                                <p className='footer-main text-white'>Community</p>
                                <p className='footer-main text-white'>Ethical Sourcing</p>
                                <p className='footer-main text-white'>Environmental Stewardship</p>
                                <p className='footer-main text-white'>Learn More</p>
                            </div>
                            <div className="col-2 pt-5">
                                <h3 className='footer-header text-white pt-1'>Quick Links</h3>
                                <p className='footer-main text-white'>Privacy Policy</p>
                                <p className='footer-main text-white'>FAQs</p>
                                <p className='footer-main text-white'>Starbucks India Mobile App Terms of Use</p>
                                <p className='footer-main text-white'>Customer Service</p>
                                <p className='footer-main text-white'>Starbucks Rewards Day Offer</p>
                                <p className='footer-main text-white'>Delivery</p>
                                <p className='footer-main text-white'>Season's Gifting</p>
                                <p className='footer-main text-white'>Offer for Beverage Subscription at Starbucks.</p>
                                <p className='footer-main text-white'>Loyalty Program Terms and Conditions</p>
                                <p className='footer-main text-white'>Beverage Subscription</p>
                            </div>
                            <div className="col-2 pt-5">
                                <h3 className='footer-header text-white pt-1'>SOCIAL MEDIA</h3>
                                <div class="d-flex">
                                    <a class="instagram2">
                                        <img src={instagram} alt="instagram" />
                                    </a>
                                    <a class="linkdin2">
                                        <img src={facebook} alt="linkdin" />
                                    </a>
                                    <a class="twitter2">
                                        <img src={twitter} alt="twitter" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom"></div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <p className='text-white footer-main'>Web Accessbility</p>
                                <p className='text-white footer-main ps-3'>Privacy Statement</p>
                                <p className='text-white footer-main ps-3'>Terms of use</p>
                                <p className='text-white footer-main ps-3'>Contact Us</p>
                            </div>
                            <div>
                                <p className='footer-main text-white'>© 2024 Starbucks Coffee Company. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>

    )

}

export default Home;








