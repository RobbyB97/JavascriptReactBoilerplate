/* Packages */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


/* Actions */
import {navMenu_Mobile__Toggle} from '../../../redux/actions/ui';



/* Component */
export class MobileNavigationInternalLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sublink_Menu: false
        };
    };


    sublink_Menu__Toggle = () => {
        this.setState({
            sublink_Menu: !this.state.sublink_Menu
        });
    };


    navMenu_Mobile__Toggle = () => {
        this.props.navMenu_Mobile__Toggle();
        this.setState({
            navMenu_Mobile: !this.state.navMenu_Mobile
        });
    };


    render() {
        return (
            <li className="MobileNavigationLink">
                <NavLink 
                    className="MobileNavigationLink__link"
                    to={this.props.route}
                    onClick={this.navMenu_Mobile__Toggle}
                >
                    {this.props.text}
                </NavLink>
                
                {/* Sublink menu button */}
                {this.props.sublinks &&
                    <button
                        className="MobileNavigationLink__sublink_button"
                        onClick={this.sublink_Menu__Toggle}
                        data-active={this.state.sublink_Menu}
                    >
                        ▼
                    </button>
                }

                {/* Sublink menu */}
                {this.props.sublinks &&
                    <ul 
                        className="MobileNavigationLink__sublink_list"
                        onClick={this.sublink_Menu__Toggle}
                        data-active={this.state.sublink_Menu}
                    >
                        {this.props.sublinks.map((sublink) => (
                            <li 
                                className="MobileNavigationLink__sublink"
                                key={sublink.text}
                            >
                                <NavLink
                                    className="MobileNavigationLink__sublink_link"
                                    to={sublink.route}
                                    onClick={this.navMenu_Mobile__Toggle}
                                >
                                    {sublink.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                }
            </li>
        );
    };
};


/* Connect to store */
const mapDispatchToProps = (dispatch) => ({
    navMenu_Mobile__Toggle: () => {
        dispatch(navMenu_Mobile__Toggle());
    }
});


export default connect(undefined, mapDispatchToProps)(MobileNavigationInternalLink);