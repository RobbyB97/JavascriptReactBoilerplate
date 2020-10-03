import React from 'react';
import {connect} from 'react-redux';

import Navigation from '../ui/Navigation';


interface Props {
    page_ID?: string;
}

interface State { }


export class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <header id="Header">
                <Navigation />

                <img 
                    className="Header__forkMe"
                    src="/dist/images/forkmeongithub.png"
                    data-visible={this.props.page_ID == "Default"}
                />
            </header>
        );
    }
}


/* Connect to store */
const mapStateToProps = (state: any) => {
    return {
        page_ID: state.page.id
    };
};


export default connect(mapStateToProps, undefined)(Header);