/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Component */
export class DesktopNavigationExternalLink extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <li className="DesktopNavigationLink">
                <a
                    className="DesktopNavigationLink__link"
                    href={this.props.href}
                    target="_blank"
                    rel="noopener"
                >
                    {this.props.text}
                </a>

                {/* Sublink menu */}
                {this.props.sublinks &&
                    <ul className="DesktopNavigationLink__sublink_list">
                        {this.props.sublinks.map((sublink) => (
                            <li
                                className="DesktopNavigation__sublink_link"
                                key={sublink.text}
                            >
                                <a href={sublink.href}>
                                    {sublink.text}
                                </a>
                            </li>
                        ))

                        }
                    </ul>
                }
            </li>
        );
    };
};


export default DesktopNavigationExternalLink;