import React from 'react';

import DesktopNavigationLink from './DesktopNavigationLink';
import {navigationLinksType} from '../../../data/navigationLinks'


interface Props {
    links: navigationLinksType[];
}

interface State {

}


export class DesktopNavigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    };

    render() {
        return (
            <section id="DesktopNavigation">
                <nav className="DesktopNavigation__nav">
                    <ul className="DesktopNavigation__list">
                        {/* Links */}
                        {this.props.links &&
                            this.props.links.map((link) => (
                                <DesktopNavigationLink 
                                    key={link.text}
                                    {...link}
                                />
                            ))
                        }                 
                    </ul>
                </nav>
            </section>
        );
    };
};


export default DesktopNavigation;