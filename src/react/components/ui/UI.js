/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Components */
import HomeButton from './HomeButton';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';


/* Component */
export class UI extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const internal_links = [
            {
                route: "/",
                text: "Home",
                sublinks: [{
                    text: "Home",
                    route: "/"
                }]
            }
        ]
        const external_links = [
            {
                text: "Meet the Dev",
                href: "https://bergers.dev",
                external: true
            }, {
                text: "View on GitHub",
                href: "https://github.com/RobbyB97/JavascriptReactBoilerplate",
                external: true,
                sublinks: [{
                    text: "Test 1",
                    href: "google.com",
                    external: true
                }, {
                    text: "Test 1",
                    href: "google.com",
                    external: true                    
                }]
            }
        ]

        return (
            <section id="UI">
                <HomeButton />

                <DesktopNavigation 
                    internal_links={internal_links}
                    external_links={external_links}
                />
                
                <MobileNavigation 
                    internal_links={internal_links}
                    external_links={external_links}                    
                />
            </section>
        );
    };
};


export default UI;