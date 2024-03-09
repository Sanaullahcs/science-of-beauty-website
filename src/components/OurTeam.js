import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../assets/CustomCSS/OurTeam.css";
import next from "../assets/images/next-blog-arrow.png";
import prev from "../assets/images/prev-blog-arrow.png";
import dump from '../assets/images/dumpp.jpg'
import Plx from "react-plx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, IconButton } from "@material-ui/core";
const Base_URL = "http://127.0.0.1:8000/api/fetchmembers/";

function OurTeam() {
  const [members, setMembers] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Base_URL, {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000", // Replace with your allowed origin
          },
        });
        console.log("Response:", response);
        const data = await response.json();
        console.log("Data:", data.Members);
        setMembers(data.Members);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchData();
  }, []);

  // const fetc = async  () =>{
  //   try {
  //     const response = await fetch('http://127.0.0.1:8000/api/fetchmembers');
  //     console.log("Response:", response);
  //     const data = await response.json();
  //     console.log("Data:", data);
  //     setMembers(data);
  //   } catch (error) {

  //     console.error("Error:", error.message);
  //   }
  // }
  const teamMembers = [
    {
      img: require("../assets/images/antonio.png"),
      name: "Dr. Rozier ",
      role: "Medical director",
      description:
        "Meet Dr. Rozier, the esteemed Medical Director and owner at The Science of Beauty Medspa and Wellness Center. Renowned for his expertise in pain management, Dr. Rozier stands at the forefront of regenerative medicine, specializing in cutting-edge therapies such as PRP (Platelet-Rich Plasma), stem cell treatments, and exosome applications. As a dedicated practitioner, he brings a wealth of knowledge and experience to our center, ensuring that each client benefits from the latest advancements in medical aesthetics. Dr. Rozier's commitment to innovation and personalized care defines our approach, making The Science of Beauty Medspa a trusted destination for transformative and regenerative wellness.",
    },
    {
      img: require("../assets/images/deen.png"),
      name: "Brittany Deen",
      role: "Clinical manager ",
      description:
        "Meet Brittany Deen, the visionary Clinical Manager and Owner of The Science of Beauty Wellness Center. Stepping into the medspa world in 2009, Brittany has devoted her career to empowering women and men to feel confidently comfortable in their own skin. The inception of The Science of Beauty was driven by Brittany's keen observation of a growing need for a safe, inclusive haven for beauty and wellness. Her passion for holistic wellness and scientifically proven beauty treatments serves as the cornerstone of our practice. Brittany's commitment to creating a space that fosters confidence from within reflects in every aspect of our center, making The Science of Beauty a sanctuary where transformative care and genuine well-being converge under her expert guidance.",
    },
    {
      img: require("../assets/images/dumpp.jpg"),
      name: "Felisia Matthews",
      role: "Laser Professional",
      description:
        "Meet Felicia Matthews, our accomplished Laser Professional at The Science of Beauty Medspa and Wellness Center. With an impressive 15 years of laser experience, Felicia is a true expert in her field. Specializing in laser hair removal across all skin types, as well as utilizing advanced technologies like Morpheus 8 for skin rejuvenation and body contouring, Felicia combines her technical prowess with a warm and inviting personality. Her friendly and outgoing nature ensures that every client feels at ease during their treatments, making the experience not only effective but also comfortable and enjoyable. With Felicia, you are in the hands of a skilled professional who prioritizes both expertise and personalized care.",
    },
    {
      img: require("../assets/images/dumpp.jpg"),
      name: "Leah Write",
      role: "Nurse Injector",
      description:
        "Introducing Leah Wright, our accomplished Nurse Injector at The Science of Beauty Medspa and Wellness Center. With a background as an ICU nurse, Leah brings a wealth of experience in prioritizing safety and patient care to her role. Having seamlessly merged her passion for science and beauty, Leah ventured into the aesthetic world. Specializing in full-face rejuvenation, she is dedicated to creating natural, timeless results for her clients. Leah's commitment to excellence, coupled with her nurturing approach, ensures that each patient receives not only the benefits of her technical skill but also the compassionate care synonymous with her background in critical care nursing. At The Science of Beauty, Leah's expertise ensures a transformative and safe journey towards aesthetic enhancement.",
    },
  ];
  const [expandedStates, setExpandedStates] = useState(
    Array(teamMembers.length).fill(false)
  );
  const handleToggle = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };
  const NextArrow = (props) => {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          display: "block",
          background: `url(${next})`,
          backgroundSize: "cover",
          right: "20px",
          // marginTop: "2%",
          width: "50px",
          height: "50px",
          zIndex: "22",
        }}
      >
        Next
      </div>
    );
  };

  const PrevArrow = (props) => {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          display: "block",
          background: `url(${prev})`,
          backgroundSize: "cover",
          left: "20px",
          zIndex: "28",
          // marginTop: "2%",
          width: "50px",
          height: "50px",
        }}
      >
        Prev
      </div>
    );
  };
  const [sliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  const parallaxDataTxt = [
    {
      start: 5800,
      end: 6200,
      properties: [
        {
          startValue: 2,
          endValue: 1,
          property: "scale",
        },
      ],
    },
    {
      start: 5800,
      end: 6200,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];

  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div className="blog-container">
          <Plx parallaxData={parallaxDataTxt}>
            <h1 className="blog-heading">Meet the Team</h1>
          </Plx>

          <Slider {...sliderSettings} className="slider-blog-card-holder">
            {
            members && members.length > 0 ? (
              members.map((member, index) => (
                <div key={index} className="teamMainCard">
                  <div>
                    {member.image ? (
                      <img
                        className="teamImg"
                        src={member.image}
                        alt={member.name}
                      />
                    ) : (
                      <img
                        className="teamImg"
                        src={dump}
                        alt="Placeholder"
                      />
                    )}
                  </div>
                  <div className="cardDescription">
                    <div>
                      <p className="teamName">{member.name}</p>
                      <p className="teamTitle">{member.position}</p>
                    </div>
                    <div>
                      <IconButton onClick={() => handleToggle(index)}>
                        <ExpandMoreIcon
                          style={{ color: "#fff" }}
                          color="#fff"
                        />
                      </IconButton>
                    </div>
                    <Collapse in={expandedStates[index]}>
                      <div className="teamDescription">
                        {member.description}
                      </div>
                    </Collapse>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )
            }
          </Slider>
        </div>
        <div className="spacer-divider-bloggers"></div>
      </div>
    </>
  );
}
export default OurTeam;
