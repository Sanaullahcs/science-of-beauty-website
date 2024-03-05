import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = ({ blogs }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();
    const blog = blogs.find((blog) => blog.id === parseInt(id, 15));
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
