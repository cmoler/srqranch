import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {HuntingPage} from "./HuntingPage/HuntingPage";
import {LandingPage} from "./LandingPage/LandingPage";
import {VacationPage} from "./VacationPage/VacationPage";
import {Route, Switch} from "react-router";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/Hunting/' component={HuntingPage}/>
            <Route path='/Vacation/' component={VacationPage}/>
        </Switch>
    </main>
);

ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
