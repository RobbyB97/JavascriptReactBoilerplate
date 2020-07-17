/* Packages */
import React from 'react';
import {connect} from 'react-redux';
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
                <div 
                    id="Router"
                    data-page_ID={this.props.page_ID}
                >
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


/* Connect to store */
const mapStateToProps = (state) => {
    return {
        page_ID: state.page.id
    };
};


export default connect(mapStateToProps, undefined)(Router);