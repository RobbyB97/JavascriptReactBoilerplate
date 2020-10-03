import React from 'react';

import HomeButton from './HomeButton';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import {navigationLinks} from '../../data/navigationLinks';


interface Props {

}

interface State {

}


export class Navigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    };

    render() {
        return (
            <section id="Navigation">
                <HomeButton />

                <DesktopNavigation 
                    links={...navigationLinks}
                />
                
                <MobileNavigation 
                    links={...navigationLinks}                  
                />
            </section>
        );
    };
};


export default Navigation;