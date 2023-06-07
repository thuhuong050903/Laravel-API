import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <div id="footer" className="color-div">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="widget">
                                <h4 className="widget-title">Instagram Feed</h4>
                                <div id="beta-instagram-feed"><div></div></div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="widget">
                                <h4 className="widget-title">Information</h4>
                                <div>
                                    <ul>
                                        <li><Link to="blog_fullwidth_2col.html"><i className="fa fa-chevron-right"></i> Web Design</Link></li>
                                        <li><Link to="blog_fullwidth_2col.html"><i className="fa fa-chevron-right"></i> Web development</Link></li>
                                        <li><Link to="blog_fullwidth_2col.html"><i className="fa fa-chevron-right"></i> Marketing</Link></li>
                                        <li><Link to="blog_fullwidth_2col.html"><i className="fa fa-chevron-right"></i> Tips</Link></li>
                                        <li><Link to="blog_fullwidth_2col.html"><i className="fa fa-chevron-right"></i> Resources</Link></li>
                                        <li><Link to="blog_fullwidth_2col.html"><i className="fa fa-chevron-right"></i> Illustrations</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="col-sm-10">
                            <div className="widget">
                                <h4 className="widget-title">Contact Us</h4>
                                <div>
                                    <div className="contact-info">
                                        <i className="fa fa-map-marker"></i>
                                        <p>30 South Park Avenue San Francisco, CA 94108 Phone: +78 123 456 78</p>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit asnatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="widget">
                                <h4 className="widget-title">Newsletter Subscribe</h4>
                                <form action="#" method="post">
                                    <input type="email" name="your_email"/>
                                    <button className="pull-right" type="submit">Subscribe <i className="fa fa-chevron-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
            <div className="copyright">
                <div className="container">
                    <p className="pull-left">Privacy policy. (&copy;) 2014</p>
                    <p className="pull-right pay-options">
                        <Link to="/path"><img src="source/assets/dest/images/pay/master.jpg" alt="" /></Link>
                        <Link to="/path"><img src="source/assets/dest/images/pay/pay.jpg" alt="" /></Link>
                        <Link to="/path"><img src="source/assets/dest/images/pay/visa.jpg" alt="" /></Link>
                        <Link to="/path"><img src="source/assets/dest/images/pay/paypal.jpg" alt="" /></Link>
                    </p>
                    <div className="clearfix"></div>
                </div> 
            </div> 
        </div>
    );
}
export default Footer;