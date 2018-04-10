/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var logger = require( 'debug' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// VARIABLES //

var debug = logger( 'plot:set:y-label' );


// MAIN //

/**
* Sets the y-axis label.
*
* @private
* @param {string} label - axis label
* @throws {TypeError} must be a string primitive
*/
function set( label ) {
	/* eslint-disable no-invalid-this */
	if ( !isString( label ) ) {
		throw new TypeError( 'invalid value. `yLabel` must be a string. Value: `' + label + '.`' );
	}
	if ( label !== this._yLabel ) {
		debug( 'Current value: %s.', this._yLabel );

		this._yLabel = label;
		debug( 'New value: %s.', this._yLabel );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
