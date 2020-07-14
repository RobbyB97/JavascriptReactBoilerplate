/* Packages */
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


/* Components */
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';


/* Pages/Routes */
import Home from '../components/pages/Home';


/* Router */
export class Router extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />

                    <Switch>
                        <Route 
                            path="/"
                            component={Home}
                            exact
                        />
                    </Switch>

                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}


export default Router;