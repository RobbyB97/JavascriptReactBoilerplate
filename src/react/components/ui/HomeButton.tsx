import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {navMenu_Mobile__Toggle} from '../../redux/actions/ui';


interface Props {
    navMenu_Mobile: boolean;
    navMenu_Mobile__Toggle: () => void;
}

interface State {

}


export class HomeButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    };

    navMenu_Mobile__Toggle = () => {
        /* Enable scrolling */
        const html = document.getElementsByTagName('HTML')[0];
        html.setAttribute('data-Mobile_Nav', 'false');
        
        this.props.navMenu_Mobile__Toggle();
    };

    render() {
        return (
            <section 
                id="HomeButton"
                onClick={this.props.navMenu_Mobile ? this.navMenu_Mobile__Toggle : undefined}
            >
                <NavLink 
                    to="/"
                    className="HomeButton__logo"
                >
                    {this.props.navMenu_Mobile ?
                        /* Nav Menu HomeButton */
                        <img src="/dist/images/homeButton/HomeButtonMobileNav.png" alt="Home"/>
                        :

                        /* Default HomeButton */
                        <img src="/dist/images/homeButton/HomeButton.png" alt="Home"/>
                    }
                </NavLink>
            </section>
        );
    }
}


/* Connect to store */
const mapStateToProps = (state: any) => {
    return {
        navMenu_Mobile: state.ui.navMenu_Mobile
    };
};


const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    navMenu_Mobile__Toggle: () => {
        dispatch(navMenu_Mobile__Toggle());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeButton);