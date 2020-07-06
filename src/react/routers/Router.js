/* Packages */
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';


/* Pages/Routes */
import Home from '../components/pages/Home'

/* Actions */
// TODO

/* Router */
export class Router extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route 
                        path="/"
                        component={Home}
                        exact
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default Router;