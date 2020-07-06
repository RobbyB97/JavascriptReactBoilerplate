/* Packages */
import React from 'react';
import {NavLink} from 'react-router-dom';


/* Component */
export class HomeButton extends React.Component {
    constructor(props) {
        super(props);
    };


    componentDidMount() {
        /*document.addEventListener('scroll', () => {
            this.toggle();
        });*/
    };


    render() {
        return (
            <section 
                id="HomeButton"    
            >
                <NavLink 
                    to="/"
                    className="HomeButton__logo"
                >
                    <img src="/dist/images/icons/favicon.png" />
                </NavLink>
            </section>
        );
    };
};


export default HomeButton;