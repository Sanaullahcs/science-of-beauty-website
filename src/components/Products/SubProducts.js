import { React, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "../../assets/CustomCSS/SubProducts.css";
import "../../assets/CustomCSS/Products.css";
import { Grid, Divider } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import productsData from '../../JSONData/productData'
import relatedProductsData from "../../JSONData/relatedProductData";
import Plx from "react-plx";



function SubProducts() {
  const parallaxDataHead = [
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
  const parallaxDataSub = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: -500,
          endValue: 0,
          property: "translateX",
        },

      ],
    },
    {
      start: 0,
      end: 700,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];
  // const parallaxDataImage = [
  //   {
  //     start: 0,
  //     end: 700,
  //     properties: [
  //       {
  //         startValue: 1,   // Initial scale (1 is the original size)
  //         endValue: 1.2,   // Scale to 1.2 (or any desired value for a little bigger)
  //         property: "scale",
  //       },
  //     ],
  //   },
  //   {
  //     start: 700,
  //     end: 800,
  //     properties: [
  //       {
  //         startValue: 1.2, // Scale back to 1.2
  //         endValue: 1,     // Return to the original size
  //         property: "scale",
  //       },
  //     ],
  //   },
  // ];

  const [activeSection, setActiveSection] = useState("description");
  const handleSelectClick = (section) => {
    setActiveSection(section);
  };
  const { productId } = useParams();
  const selectedProductId = parseInt(productId, 10);
  const selectedProduct = productsData.find((product) => product.id === selectedProductId);

  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
  }, []);
  const navigate = useNavigate();
  const handleButtonClick = (id) => {
    window.scrollTo(0, 0);
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
            <Plx parallaxData={parallaxDataHead}>

              <div className="subproducts-heading-wrapper">
                <p className="subproductsHeader-minheading">PRODUCTS</p>
                <p className="subproductsHeader-heading">{selectedProduct && selectedProduct.name}</p>
              </div>
            </Plx>

          </div>
        </div>
        <div style={{ padding: " 5% 0 0 0" }}>
          <Grid container style={{ padding: '0 5%' }}>
            <Grid items lg={6} md={6} sm={12} xs={12} style={{ zIndex: "999" }}>
              <div className="subproduct-img-wrapper">
                <div className="subproduct-img-div small-img-div">
                  <img
                    className="subproduct-original-img small-imgs"
                    src={selectedProduct && selectedProduct.image}
                  />
                </div>
                <div className="subproduct-img-div small-img-div">
                  <img
                    className="subproduct-original-img small-imgs"
                    src={selectedProduct && selectedProduct.image}
                  />
                </div>
                <div className="subproduct-img-div small-img-div">
                  <img
                    className="subproduct-original-img small-imgs"
                    src={selectedProduct && selectedProduct.image}
                  />
                </div>
                <div className="subproduct-img-div">
                  {/* <Plx parallaxData={parallaxDataImage}> */}
                  <img
                    className="subproduct-original-img small-imgs"
                    src={selectedProduct && selectedProduct.image}
                  />
                  {/* </Plx> */}
                </div>
              </div>
            </Grid>
            <Grid items lg={6} md={6} sm={12} xs={12}>

              <div className="subproducts-info-wrapper">
                <Plx parallaxData={parallaxDataSub}>
                  <p className="subproduct-title">{selectedProduct && selectedProduct.name}</p>
                  <p className="subproduct-pricing">{selectedProduct && selectedProduct.price}</p>
                  <div className="subproduct-rating-div">
                    <Rating
                      className="subproduct-rating"
                      name="read-only"
                      value={selectedProduct && selectedProduct.rating}
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
                </Plx>
              </div>

            </Grid>
          </Grid>
        </div>
        <div style={{ padding: "3% 5%" }}>
          <div>
            <div className="subproducts-descriptive-btn-wrapper">
              <Button className={`subproducts-description-btn ${activeSection === "description" ? "active" : ""
                }`}
                onClick={() => handleSelectClick("description")}>
                Description
              </Button>
              <Button
                className={`subproducts-additionalinfo-btn ${activeSection === "additionalInfo" ? "active" : ""
                  }`}
                onClick={() => handleSelectClick("additionalInfo")}
              >
                Additional Info
              </Button>
              <Button
                className={`subproducts-rating-btn ${activeSection === "rating" ? "active" : ""
                  }`}
                onClick={() => handleSelectClick("rating")}
              >
                Rating(1)
              </Button>
            </div>
          </div>
          <Divider className="subproduct-divider" />

          <div>
            {activeSection === "description" && (
              <p className="subproduct-description">
                ServiceMarket.dk was founded in 2021 by two young entrepreneurs
                who saw a problem with the fragmented service industry in Denmark.
                There were thousands of small businesses offering services, but it
                was difficult for consumers to find them and know which ones to
                choose. ServiceMarket.dk was founded in 2021 by two young
                entrepreneurs who saw a problem with the fragmented service
                industry in Denmark. There were thousands of small businesses
                offering services, but it was difficult for consumers to find them
                and know which ones to choose
              </p>
            )}
            {activeSection === "additionalInfo" && (
              <p className="subproduct-description">
                Elit proident ad amet duis. Eu nulla in sint quis non dolore aliquip veniam ut id anim. Exercitation amet magna sint amet. Exercitation ad fugiat do magna commodo aliqua. Lorem id sint elit consectetur id mollit laborum veniam ipsum mollit tempor esse incididunt. Commodo esse elit minim ipsum ex eu magna nulla cillum.
                Est enim cillum fugiat elit ea. Reprehenderit sunt exercitation officia duis tempor magna pariatur minim labore. Ea velit culpa laborum occaecat.<br />

                Esse incididunt ut sint consectetur consectetur ipsum. Irure consequat exercitation duis laboris fugiat amet commodo irure officia commodo adipisicing ea id dolor. Culpa eu ex Lorem fugiat. Laboris incididunt ad occaecat commodo aute ea adipisicing aliqua magna et quis. Culpa ut amet est enim non laboris ut.<br />

                Pariatur labore laboris magna ullamco excepteur elit reprehenderit ipsum labore anim consequat nulla eu. Magna aute officia consequat reprehenderit exercitation commodo velit ipsum quis in. Laboris dolore magna consectetur dolore aute eu exercitation ipsum pariatur id sit dolor mollit eu.
              </p>
            )}
            {activeSection === "rating" && (
              <p className="subproduct-description">
                {/* Rating content goes here */}
                In irure duis reprehenderit consequat adipisicing aliqua dolor amet eu proident labore duis elit. Non laborum ipsum consequat eu veniam qui occaecat irure occaecat proident cillum ea ut. Adipisicing labore aliquip fugiat exercitation.
              </p>
            )}
          </div>
          <Divider className="subproduct-divider" />
        </div>
        <div className="related-products-wrapper">
          <div>
            <p className="related-products-heading">Related Products</p>
          </div>
          <div>
            <Grid container>
              {relatedProductsData.map((product) => (
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
