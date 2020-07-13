/* Packages */
import React from 'react';


/* Components */
import DesktopNavigationInternalLink from './DesktopNavigationInternalLink';
import DesktopNavigationExternalLink from './DesktopNavigationExternalLink';


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
                        {/* Internal links */}
                        {this.props.internal_links &&
                            this.props.internal_links.map((link) => (
                                <DesktopNavigationInternalLink {...link}/>
                            ))
                        }

                        {/* External links */}
                        {this.props.external_links &&
                            this.props.external_links.map((link) => (
                                <DesktopNavigationExternalLink {...link}/>
                            ))
                        }                    
                    </ul>
                </nav>
            </section>
        );
    };
};


export default DesktopNavigation;