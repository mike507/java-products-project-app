import React from "react";
import PictureContextProvider from "./context/PictureContext";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import {LinkContainer} from 'react-router-bootstrap';

import Item from "./components/Item";
import LoginForm from "./components/LoginForm";
import LogoutForm from "./components/LogoutForm";
import NavigationBar from "./components/NavigationBar";

const App = () => {
    return (
        <PictureContextProvider>
            <h1>Some images...</h1>
            <Router>
                <div className="container">
                    <Router>
                        <NavigationBar></NavigationBar>
                        <Switch>
                            <Route path="/" exact={true}>
                                <Redirect to="/picture"/>
                            </Route>
                            <Route path="/picture" exact={true}>
                                <Item/>
                            </Route>
                            <Route path="/login" exact={true}>
                                <LoginForm/>
                            </Route>
                            <Route path="/logout" exact={true}>
                                <LogoutForm/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </Router>
        </PictureContextProvider>
    );
}

export default App;
