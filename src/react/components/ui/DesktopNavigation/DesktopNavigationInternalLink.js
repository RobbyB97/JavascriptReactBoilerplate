/* Packages */
import React from 'react';
import {NavLink} from 'react-router-dom';


/* Component */
export class DesktopNavigationInternalLink extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <li className="DesktopNavigationLink">
                <NavLink
                    className="DesktopNavigationLink__link"
                    to={this.props.route}
                >
                    {this.props.text}
                </NavLink>

                {/* Sublink menu */}
                {this.props.sublinks &&
                    <ul
                        className="DesktopNavigationLink__sublink_list"
                    >
                        {this.props.sublinks.map((sublink) => (
                            <li
                                className="DesktopNavigationLink__sublink_link"
                                key={sublink.text}
                            >
                                <NavLink to={sublink.route}>
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


export default DesktopNavigationInternalLink;