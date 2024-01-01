import { React, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "../../assets/CustomCSS/SubProducts.css";
import "../../assets/CustomCSS/Products.css";
import { Grid, Divider } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import productImg from "../../assets/images/product1.png";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";

const productsData = [
  {
    id: 1,
    image: product1,
    name: "Uplifting Serum",
    price: "$33.00",
  },
  {
    id: 2,
    image: product2,
    name: "Uplifting Serum",
    price: "$33.00",
  },
  {
    id: 3,
    image: product3,
    name: "Uplifting Serum",
    price: "$33.00",
  },
  {
    id: 4,
    image: product4,
    name: "Uplifting Serum",
    price: "$33.00",
  },
];

function SubProducts() {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
  }, []);
  const navigate = useNavigate();
  const handleButtonClick = (id) => {
    navigate(`/sub-products/${id}`);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div>
        <div>
          <div className="subProductsHeader-bg">
            <div className="subproducts-heading-wrapper">
              <p className="subproductsHeader-minheading">PRODUCTS</p>
              <p className="subproductsHeader-heading">Uplifting Serum</p>
            </div>
          </div>
        </div>
        <div style={{ padding: " 5% 0 0 0" }}>
          <Grid container>
            <Grid items lg={6} md={6} sm={12} xs={12}>
              <div className="subproduct-img-wrapper">
                <div className="subproduct-img-div small-img-div">
                  <img
                    className="subproduct-original-img small-imgs"
                    src={productImg}
                  />
                </div>
                <div className="subproduct-img-div small-img-div">
                  <img
                    className="subproduct-original-img small-imgs"
                    src={productImg}
                  />
                </div>
                <div className="subproduct-img-div small-img-div">
                  <img
                    className="subproduct-original-img small-imgs"
                    src={productImg}
                  />
                </div>
                <div className="subproduct-img-div">
                  <img
                    className="subproduct-original-img big-img"
                    src={productImg}
                  />
                </div>
              </div>
            </Grid>
            <Grid items lg={6} md={6} sm={12} xs={12}>
              <div className="subproducts-info-wrapper">
                <p className="subproduct-title">Uplifting Serum</p>
                <p className="subproduct-pricing">$33.00</p>
                <div className="subproduct-rating-div">
                  <Rating
                    className="subproduct-rating"
                    name="read-only"
                    value="4"
                    readOnly
                  />
                </div>
                <div className="quantity-btn-wrapper">
                  <Button className="quantity-btn">1.5gm</Button>
                  <Button className="quantity-btn">2.5gm</Button>
                  <Button className="quantity-btn">3gm</Button>
                </div>
                <div className="add-cart-btn-div-wrapper">
                  <Button className="quantity-btn" onClick={handleDecrement}>
                    -
                  </Button>
                  <span className="quantity">{quantity}</span>
                  <Button className="quantity-btn" onClick={handleIncrement}>
                    +
                  </Button>
                  <Button className="subproduct-addtocart-btn">
                    Add to cart
                  </Button>
                </div>
                <div>
                  <p className="subproduct-description max-width-700">
                    ServiceMarket.dk was founded in 2021 by two young
                    entrepreneurs who saw a problem with the fragmented service
                    industry in Denmark. There were thousands of small
                    businesses offering services, but it was difficult for
                    consumers to find them and know which ones to choose.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div style={{ padding: "3% 5%" }}>
          <div>
            <div className="subproducts-descriptive-btn-wrapper">
              <Button className="subproducts-description-btn">
                Description
              </Button>
              <Button className="subproducts-additionalinfo-btn">
                Additional Info
              </Button>
              <Button className="subproducts-rating-btn">Rating(1)</Button>
            </div>
          </div>
          <Divider className="subproduct-divider" />
          <div>
            <p className="subproduct-description">
              ServiceMarket.dk was founded in 2021 by two young entrepreneurs
              who saw a problem with the fragmented service industry in Denmark.
              There were thousands of small businesses offering services, but it
              was difficult for consumers to find them and know which ones to
              choose. ServiceMarket.dk was founded in 2021 by two young
              entrepreneurs who saw a problem with the fragmented service
              industry in Denmark. There were thousands of small businesses
              offering services, but it was difficult for consumers to find them
              and know which ones to choose.{" "}
            </p>
          </div>
          <Divider className="subproduct-divider" />
        </div>
        <div>
          <div>
            <p className="related-products-heading">Related Products</p>
          </div>
          <div>
            <Grid container>
              {productsData.map((product) => (
                <Grid
                  key={product.id}
                  item
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <div className="product-div-wrapper">
                    <img
                      className="my-product-img"
                      src={product.image}
                      alt={`Product ${product.id}`}
                    />
                    <div>
                      <p className="products-title">{product.name}</p>
                      <p className="products-price">{product.price}</p>
                    </div>
                    {hoveredProductId === product.id && (
                      <Button
                        className="add-to-cart-btn"
                        onClick={() => handleButtonClick(product.id)}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
export default SubProducts;
