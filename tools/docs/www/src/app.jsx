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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SideMenu from './side_menu.jsx';
import Readme from './readme.jsx';
import './css/app.css';
import './css/reset.css';
import './css/highlight.css';
import './css/typography.css';
import './css/misc.css';
import './css/layout.css';
import './css/normalize.css';


// VARIABLES //

const HTML_FRAGMENT_CACHE = {};


// FUNCTIONS //

function importAll( req ) {
	req.keys().forEach( key => {
		const pkg = key.replace( /.\/(v[0-9]+.[0-9]+.[0-9]+)/, '/$1/docs/api' );
		HTML_FRAGMENT_CACHE[ pkg ] = req( key );
	});
}


// MAIN //

// See: https://webpack.js.org/guides/dependency-management/#context-module-api
if ( process.env.NODE_ENV === 'production' ) {
	importAll( require.context( './../public/assets/', true, /\.html$/, 'lazy' ) );
} else {
	importAll( require.context( './../public/assets/', true, /\.html$/ ) );
}

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

	render() {
		return (
			<Router onUpdate={() => window.scrollTo( 0, 0 )} >
				<div className="App">
					<SideMenu
						onDrawerChange={this.handleSlideOutChange}
						open={this.state.slideoutIsOpen}
					/>
					<div style={{
						marginLeft: this.state.slideoutIsOpen ? 350 : 0,
						transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
					}}>
					<Switch>
						<Route
							exact
							path="/:version/docs/api/@stdlib/:pkg([^.]*)"
							render={({ match }) => {
								// Render the README for the selected package:
								return (
									<Fragment>
										<nav className="navbar">
											<Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/benchmark.html`}>Benchmarks</Link>
											<Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/test.html`}>Tests</Link>
											<a href={`https://github.com/stdlib-js/stdlib/tree/${match.params.version}/lib/node_modules/@stdlib/${match.params.pkg}`}>Source</a>
										</nav>
										<Readme key={match.url} html={HTML_FRAGMENT_CACHE[ match.url+'/index.html' ]} />
									</Fragment>
								);
							}}
						/>
						<Route
							exact
							path="/:version/docs/api/@stdlib/:pkg*/benchmark.html"
							render={({ match }) => {
								const iframe = <iframe className="readme-iframe" src={`/assets/${match.params.version}/@stdlib/${match.params.pkg}/benchmark.html`} title="Benchmarks" />;
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
								const iframe = <iframe className="readme-iframe" src={`/assets/${match.params.version}/@stdlib/${match.params.pkg}/test.html`} title="Tests" />;
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
						<Route path="/**/*">
							<iframe className="readme-iframe" src="https://stdlib.io/404.html" title="No match found" />
						</Route>
					</Switch>
					</div>
				</div>
			</Router>
		);
	}
}


// EXPORTS //

export default App;
