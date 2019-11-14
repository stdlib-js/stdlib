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

import React, { Component } from 'react';
import isFunction from '@stdlib/assert/is-function';
import isString from '@stdlib/assert/is-string';


// MAIN //

/**
* Renders README.md HTML fragments asynchronously.
*/
class Readme extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			value: null
		};
	}

	componentDidMount() {
		if ( this.props.html ) {
			if ( isFunction( this.props.html.then ) ) {
				this.props.html.then( ( res ) => {
					this.setState({
						value: res
					});
				}).catch( ( err ) => {
					console.log( err )
				});
			} else if ( isString( this.props.html ) ) {
				this.setState({
					value: this.props.html
				});
			}
		}
	}

	render() {
		if ( !this.state.value ) {
			return <div className="readme">Loading...</div>;
		}
		return ( <div
			className="readme"
			dangerouslySetInnerHTML={{
				__html: this.state.value
			}}
		/> );
	}
}


// EXPORTS //

export default Readme;
