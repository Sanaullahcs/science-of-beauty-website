import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import "../../assets/CustomCSS/Products.css";
import { Grid } from "@material-ui/core";
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
  {
    id: 5,
    image: product1,
    name: "Uplifting Serum",
    price: "$33.00",
  },
  {
    id: 6,
    image: product2,
    name: "Uplifting Serum",
    price: "$33.00",
  },
  {
    id: 7,
    image: product3,
    name: "Uplifting Serum",
    price: "$33.00",
  },
  {
    id: 8,
    image: product4,
    name: "Uplifting Serum",
    price: "$33.00",
  },
  {
    id: 9,
    image: product1,
    name: "Uplifting Serum",
    price: "$33.00",
  },
  {
    id: 10,
    image: product2,
    name: "Uplifting Serum",
    price: "$33.00",
  },
  {
    id: 11,
    image: product3,
    name: "Uplifting Serum",
    price: "$33.00",
  },
  {
    id: 12,
    image: product4,
    name: "Uplifting Serum",
    price: "$33.00",
  },

];

function Products() {
  const [hoveredProductId, setHoveredProductId] = useState(null);
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
            <div className="products-heading-wrapper">
              <p className="productsHeader-minheading">PRODUCTS</p>
              <p className="productsHeader-heading">Our Latest Products</p>
            </div>
          </div>
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
    </>
  );
}
export default Products;
