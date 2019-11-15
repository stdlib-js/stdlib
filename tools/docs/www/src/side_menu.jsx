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
import { Link } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import isObject from '@stdlib/assert/is-object';
import contains from '@stdlib/assert/contains';
import objectKeys from '@stdlib/utils/keys';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import packageTree from './../public/assets/v0.0.87/package_tree.json';
import stdlibLogo from './stdlib_logo.svg';


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
						<Link
							className="side-menu-link"
							to={`/${this.state.version}/docs/api/${pkgPath}`}
						>
							<ListItem
								button
								key={`${pkgPath}-item`}
								className="side-menu-list-item"
								onClick={() => this.handlePackageClick( pkg )}
								style={{
									paddingLeft: 16 + 10 * level,
									color: this.state.activePkg === pkg ? '#5ca2c8' : null
								}}
							>
									{pkg}
							</ListItem>
						</Link>
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
					<Link
						to={`/${this.state.version}/docs/api/${pkgPath}`}
						className="side-menu-link"
					>
						<ListItem
							button
							onClick={() => this.handleClick( pkgPath )}
							className="side-menu-list-item"
							style={{
								paddingLeft: 16 + 10 * level,
								color: this.state.activePkg === pkg ? '#5ca2c8' : null
							}}
						>
							<b>{pkg}</b>
							<span style={{ position: 'absolute', 'top': 5, 'right': 10 }}>
								{this.state[ pkgPath ] ?
									<ExpandLess /> :
									<ExpandMore />
								}
							</span>
						</ListItem>
					</Link>
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
					id="menu-icon"
				>
					<MenuIcon />
				</IconButton>
				<div>
					<Drawer
						className="sidebar-drawer"
						variant="persistent"
						anchor="left"
						open={this.props.open}
						classes={{
							paper: 'sidebar-drawer'
						}}
					>
						<div className="drawer-head" >
							<img src={stdlibLogo} alt="Stdlib Logo" />
							<IconButton onClick={this.handleDrawerClose} >
								<ChevronRightIcon />
							</IconButton>
						</div>
						<FormControl style={{ marginLeft: '25px', marginRight: '25px' }}>
							<InputLabel shrink >
								Version
							</InputLabel>
							<Select
								value={this.state.version}
								onChange={this.selectVersion}
							>
								<MenuItem value={'v0.0.87'}>v0.0.87</MenuItem>
							</Select>
						</FormControl>
						<TextField
							label="Filter"
							margin="normal"
							style={{ marginLeft: '25px', marginRight: '25px' }}
							onChange={this.handleFilterChange}
							placeholder="Type here to filter menu..."
						/>
						<div style={{ overflowY: 'auto', height: 'calc(100vh - 180px)' }}>
							<List>
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

export default MenuBar;
