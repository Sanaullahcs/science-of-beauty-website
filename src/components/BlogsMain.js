import React, { useState, useEffect } from "react";
import { Button, Divider, Grid, TextField } from "@material-ui/core";
import lady from "../assets/images/ladyc.png";
import "../assets/CustomCSS/BlogMain.css";
import "../assets/CustomCSS/Blog.css";
import { Link } from "react-router-dom";
import { FETCH_BLOG_URL } from "../env/apiConfig";

function BlogsMain({ blogs }) {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [Blog, setBlog] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(FETCH_BLOG_URL);
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
    const textContent = tempElement.innerText;
    const words = textContent.split(" ");
    return words.length > 30 ? words.slice(0, 30).join(" ") + "..." : textContent;
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredBlogs = Blog.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <div style={{ padding: "2% 8%" }}>
        {/* 🔍 Search Field */}
        <TextField
          label="Search Blog by Title"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginBottom: "0px" }}
        />

        <Grid container className="blogPageContainer-wrapper">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <Grid key={blog.id} item lg={4} md={6} sm={12} xs={12}>
                <div className="blog-postWrapper">
                  <Link to={`/blogs/${createSlug(blog.title)}`} className="blog-link">
                    <div
                      style={{ backgroundImage: `url(${blog.image})` }}
                      className={`blog-bg-${blog.id} blog-bg`}
                    >
                      <div className="fashion-div-wrapper">
                        <Button className="fashion-btn">FASHION</Button>
                      </div>
                    </div>
                    <div className="blogExpand">
                      <p className="blog-card-date">{blog.date}</p>
                      <p className="blog-card-heading">{blog.title}</p>
                      <p className="blog-card-description">
                        {truncateDescription(blog.description)}
                      </p>
                    </div>
                  </Link>
                </div>
              </Grid>
            ))
          ) : (
            <p className="noblogtext" style={{ margin: "auto", textAlign: "center", width: "100%" }}>
              No blogs found.
            </p>
          )}
        </Grid>
      </div>
    </>
  );
}

export default BlogsMain;
