import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PageType } from './pageType';
import { page_ID__Set } from '../../redux/actions/page';


interface Props extends PageType { }

interface State { }


export class Wildcard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentWillMount() {
        this.page_ID__Set('Wildcard');
    }

    page_ID__Set = (id: string) => {
        this.props.page_ID__Set(id);
    }


    render() {
        return (
            <div id="Wildcard">

            </div>
        );
    }
}


/* Connect to store */
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    page_ID__Set: (id: string) => {
        dispatch(page_ID__Set(id));
    }
});


export default connect(undefined, mapDispatchToProps)(Wildcard);