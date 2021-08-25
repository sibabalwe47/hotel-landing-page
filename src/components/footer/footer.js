import react from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                    logo    
                </div>
                <div className="col-md-6">
                    <div className="row">
                    <div className="col-md-4">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>More Information</h4>
                        <ul>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Customers</h4>
                        <ul>
                            <li><a href="">Rooms</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Newsletters</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="social-links">
                        <h4>Follow Us</h4>
                        <ul>
                            <li>
                                <a href="#" className="instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter">
                                <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="linkedin">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;