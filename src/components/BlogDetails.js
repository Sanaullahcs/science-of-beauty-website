import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Base_URL = "http://127.0.0.1:8000/api/fetchblog/";

const BlogDetails = ({ blogs }) => {
  const [blog, setBlog] = useState([]);
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
        console.log("BlogDatamain:", data.blogs);
        setBlog(data.blogs); 
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchData();
  }, []);
  const truncateDescription = (description) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = description;
    let textContent = tempElement.innerText;
    return textContent;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  console.log(id);
  console.log(blog);
  const blogItem = blog.find((item) => item.id === parseInt(id));
  console.log(blogItem);
  return (
    <div>
      {blogItem && (
        <div>
          <div className="lady-div-wrapper">
            <img className="lady" src={blogItem.image} />
          </div>
          <div style={{ margin: "0px 5%" }}>
            <p className="blog-textarea-date">{blogItem.date}</p>
            <p className="blog-textarea-heading">{blogItem.title}</p>
            <p className="blog-textarea-description"> {truncateDescription(blogItem.description)}</p>
          </div>
        </div>
      )}
    </div>
    // <div></div>
  );
};

export default BlogDetails;
