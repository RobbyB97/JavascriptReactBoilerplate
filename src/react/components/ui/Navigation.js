/* Packages */
import React from 'react';


/* Components */
import HomeButton from './HomeButton';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';


/* Component */
export class Navigation extends React.Component {
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
                    text: "Google",
                    href: "google.com",
                    external: true
                }, {
                    text: "Test 2",
                    href: "google.com",
                    external: true                    
                }]
            }
        ]

        return (
            <section id="Navigation">
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


export default Navigation;