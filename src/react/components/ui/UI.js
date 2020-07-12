/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Components */
import HomeButton from './HomeButton';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';


/* Component */
export class UI extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const navlinks = [
            {
                route: "/",
                text: "Home"
            }
        ]
        const links = [
            {
                text: "Meet the Dev",
                href: "https://bergers.dev",
                external: true
            }, {
                text: "View on GitHub",
                href: "https://github.com/RobbyB97/JavascriptReactBoilerplate",
                external: true
            }
        ]

        return (
            <section id="UI">
                <HomeButton />
                <DesktopNavigation 
                    navlinks={navlinks}
                    links={links}
                />
                <MobileNavigation 
                    navlinks={navlinks}
                    links={links}
                />
            </section>
        );
    };
};


export default UI;