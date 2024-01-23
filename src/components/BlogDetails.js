import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = ({ blogs }) => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();

    // Find the blog post with the matching id
    const blog = blogs.find((blog) => blog.id === parseInt(id, 10));

    // If the blog is not found, you can display an error or redirect to a 404 page
    if (!blog) {
        return <div>Blog not found</div>;
    }
   
    return (
        <div>
            <div>
                <div className="lady-div-wrapper">
                    <img className="lady" src={blog.image} />
                </div>
            </div>
            <div style={{ margin: "0px 5%" }}>
                <p className="blog-textarea-date">{blog.date}</p>
                <p className="blog-textarea-heading">
                    {blog.title}
                </p>
                <p className="blog-textarea-description">
                    {blog.MainFullContent}
                </p>
            </div>
        </div>
    );
};

export default BlogDetails;
