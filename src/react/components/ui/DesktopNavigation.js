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
                <ul className="DesktopNavigation__list">
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
            </section>
        );
    };
};


export default DesktopNavigation;