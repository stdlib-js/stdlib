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
var isArray = require( '@stdlib/assert/is-array' );


// VARIABLES //

var debug = logger( 'plot:set:x' );


// MAIN //

/**
* Sets the plot `x` values.
*
* @private
* @param {Array} x - x values
* @throws {TypeError} must be an array
* @returns {void}
*/
function set( x ) {
	/* eslint-disable no-invalid-this */
	if ( !isArray( x ) ) {
		throw new TypeError( 'invalid value. `x` must be an array. Value: `' + x + '.`' );
	}
	debug( 'Current value: %s.', JSON.stringify( this._xData ) );

	this._xData = x.slice();
	debug( 'New Value: %s.', JSON.stringify( this._xData ) );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
