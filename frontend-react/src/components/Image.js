import React from "react";

const Image = ({ url, id, title, description }) => {
    return (
    <li>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <img src={url} alt={title} title={title}/>
    </li>
    )
};

export default Image;
