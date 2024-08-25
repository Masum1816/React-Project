import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import logo from './Images/logo.png';
import coffee from './Images/Coffee.jpg';
import reviews1 from './Images/Reviews-1.jpg';
import reviews2 from './Images/Reviews-2.jpg';
import reviews3 from './Images/Reviews-3.jpg';
import instagram from './Images/instagram.svg';
import facebook from './Images/facebook.svg';
import twitter from './Images/twitter.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';

const Home = () => {

    const navigate = useNavigate();

    const handleAddData = () => {

        navigate('./AddData');

    }

    const handleViewData = () => {

        navigate('./ViewData');

    }

    return(
        <>
            <header>
                <div className="container p-3">
                    <div className="d-flex justify-content-between">
                        <div className='image'>
                            <div className="d-flex">
                                <div>
                                    <img src={logo} alt='logo' />
                                </div>
                                <div className='starbucks-text pt-3 ps-4'>
                                    <h1 className='pt-1'>Starbucks</h1>
                                </div>
                            </div>
                        </div>
                        <div className="data-search">
                            <div className='d-flex'>
                                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                                <input type='text' placeholder='Looking for something specific?' />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>

                <section>
                    <div className="background-page p-4">
                        <div className="container">
                            <div className="row">
                                <div className="d-flex justify-content-evenly flex-wrap">
                                    <div className="col-4">
                                        <div className="card-items-page" onClick={handleAddData}>
                                            <div className="card-title">
                                                <h1 className='text-center pt-3'>ADD NEW COFFEE</h1>                                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="card-items-page" onClick={handleViewData}>
                                            <div className="card-title">
                                                <h1 className='text-center pt-3'>VIEW COFFEE</h1>                                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="learning">
                        <div className="container">
                            <h2 className='handcrafted-text'>Learn more about the world of coffee!</h2>
                            <img src={coffee} alt='learning' className='learning-image mt-4' />
                        </div>
                    </div>
                </section>

                <section className='learning'>
                    <div className="container">
                        <img src={reviews1} className='reviews-image' alt='reviews1' />
                    </div>
                </section>

                <section className='learning'>
                    <div className="container">
                        <img src={reviews2} className='reviews-image' alt='reviews2' />
                    </div>
                </section>

                <section className='learning'>
                    <div className="container">
                        <img src={reviews3} className='reviews-image' alt='reviews3' />
                    </div>
                </section>

            </main>

            <footer>
                <div className="footer-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-2 pt-5 image-footer">
                                <img src={logo} alt='logo' />
                            </div>
                            <div className="col-2 pt-5">
                                <h3 className='footer-header text-white pt-1'>Discover Opportunities</h3>
                                <p className='footer-main text-white'>Retail</p>
                                <p className='footer-main text-white'>Retail Leadership</p>
                                <p className='footer-main text-white'>Corporate</p>
                                <p className='footer-main text-white'>Technology</p>
                                <p className='footer-main text-white'>Manufacturing & Distribution</p>
                                <p className='footer-main text-white'>Reserve & Roastery</p>
                                <p className='footer-main text-white'>Internships</p>
                                <p className='footer-main text-white'>International Careers</p>
                                <p className='footer-main text-white'>FAQs & Tips</p>
                            </div>
                            <div className="col-2 pt-5">
                                <h3 className='footer-header text-white pt-1'>Benefits</h3>
                                <p className='footer-main text-white'>Perks</p>
                                <p className='footer-main text-white'>Health & Well-being</p>
                                <p className='footer-main text-white'>Financial Support</p>
                                <p className='footer-main text-white'>Education</p>
                            </div>
                            <div className="col-2 pt-5">
                                <h3 className='footer-header text-white pt-1'>Culture</h3>
                                <p className='footer-main text-white'>Mission & Values</p>
                                <p className='footer-main text-white'>Social Impact</p>
                                <p className='footer-main text-white'>Belonging</p>
                                <p className='footer-main text-white'>Grow</p>
                            </div>
                            <div className="col-2 pt-5">
                                <h3 className='footer-header text-white pt-1'>Existing Partners</h3>
                                <p className='footer-main text-white'>Login to Partner Portal</p>
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








