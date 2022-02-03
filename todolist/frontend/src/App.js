import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/scss/bootstrap.scss';
import './static/css/main.css';

import Header from "./components/Header";
import ContentList from "./components/Content";
import Footer from "./components/Footer";

import AddContent from "./components/AddContent";
import LoginForm from "./components/LoginForm";

function App() {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/todo/`)
            .then((result) => {
                setItems(result.data)
            })

    }, [])

    return (

        <div className="container">
            <Router>
                <div className="card mt-5">
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <ContentList items={items}/>
                        </Route>
                        <Route exact path="/add">
                            <AddContent/>
                        </Route>
                        <Route exact path="/login">
                            <LoginForm/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
