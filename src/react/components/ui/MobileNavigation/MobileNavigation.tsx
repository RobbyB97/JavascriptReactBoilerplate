import React from 'react';
import {connect} from 'react-redux';

import MobileNavigationLink from './MobileNavigationLink';
import {navMenu_Mobile__Toggle} from '../../../redux/actions/ui';
import {navigationLinksType} from '../../../data/navigationLinks'


interface Props {
    navMenu_Mobile: boolean;
    navMenu_Mobile__Toggle: any;
    links: navigationLinksType[];
}

interface State {
    navMenu_Mobile: boolean;
}


export class MobileNavigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            navMenu_Mobile: false
        };
    };

    
    navMenu_Mobile__Toggle = () => {
        /* Disable/enable scrolling */
        const html = document.getElementsByTagName('HTML')[0];
        if (this.props.navMenu_Mobile) {
            html.setAttribute('data-mobile_nav', 'false');
        } else {
            html.setAttribute('data-mobile_nav', 'true');
        }
        
        /* Set state */
        this.props.navMenu_Mobile__Toggle();
        this.setState({
            navMenu_Mobile: !this.state.navMenu_Mobile
        });
    };


    render() {
        return (
            <section id="MobileNavigation">
                <div 
                    className="MobileNavigation__button"
                    onClick={this.navMenu_Mobile__Toggle}
                    data-navmenu_mobile={this.props.navMenu_Mobile}  
                >
                    {this.props.navMenu_Mobile ? "✕" : "☰"}
                </div>

                <nav 
                    data-active={this.props.navMenu_Mobile}
                    className="MobileNavigation__menu"
                >
                    <ul 
                        className="MobileNavigation__list"
                        data-active={this.props.navMenu_Mobile}
                    >
                        {/* Links */}
                        {this.props.links &&
                            this.props.links.map((link) => (
                                <MobileNavigationLink 
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


/* Connect to store */
const mapStateToProps = (state: any) => {
    return {
        navMenu_Mobile: state.ui.navMenu_Mobile
    };
};


const mapDispatchToProps = (dispatch: any) => ({
    navMenu_Mobile__Toggle: () => {
        dispatch(navMenu_Mobile__Toggle());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation);