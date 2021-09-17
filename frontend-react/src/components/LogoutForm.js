import React, {useContext} from "react";
import {PictureContext} from "../context/PictureContext";
import {withRouter} from "react-router-dom";

const LogoutForm = (props) => {
    const {logOut} = useContext(PictureContext);

    const handleSubmitClick = (props, e) => {
        e.preventDefault();
        logOut(props => props.history.push('/picture'), props);
    }
    const handleCancelClick = (props, e) => {
        e.preventDefault();
        props.history.push('/picture');
    }
    return (
        <form className="logout-form">
            <h1>Do you really want to logout ?</h1>
            <div>
                <button
                    type="submit"
                    className="logout-button btn btn-primary active"
                    onClick={(e) => handleSubmitClick(props, e)}
                >OK
                </button>
                <button type="button" className="cancel-button btn btn-primary"
                        onClick={(e) => handleCancelClick(props, e)}
                >Cancel
                </button>
            </div>
        </form>
    );
};

export default withRouter(LogoutForm);
