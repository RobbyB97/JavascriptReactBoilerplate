/* Packages */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


/* Component */
export class DesktopNavigation extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <section id="DesktopNavigation">
                <nav className="DesktopNavigation__nav">
                    <ul className="DesktopNavigation__list">
                        {/* NavLinks */}
                        {this.props.navlinks &&
                            this.props.navlinks.map((link) => (
                                <li 
                                    key={link.text}
                                    className="DesktopNavigation__link"
                                >
                                    <NavLink
                                        to={link.route}
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
                                    className="DesktopNavigation__link"
                                >
                                    <a 
                                        href={link.href} 
                                        target={link.external && "_blank"}
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


export default DesktopNavigation;