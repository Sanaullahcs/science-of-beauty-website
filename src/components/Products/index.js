import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import "../../assets/CustomCSS/Products.css";
import { Grid } from "@material-ui/core";
import productsData from '../../JSONData/productData'
import Plx from "react-plx";




function Products() {
  const parallaxDataTxt = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 2,
          property: "scale",
        },

      ],
    },
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState(12)
  const handleViewMoreClick = () => {
    setDisplayedProducts((prevDisplayed) => prevDisplayed + 12);
  };
  const navigate = useNavigate();
  const handleButtonClick = (id) => {
    navigate(`/sub-products/${id}`);
  };
  return (
    <>
      <div>
        {/* <Button onClick={handleButtonClick}>Add carts</Button> */}
        <div>
          <div className="ProductsHeader-bg">
            <Plx parallaxData={parallaxDataTxt}>
              <div className="products-heading-wrapper">
                <p className="productsHeader-minheading">PRODUCTS</p>
                <p className="productsHeader-heading">Our Latest Products</p>
              </div>
            </Plx>

          </div>
        </div>
        <div>
          <Grid container className="product-grid-container">
            {productsData.slice(0, displayedProducts).map((product) => (
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
        {displayedProducts < productsData.length && (
          <div className="view-more-button">
            <Button className="products-view-more-btn" onClick={handleViewMoreClick}>View More</Button>
          </div>
        )}
      </div>
    </>
  );
}
export default Products;
