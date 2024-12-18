import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FETCH_BLOG_URL } from "../env/apiConfig";

const BlogDetails = ({ blogs }) => {
  const [blog, setBlog] = useState([]);
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace spaces and special characters with hyphens
      .replace(/(^-|-$)+/g, ""); // Remove leading or trailing hyphens
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(FETCH_BLOG_URL, {});

        const data = await response.json();

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
  const { slug } = useParams(); // Get slug from URL

  // Find the blog by slug
  const blogItem = blog.find((item) => createSlug(item.title) === slug);

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
            <p
              className="blog-textarea-description"
              dangerouslySetInnerHTML={{ __html: blogItem.description }}
            />
          </div>
        </div>
      )}
    </div>
    // <div></div>
  );
};

export default BlogDetails;
