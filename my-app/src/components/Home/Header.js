import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<div>
			<div id="header">
				<div className="header-top">
					<div className="container">
						<div className="pull-left auto-width-left">
							<ul className="top-menu menu-beta l-inline">
								<li><Link to="/Admin"><i className="fa fa-home"></i> 90-92 Lê Thị Riêng, Bến Thành, Quận 1</Link></li>
								<li><Link to="/Admin"><i className="fa fa-phone"></i> 0163 296 7751</Link></li>
							</ul>
						</div>
						<div className="pull-right auto-width-right">
							<ul className="top-details menu-beta l-inline">
								<li><Link to="/path"><i className="fa fa-user"></i>Tài khoản</Link></li>
								<li><Link to="/path">Regester</Link></li>
								<li><Link to="/path">Login</Link></li>
								<li><Link to="/Admin">Admin</Link></li>
								
							</ul>
						</div>
						<div className="clearfix"></div>
					</div> {/* .container */}
				</div> {/* .header-top */}

				<div className="header-bottom" style={{ backgroundColor: '#0277b8' }}>
					<div className="container">
						<Link className="visible-xs beta-menu-toggle pull-right" to=""><span className='beta-menu-toggle-text'>Menu</span> <i className="fa fa-bars"></i></Link>
						<div className="visible-xs clearfix"></div>
						<nav className="main-menu">
							<ul className="l-inline ov">
								<li><Link to="/path">Trang chủ</Link></li>
								<li><Link to="/path">Sản phẩm</Link>
									<ul className="sub-menu">
										<li><Link to="product_type.html">Sản phẩm 1</Link></li>
										<li><Link to="product_type.html">Sản phẩm 2</Link></li>
										<li><Link to="product_type.html">Sản phẩm 4</Link></li>
									</ul>
								</li>
								<li><Link to="about.html">Giới thiệu</Link></li>
								<li><Link to="contacts.html">Liên hệ</Link></li>
							</ul>
							<div className="clearfix"></div>
						</nav>
					</div> {/* .container */}
				</div> {/* .header-bottom */}
			</div>
			
		</div>
	);
};

export default Header;
