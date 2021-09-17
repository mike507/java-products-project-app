import React, {useContext, useEffect} from "react";
import { PictureContext } from "../context/PictureContext";
import Gallery from "./Gallery";

const Container = () => {
    const pictureState = useContext(PictureContext);
    const { images, loading, runSearch } = pictureState;
    useEffect(() => {
        runSearch();
    });

    return (
        <div className="picture-container">
            { loading ? <h1 className="loader">Loading</h1> : <Gallery data={images} /> }
        </div>
    );
};

export default Container;
