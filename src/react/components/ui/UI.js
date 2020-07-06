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
        return (
            <section id="UI">
                <HomeButton />
                <DesktopNavigation />
                <MobileNavigation />
            </section>
        );
    };
};


export default UI;