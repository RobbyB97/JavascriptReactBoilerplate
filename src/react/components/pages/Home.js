/* Packages */
import React from 'react';


/* Component */
export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            loading: false
        };
    };


    componentWillMount() {
        this.load();
    };


    load = () => {
        const $pageLoader = document.querySelector('.page-loader');

        // Disable loader
        if ($pageLoader) {
            $pageLoader.setAttribute('data-loading', true);
            this.setState({
                loading: true
            });
        };

        // Fade in React app
        setTimeout(() => {
            $pageLoader.setAttribute('data-loaded', true);
            this.setState({
                loaded: true
            });
        }, 300);
    };


    render() {
        return (
            <div id="Home" 
                data-loading={this.state.loading}
                data-loaded={this.state.loaded}
            >
                <section className="Home__header">
                    <h2>React Redux Boilerplate v1</h2>
                    <h4>By Robby Bergers</h4>
                </section>

                <section className="Home__content">
                    <article>
                        <h3>
                            This Boilerplate comes bundled with
                        </h3>
                        <hr/>
                        <ul>
                            <li>React</li>
                            <li>React Router</li>
                            <li>Redux</li>
                            <li>SASS</li>
                            <li>Webpack</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Source mapping</li>
                            <li>Jest</li>
                        </ul>
                    </article>
                    
                    <article>
                        <a 
                            className="Home__link"
                            href="https://github.com/RobbyB97/JavascriptReactBoilerplate"
                        >
                            View on GitHub
                        </a>
                    </article>

                    <article>
                        <p>
                            Creating software such as this boilerplate takes a lot of time, effort, attention to detail, and the occasional excellent anger management. If you found this boilerplate helpful, please consider <a href="https://paypal.me/robbybobby123">donating</a>.
                        </p>

                        <a
                            className="Home__link"
                            href="https://paypal.me/robbybobby123"
                        >
                            Donate
                        </a>
                    </article>
                </section>
            </div>
        );
    };
};


export default Home;