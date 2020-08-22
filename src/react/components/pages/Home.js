/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Actions */
import {page_ID__Set} from '../../redux/actions/page';


/* Component */
export class Home extends React.Component {
    constructor(props) {
        super(props);
    };


    componentWillMount() {
        this.page_ID__Set('Home');
    };


    page_ID__Set = (id) => {
        this.props.page_ID__Set(id);
    };


    render() {
        return (
            <div id="Home">
                <section className="Home__header">
                    <h2>Redux</h2>
                    <h2>Boilerplate.</h2>
                    <h4>By Robby Bergers</h4>
                </section>

                <section className="Home__content">
                    <article className="Home__links">
                        <a 
                            className="Home__link"
                            href="https://github.com/RobbyB97/JavascriptReactBoilerplate"
                        >
                            View on GitHub
                        </a>

                        <a
                            className="Home__link"
                            href="https://paypal.me/robbybobby123"
                        >
                            Donate
                        </a>
                    </article>

                    <p className="Home__tagline">
                        create-react-app, but better.
                    </p>

                    <article>
                        <p>
                            Looking to create a React app? Hit the ground running with redux, sass, source mapping, webpack, node, express, and jest unit testing. This template also comes with a page loader built in, wildcard route, responsive navigation UI and an easily changeable color scheme.
                        </p>
                    </article>
                    
                    <article className="Home__donate">
                        <p>
                            Creating software such as this boilerplate takes a lot of time, effort, attention to detail, and the occasional excellent anger management. If you found this boilerplate helpful, please consider <a href="https://paypal.me/robbybobby123">donating</a>.
                        </p>
                    </article>
                </section>
            </div>
        );
    };
};


/* Connect to store */
const mapDispatchToProps = (dispatch) => ({
    page_ID__Set: (id) => {
        dispatch(page_ID__Set(id));
    }
});


export default connect(undefined, mapDispatchToProps)(Home);