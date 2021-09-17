import React from "react";
import Image from "./Image";

const Gallery = ({data}) => {
    const {length} = data;
    if (length > 0) {
        return (
            <div>
                <ul>
                    {data.map(image => {
                            const {id, name: title, description, imageUrl} = image;
                            //const url = `http://localhost:8080/images/${imageUrl}`;
                            const url = `/images/${imageUrl}`;
                            return <Image url={url} key={id} title={title} description={description}/>;
                    })}
                </ul>
            </div>
        )}
    else {
        return <h2>No Images Found</h2>;
}};

export default Gallery;
