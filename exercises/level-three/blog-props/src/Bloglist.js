import React from "react";
import Blogpost from "./Blogpost"
import data from "./data";

export default function Bloglist(){
    const blogPostElements = data.map(blogpost => {
        return <Blogpost title={blogpost.title} author={blogpost.author} date={blogpost.date} subTitle={blogpost.subTitle} />
    })

    return (
        <div className="bloglist">
            {blogPostElements}
            <h2 className="older-posts">Older Posts</h2>
        </div>
    )
}