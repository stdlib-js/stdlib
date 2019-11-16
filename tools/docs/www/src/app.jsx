/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// MODULES //

import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SideMenu from './side_menu.jsx';
import './css/app.css';
import './css/reset.css';
import './css/highlight.css';
import './css/typography.css';
import './css/misc.css';
import './css/layout.css';
import './css/normalize.css';


// VARIABLES //

const ReadmePage = () => <div id="readme-container" className="readme" >{`{{ FRAGMENT }}`}</div>;


// MAIN //

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			slideoutIsOpen: false
		};
	}

	handleSlideOutChange = ( value ) => {
		this.setState({
			slideoutIsOpen: value
		});
	}

	replaceReadmeContainer( res ) {
		const readme = document.getElementById( 'readme-container' );
		readme.innerHTML = res;
	}

	renderReadme({ match }) {
		// Render the README for the selected package:
		console.log( match );
		return (
			<Fragment>
				<nav className="navbar">
					<Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/benchmark.html`}>Benchmarks</Link>
					<Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/test.html`}>Tests</Link>
					<a href={`https://github.com/stdlib-js/stdlib/tree/${match.params.version}/lib/node_modules/@stdlib/${match.params.pkg}`}>Source</a>
				</nav>
				<ReadmePage />
			</Fragment>
		);
	}

	render() {
		return (
			<div className="App">
				<SideMenu
					onDrawerChange={this.handleSlideOutChange}
					onReadmeFragment={this.replaceReadmeContainer}
					open={this.state.slideoutIsOpen}
				/>
				<div style={{
					marginLeft: this.state.slideoutIsOpen ? 350 : 0,
					transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
				}}>
					<Switch>
						<Route
							exact
							path="/:version/docs/api/@stdlib/:pkg*/benchmark.html"
							render={({ match }) => {
								const iframe = <iframe className="readme-iframe" src={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/benchmark.html?fragment=true`} title="Benchmarks" />;
								return (
									<Fragment>
										<nav className="navbar">
											<Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/benchmark.html`}>Benchmarks</Link>
											<Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/test.html`}>Tests</Link>
											<a href={`https://github.com/stdlib-js/stdlib/tree/${match.params.version}/lib/node_modules/@stdlib/${match.params.pkg}`}>Source</a>
										</nav>
										{iframe}
									</Fragment>
								);
							}}
						/>
						<Route
							exact
							path="/:version/docs/api/@stdlib/:pkg*/test.html"
							render={({ match }) => {
								const iframe = <iframe className="readme-iframe" src={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/test.html?fragment=true`} title="Tests" />;
								return (
									<Fragment>
										<nav className="navbar">
											<Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/benchmark.html`}>Benchmarks</Link>
											<Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/test.html`}>Tests</Link>
											<a href={`https://github.com/stdlib-js/stdlib/tree/${match.params.version}/lib/node_modules/@stdlib/${match.params.pkg}`}>Source</a>
										</nav>
										{iframe}
									</Fragment>
								);
							}}
						/>
						<Route
							exact
							path="/:version/docs/api/@stdlib/:pkg*/index.html"
							render={this.renderReadme}
						/>
						<Route
							exact
							path="/:version/docs/api/@stdlib/:pkg*"
							render={this.renderReadme}
						/>
					</Switch>
				</div>
			</div>
		)
	}
}


// EXPORTS //

export default App;
