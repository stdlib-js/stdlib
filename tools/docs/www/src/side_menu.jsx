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
import { withRouter } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import isObject from '@stdlib/assert/is-object';
import contains from '@stdlib/assert/contains';
import objectKeys from '@stdlib/utils/keys';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import packageTree from './../public/assets/v0.0.87/package_tree.json';
import Logo from './logo.jsx';


// MAIN //

class MenuBar extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			activePkg: null,
			version: 'v0.0.87',
			filter: null,
			found: {}
		};
	}

	handleDrawerOpen = () => {
		this.props.onDrawerChange( true );
	}

	handleDrawerClose = () => {
		this.props.onDrawerChange( false );
	}

	handleClick( path ) {
		this.setState( prevState => {
			const active = !prevState[ path ];
			return {
				[ path ]: active,
				activePkg: active ? path.substring( path.lastIndexOf( '/' )+1 ) : null
			}
		});
	}

	handlePackageClick( pkg ) {
		this.setState({
			activePkg: pkg
		});
	}

	renderItems( namespace, path, level ) {
		const keys = objectKeys( namespace );
		return keys.map( ( pkg ) => {
			const pkgPath =`${path}/${pkg}`;
			if ( pkg === '__namespace__' ) {
				return null;
			}
			if ( !isObject( namespace[ pkg ] ) ) {
				// Case: Individual package
				if (
					this.state.filter && !contains( pkgPath, this.state.filter )
				) {
					return null;
				}
				return (
					<div key={pkgPath}>
						<ListItem
							button
							key={`${pkgPath}-item`}
							className="side-menu-list-item"
							onClick={() => {
								this.handlePackageClick( pkg );
								this.props.history.push( `/${this.state.version}/docs/api/${pkgPath}` );
								window.scrollTo( 0, 0 );
								fetch( `/${this.state.version}/docs/api/${pkgPath}?fragment=true` )
									.then(res => res.text() )
									.then( res => {
										this.props.onReadmeFragment( res );
									})
									.catch( err => console.error( err ) )
							}}
							style={{
								paddingLeft: 16 + 10 * level,
								color: this.state.activePkg === pkg ? '#5ca2c8' : null
							}}
						>
								{pkg}
						</ListItem>
					</div>
				)
			}
			// Case: Namespace package
			if (
				this.state.filter &&
				!this.state.found[ pkgPath ]
			) {
				return null;
			}
			return (
				<div key={pkgPath} >
					<ListItem
						button
						onClick={() => {
							this.handleClick( pkgPath );
							this.props.history.push( `/${this.state.version}/docs/api/${pkgPath}` );
							window.scrollTo( 0, 0 );
							fetch( `/${this.state.version}/docs/api/${pkgPath}?fragment=true` )
								.then(res => res.text() )
								.then( res => {
									this.props.onReadmeFragment( res );
								})
								.catch( err => console.error( err ) )
						}}
						className="side-menu-list-item-namespace"
						style={{
							paddingLeft: 16 + 10 * level,
							color: this.state.activePkg === pkg ? '#5ca2c8' : null
						}}
					>
						{pkg}
						<span className="side-menu-list-item-namespace-icon" >
							{this.state[ pkgPath ] ?
								<RemoveIcon style={{ fontSize: 14 }} /> :
								<AddIcon style={{ fontSize: 14 }} />
							}
						</span>
					</ListItem>
					<Collapse
						in={this.state[ pkgPath ]}
						timeout="auto"
						unmountOnExit
					>
						{this.renderItems( namespace[ pkg ], pkgPath, level+1 )}
					</Collapse>
				</div>
			)
		} )
	}

	selectVersion = ( event ) => {
		this.setState({
			version: event.target.value
		});
	}

	handleFilterChange = ( event ) => {
		const newFilter = event.target.value;
		this.setState({
			filter: newFilter
		}, () => {
			if ( !this.debounced ) {
				this.debounced = debounce( 300, this.applyFilterChange );
			}
			this.debounced();
		});
	}

	applyFilterChange = () => {
		if ( this.state.filter ) {
			const found = {};
			this.checkFilter( found, packageTree, '@stdlib', this.state.filter );
			const keys = objectKeys( found );
			const newState = {};
			for ( let i = 0; i < keys.length; i++ ) {
				newState[ keys[ i ] ] = true;
			}
			this.setState({
				...newState,
				found
			});
		} else {
			const keys = objectKeys( this.state.found );
			const newState = {};
			for ( let i = 0; i < keys.length; i++ ) {
				newState[ keys[ i ] ] = false;
			}
			this.setState({
				...newState,
				found: {}
			});
		}
	}

	checkFilter( state, docs, path, filter ) {
		const keys = objectKeys( docs );
		let matched = false;
		for ( let i = 0; i < keys.length; i++ ) {
			const pkg = keys[ i ];
			if ( !isObject( docs[ pkg ] ) ) {
				if ( contains( pkg, filter ) ) {
					matched = true;
				}
			} else if ( contains( pkg, filter ) ) {
				matched = true;
				state[ path+'/'+pkg ] = true;
			} else {
				const foundInChild = this.checkFilter( state, docs[ pkg ], path+'/'+pkg, filter );
				if ( foundInChild ) {
					matched = true;
				}
			}
		}
		if ( matched  ) {
			state[ path ] = true;
		}
		return matched;
	}

	render() {
		return (
			<Fragment>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={this.handleDrawerOpen}
					edge="start"
					id="menu-icon-button"
				>
					<MenuIcon id="menu-icon" />
				</IconButton>
				<div>
					<Drawer
						className="side-menu-drawer"
						variant="persistent"
						anchor="left"
						open={this.props.open}
						classes={{
							paper: 'side-menu-drawer'
						}}
					>
						<div className="side-menu-head" >
							<Logo />
							<IconButton aria-label="close drawer" onClick={this.handleDrawerClose} edge="start" >
								<ChevronRightIcon id="menu-close-icon" />
							</IconButton>
						</div>
						<select className="side-menu-version-select" id="lang" onChange={this.selectVersion} value={this.state.version}>
							<option value="v0.0.87">v0.0.87</option>
						</select>
						<input
							className="side-menu-filter-input"
							type="text"
							onChange={this.handleFilterChange}
							placeholder="Type here to filter menu..."
						/>
						<div className="side-menu-list-wrapper" >
							<List disablePadding >
								{this.renderItems( packageTree, '@stdlib', 0 )}
							</List>
						</div>
					</Drawer>
				</div>
			</Fragment>
		)
	}
}


// EXPORTS //

export default withRouter( MenuBar );
