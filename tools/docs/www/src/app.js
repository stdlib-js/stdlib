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

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SideMenu from './side_menu.js';
import Readme from './readme.js';
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
	importAll( require.context( './assets/', true, /\.html$/, 'lazy' ) );
} else {
	importAll( require.context( './assets/', true, /\.html$/ ) );
}

function App() {
	return (
		<Router onUpdate={() => window.scrollTo( 0, 0 )} >
			<div className="App">
				<header className="App-header">
					<SideMenu />
					<Route
						exact
						path="/:version/docs/api/@stdlib/:pkg([a-z0-9/-]*)"
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
							const iframe = <iframe className="readme-iframe" src={`https://stdlib.io/develop/docs/api/@stdlib/${match.params.pkg}/benchmark.html`} title="Benchmarks" />;
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
							const iframe = <iframe className="readme-iframe" src={`https://stdlib.io/develop/docs/api/@stdlib/${match.params.pkg}/test.html`} title="Tests" />;
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
				</header>
			</div>
		</Router>
	);
}


// EXPORTS //

export default App;
