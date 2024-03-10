import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import serviceImg from "../../assets/images/newServices5.png";
import { FETCH_SERVICES } from "../../env/apiConfig";
import { useParams } from "react-router-dom";
import "../../assets/CustomCSS/Services/SubServices.css";
import { Link } from "react-router-dom";

const SingleService = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(FETCH_SERVICES, {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000", // Replace with your allowed origin
          },
        });
        console.log("Response:", response);
        const data = await response.json();
        console.log("ServicesData:", data.services);
        setServices(data.services);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    fetchData();
  }, []);
  const { id } = useParams();
  console.log(id);
  const serviceOne = services
    ? services.find((item) => item.id === parseInt(id))
    : null;
  console.log(serviceOne);
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="subServiceContainer-wrapper">
        <Grid container className="subServices-container ">
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <div className="subServices-content-holder">
              <div>
                <p className="subService-heading">
                  {serviceOne ? serviceOne.title : ""}
                </p>
                <p
                  className="subService-Description"
                  dangerouslySetInnerHTML={{
                    __html: serviceOne ? serviceOne.description : "",
                  }}
                />
              </div>
              <div className="subservice-contactUsBtn-holder">
                <Link to={`/contact`}>
                  <Button className="subService-contactUsBtn ">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <div>
              <img src={serviceOne ? serviceOne.image : ""} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SingleService;
