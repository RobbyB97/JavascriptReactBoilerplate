/* Packages */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


/* Actions */
import {navMenu_Mobile__Toggle} from '../../redux/actions/ui';


/* Component */
export class MobileNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navMenu_Mobile: false
        };
    };

    
    navMenu_Mobile__Toggle = () => {
        /* Disable/enable scrolling */
        const html = document.getElementsByTagName('HTML')[0];
        if (this.props.navMenu_Mobile) {
            html.setAttribute('data-Mobile_Nav', 'false');
        } else {
            html.setAttribute('data-Mobile_Nav', 'true');
        }
        
        /* Set state */
        this.props.navMenu_Mobile__Toggle();
        this.setState({
            navMenu_Mobile: !this.state.navMenu_Mobile
        });
    };


    render() {
        return (
            <section id="MobileNavigation">
                <div 
                    className="MobileNavigation__button"
                    onClick={this.navMenu_Mobile__Toggle}    
                >
                    {this.props.navMenu_Mobile ? "✕" : "☰"}
                </div>

                <nav 
                    data-active={this.props.navMenu_Mobile}
                    className="MobileNavigation__menu"
                >
                    <ul className="MobileNavigation__list">
                        {/* NavLinks */}
                        {this.props.navlinks && 
                            this.props.navlinks.map((link) => (
                                <li 
                                    key={link.text}
                                    className="MobileNavigation__link"
                                >
                                    <NavLink 
                                        to={link.route}
                                        onClick={this.navMenu_Mobile__Toggle}
                                    >
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))
                        }

                        {/* External links */}
                        {this.props.links &&
                            this.props.links.map((link) => (
                                <li 
                                    key={link.text}
                                    className="MobileNavigation__link"
                                >
                                    <a
                                        href={link.href}
                                        onClick={this.navMenu_Mobile__Toggle}
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
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


export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation);