import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
	const [products, setProducts] = useState([]);
	const [currentPageNew, setCurrentPageNew] = useState(1);
	const [currentPageTop, setCurrentPageTop] = useState(1);
	const productsPerPage = 8;

	useEffect(() => {
		// Gọi API để lấy dữ liệu sản phẩm
		fetch('http://127.0.0.1:8000/api/get-product/')
			.then(response => response.json())
			.then(data => setProducts(data))
			.catch(error => console.error(error));
	}, []);

	const handlePageChangeNew = (pageNumber) => {
		setCurrentPageNew(pageNumber);
	};

	const handlePageChangeTop = (pageNumber) => {
		setCurrentPageTop(pageNumber);
	};

	// Lọc sản phẩm mới
	const newProducts = products.filter(product => product.new === 1);

	// Lọc top sản phẩm
	const topProducts = products.filter(product => product.promotion_price !== 0);

	// Tính toán số trang cho New Products và Top Products
	const totalNewPages = Math.ceil(newProducts.length / productsPerPage);
	const totalTopPages = Math.ceil(topProducts.length / productsPerPage);

	// Tạo danh sách sản phẩm hiển thị trên trang hiện tại cho New Products
	const indexOfLastProductNew = currentPageNew * productsPerPage;
	const indexOfFirstProductNew = indexOfLastProductNew - productsPerPage;
	const currentProductsNew = newProducts.slice(indexOfFirstProductNew, indexOfLastProductNew);

	// Tạo danh sách sản phẩm hiển thị trên trang hiện tại cho Top Products
	const indexOfLastProductTop = currentPageTop * productsPerPage;
	const indexOfFirstProductTop = indexOfLastProductTop - productsPerPage;
	const currentProductsTop = topProducts.slice(indexOfFirstProductTop, indexOfLastProductTop);

	return (
		<div className="container">
			<div id="content" className="space-top-none">
				<div className="main-content">
					<div className="space60">&nbsp;</div>
					<div className="row">
						<div className="col-sm-12">
							{newProducts.length > 0 && (
								<div className="beta-products-list">
									<h4>New Products</h4>
									<div className="beta-products-details">
										<p className="pull-left">{newProducts.length} styles found</p>
										<div className="clearfix"></div>
									</div>

									<div className="row">
										{currentProductsNew.map(product => (
											<div className="col-sm-3" key={product.id}>
												<div className="single-item">
													<div className="single-item-header">
														<Link to="product.html"><img src={`source/image/product/${product.image}`} alt="" height="256px" /></Link>
													</div>
													<div className="single-item-body">
														<p className="single-item-title">{product.name}</p>
														<p className="single-item-price">
															{product.promotion_price ? (
																<span>
																	<del>${product.unit_price}</del> ${product.promotion_price}
																</span>
															) : (
																<span>${product.unit_price}</span>
															)}
														</p>
													</div>
													<div className="single-item-caption">
														<Link className="add-to-cart pull-left" to="shopping_cart.html"><i className="fa fa-shopping-cart"></i></Link>
														<Link className="beta-btn primary" to="product.html">Details <i className="fa fa-chevron-right"></i></Link>
														<div className="clearfix"></div>
													</div>
												</div>
											</div>
										))}
									</div>

									{/* Chân trang cho New Products */}
									<div className="row">
										<div className="col-sm-12">
											<nav aria-label="Page navigation">
												<ul className="pagination">
													{Array.from(Array(totalNewPages), (item, index) => (
														<li
															key={index + 1}
															className={currentPageNew === index + 1 ? "active" : ""}
															onClick={() => handlePageChangeNew(index + 1)}
														>
															<a href="#">{index + 1}</a>
														</li>
													))}
												</ul>
											</nav>
										</div>
									</div>
								</div>
							)}

							{topProducts.length > 0 && (
								<div className="beta-products-list">
									<h4>Top Products</h4>
									<div className="beta-products-details">
										<p className="pull-left">{topProducts.length} styles found</p>
										<div className="clearfix"></div>
									</div>

									<div className="row">
										{currentProductsTop.map(product => (
											<div className="col-sm-3" key={product.id}>
												<div className="single-item">
													<div className="single-item-header">
														<Link to="product.html"><img src={`source/image/product/${product.image}`} alt="" height="256px" /></Link>
													</div>
													<div className="single-item-body">
														<p className="single-item-title">{product.name}</p>
														<p className="single-item-price">
															{product.promotion_price ? (
																<span>
																	<del>${product.unit_price}</del> ${product.promotion_price}
																</span>
															) : (
																<span>${product.unit_price}</span>
															)}
														</p>
													</div>
													<div className="single-item-caption">
														<Link className="add-to-cart pull-left" to="shopping_cart.html"><i className="fa fa-shopping-cart"></i></Link>
														<Link className="beta-btn primary" to="product.html">Details <i className="fa fa-chevron-right"></i></Link>
														<div className="clearfix"></div>
													</div>
												</div>
											</div>
										))}
									</div>

									{/* Chân trang cho Top Products */}
									<div className="row">
										<div className="col-sm-12">
											<nav aria-label="Page navigation">
												<ul className="pagination">
													{Array.from(Array(totalTopPages), (item, index) => (
														<li
															key={index + 1}
															className={currentPageTop === index + 1 ? "active" : ""}
															onClick={() => handlePageChangeTop(index + 1)}
														>
															<a href="#">{index + 1}</a>
														</li>
													))}
												</ul>
											</nav>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
