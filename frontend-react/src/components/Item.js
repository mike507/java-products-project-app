import React, {useContext} from "react";
import Container from "./Container";
import {PictureContext} from "../context/PictureContext";

const Item = () => {
    const {authenticated, runSearch} = useContext(PictureContext);
    if (authenticated) {
        return (
            <div className="list-picture">
                <h1>My Pictures</h1>
                <Container/>
            </div>
        )}
    else {
        return (
            <h1> Authenticate to see the pictures</h1>
        );
    }
};

export default Item;
