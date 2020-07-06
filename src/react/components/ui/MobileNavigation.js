/* Packages */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


/* Component */
export class MobileNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navMenu_Mobile: false
        };
    };

    
    navMenu_Mobile__Toggle = () => {
        this.props.navMenu_Mobile__Toggle();
    };


    render() {
        return (
            <section id="MobileNavigation">
                <aside 
                    data-active={this.state.navMenu_Mobile}
                    className="MobileNavigation__Menu"
                >
                    <ul className="MobileNavigation__list">
                        {this.props.internal_links &&
                            this.props.internal_links.map((link) => (
                                <li key={link.text}>
                                    <a href={link.href}>
                                        {link.text}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </aside>
            </section>
        );
    };
};


/* Connect to store */
const mapStateToProps = (state) => {
    return {
        navMenu_Mobile: state.ui.navMenu_Mobile
    };
};


const mapDispatchToProps = (dispatch) => ({
    navMenu_Mobile__Toggle: () => {
        dispatch(navMenu_Mobile__Toggle());
    }
});


export default MobileNavigation;