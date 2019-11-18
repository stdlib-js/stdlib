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
import { Route, Switch, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SideMenu from './side_menu.jsx';
import WelcomePage from './welcome_page.jsx';
import VERSIONS from './versions.json';
import './css/app.css';
import './css/reset.css';
import './css/highlight.css';
import './css/typography.css';
import './css/misc.css';
import './css/layout.css';
import './css/normalize.css';


// VARIABLES //

const ReadmePage = ( props ) => {
	const html = HTML_FRAGMENT_CACHE[ props.path ] || '{{ FRAGMENT }}';
	return ( <div
		id="readme-container"
		className="readme"
		suppressHydrationWarning
		dangerouslySetInnerHTML={{ __html: html }}
	/> );
};
const HTML_FRAGMENT_CACHE = {};
const JSON_CACHE = {};


// MAIN //

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			slideoutIsOpen: true,
			version: VERSIONS[ 0 ],
			packageTree: null,
			packageResources: {}
		};
	}

	componentDidMount() {
		this.fetchJSONFiles();
	}

	handleSlideOutChange = ( value ) => {
		this.setState({
			slideoutIsOpen: value
		});
	}

	replaceReadmeContainer( res ) {
		const readme = document.getElementById( 'readme-container' );
		if ( readme ) {
			readme.innerHTML = res;
		}
	}

	renderReadme = ({ match }) => {
		const resources = this.state.packageResources[ match.params.pkg ];
		const hasTests = resources && resources.test;
		const hasBenchmarks = resources && resources.benchmark;

		// Render the README for the selected package:
		return (
			<Fragment>
				<nav className="navbar">
					{ hasBenchmarks ? <Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/benchmark.html`}>Benchmarks</Link> : null}
					{ hasTests ? <Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/test.html`}>Tests</Link> : null}
					{ resources ? <a href={`https://github.com/stdlib-js/stdlib/tree/${match.params.version}/lib/node_modules/@stdlib/${match.params.pkg}`}>Source</a> : null}
				</nav>
				<ReadmePage path={match.url} />
			</Fragment>
		);
	}

	fetchJSONFiles = () => {
		const treePath = `/assets/${this.state.version}/package_tree.json`;
		if ( !JSON_CACHE[ treePath ] ) {
			fetch( treePath )
				.then( res => res.json() )
				.then( res => {
					JSON_CACHE[ treePath ] = res;
					this.setState({
						packageTree: res
					});
				})
				.catch( err => console.error( err ) );
		} else {
			this.setState({
				packageTree: JSON_CACHE[ treePath ]
			});
		}
		const resourcesPath = `/assets/${this.state.version}/package_resources.json`;
		if ( !JSON_CACHE[ resourcesPath ] ) {
			fetch( resourcesPath )
				.then( res => res.json() )
				.then( res => {
					JSON_CACHE[ resourcesPath ] = res;
					this.setState({
						packageResources: res
					});
				})
				.catch( err => console.error( err ) );
		} else {
			this.setState({
				packageResources: JSON_CACHE[ resourcesPath ]
			});
		}
	}

	fetchAndCacheFragment = ( path ) => {
		this.props.history.push( path );
		window.scrollTo( 0, 0 );
		if ( !HTML_FRAGMENT_CACHE[ path ] ) {
			fetch( `${path}?fragment=true` )
				.then(res => res.text() )
				.then( res => {
					HTML_FRAGMENT_CACHE[ path ] = res;
					this.replaceReadmeContainer( res );
				})
				.catch( err => console.error( err ) )
		} else {
			this.replaceReadmeContainer( HTML_FRAGMENT_CACHE[ path ] );
		}
	}

	selectVersion = ( event ) => {
		this.setState({
			version: event.target.value
		}, this.fetchJSONFiles );
	}

	render() {
		return (
			<div className="App">
				<SideMenu
					onDrawerChange={this.handleSlideOutChange}
					onReadmeChange={this.fetchAndCacheFragment}
					open={this.state.slideoutIsOpen}
					version={this.state.version}
					onVersionChange={this.selectVersion}
					packageTree={this.state.packageTree}
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
								const resources = this.state.packageResources[ match.params.pkg ];
								const hasTests = resources && resources.test;
								const hasBenchmarks = resources && resources.benchmark;
								let iframe;
								if ( hasBenchmarks ) {
									iframe = <iframe className="readme-iframe" src={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/benchmark.html?fragment=true`} title="Benchmarks" />;
								} else {
									iframe = <h2><code>{match.params.pkg}</code> does not have any benchmarks.</h2>;
								}
								return (
									<Fragment>
										<nav className="navbar">
											{ hasBenchmarks ? <Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/benchmark.html`}>Benchmarks</Link> : null}
											{ hasTests ? <Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/test.html`}>Tests</Link> : null}
											{ resources ? <a href={`https://github.com/stdlib-js/stdlib/tree/${match.params.version}/lib/node_modules/@stdlib/${match.params.pkg}`}>Source</a> : null}
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
								const resources = this.state.packageResources[ match.params.pkg ];
								const hasTests = resources && resources.test;
								const hasBenchmarks = resources && resources.benchmark;
								let iframe;
								if ( hasTests ) {
									iframe = <iframe className="readme-iframe" src={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/test.html?fragment=true`} title="Tests" />;
								} else {
									iframe = <h2><code>{match.params.pkg}</code> does not have any tests.</h2>;
								}
								return (
									<Fragment>
										<nav className="navbar">
											{ hasBenchmarks ? <Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/benchmark.html`}>Benchmarks</Link> : null}
											{ hasTests ? <Link to={`/${match.params.version}/docs/api/@stdlib/${match.params.pkg}/test.html`}>Tests</Link> : null}
											{ resources ? <a href={`https://github.com/stdlib-js/stdlib/tree/${match.params.version}/lib/node_modules/@stdlib/${match.params.pkg}`}>Source</a> : null}
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
						<Route exact path="/" >
							<WelcomePage />
						</Route>
					</Switch>
				</div>
			</div>
		)
	}
}


// EXPORTS //

export default withRouter( App );
