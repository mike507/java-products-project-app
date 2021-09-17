import React, {createContext, useState} from "react";
import axios from "axios";
//import cookies from "js-cookie";

export const PictureContext = createContext({
    images: [],
    loading: true,
    authenticated: false
});

const PictureContextProvider = (props) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [csrfToken, setCsrfToken] = useState("");

    /*
    const intercept = () => {
        axios.interceptors.request.use(req => {
            req.headers['X-Requested-With'] = 'XMLHttpRequest';
            return req;
        }, error => {
            return Promise.reject(error);
        });
    }

    const runSearch = () => {
        axios
            .get("http://localhost:8080/api/products")
            .then(response => {
                setImages(response.data._embedded.products);
                setLoading(false);
            })
            .catch(error => {
                console.log(
                    "Encountered an error with fetching and parsing data",
                    error
                );
            });
    };

     const res = await axios.get('https://httpbin.org/get', {
        headers: {
            'Test-Header': 'test-value'
        },
    });

*/


    const runSearch = () => {
        axios
            .get('/api/products',
                {headers: {"X-Auth-Token": csrfToken}})
            .then(responsePictures => {
                setImages(responsePictures.data._embedded.products);
                setLoading(false);
            })
            .catch(error => {
                console.log(
                    "Encountered an error with fetching and parsing data",
                    error
                );
            });
    };

    const authenticate = (cb, props, {userName, password}) => {
        axios.get("/user", {
            auth: {
                username: userName,
                password
            }
        })
        .then(response => {
            if (response.data.name) {
                setAuthenticated(true);
                setCsrfToken(response.headers['x-auth-token']);
                if (cb)
                    cb(props);

        }})
        .catch(function (error) {
            console.log(error);
        });
    }

    const logOut = (cb, props) => {
        axios.post("/logout",
            {},
            {
                headers: {'X-Auth-Token': csrfToken}
            })
            .then( (response) => {
                console.log(response);
                setAuthenticated(false);
                setCsrfToken("");
                if (cb)
                    cb(props);
            })
        .catch(error =>
            console.log(error));
    }

    //intercept();
    const picturesState = {images, loading, authenticated, runSearch, authenticate, logOut};
    return (
        <PictureContext.Provider value={picturesState}>
            {props.children}
        </PictureContext.Provider>
    );

};

export default PictureContextProvider;
