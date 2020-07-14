/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Actions */
import {navMenu_Mobile__Toggle} from '../../../redux/actions/ui';


/* Component */
export class MobileNavigationExternalLink extends React.Component {
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
                <a
                    className="MobileNavigationLink__link"
                    href={this.props.href}
                    onClick={this.navMenu_Mobile__Toggle}
                    target="_blank"
                    rel="noopener"
                >
                    {this.props.text}
                </a>

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
                                className="MobileNavigationLink__sublink_link"
                                key={sublink.text}
                            >
                                <a
                                    className="MobileNavigationLink__link"
                                    href={sublink.href}
                                    onClick={
                                        this.navMenu_Mobile__Toggle &
                                        this.sublink_Menu__Toggle
                                    }
                                >
                                    {sublink.text}
                                </a>
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


export default connect(undefined, mapDispatchToProps)(MobileNavigationExternalLink);