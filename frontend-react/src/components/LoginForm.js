import React, {useContext, useState} from "react";
import {PictureContext} from "../context/PictureContext";
import {withRouter} from "react-router-dom";

const LoginForm = (props) => {
    //console.log("LoginForm");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {authenticate} = useContext(PictureContext);

    const updateUserName = e => {
        setUserName(e.target.value);
        e.preventDefault();
    };
    const updatePassword = e => {
        setPassword(e.target.value);
        e.preventDefault();
    };
 
    const handleSubmitClick = (props, e) => {
        e.preventDefault();
        authenticate(() => {
            props.history.push('/picture');
        }, props, {userName, password});
    }

    const handleCancelClick = (props, e) => {
        e.preventDefault();
        props.history.push('/picture');
    };

    return (
        <form className="login-form">
            <div className="form-group">
                <label>Username : </label>
                <input
                    type="text"
                    name="userName"
                    placeholder="Enter user name..."
                    onChange={updateUserName}
                    value={userName}
                />
            </div>
            <div>
                <label>Password : </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password..."
                    onChange={updatePassword}
                    value={password}
                />
            </div>
            <div>
                <button
                    type="submit"
                    className={`login-button btn btn-primary ${userName.trim() && password.trim() ? "active" : null}`}
                    disabled={!userName.trim() || !password.trim()}
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

export default withRouter(LoginForm);
