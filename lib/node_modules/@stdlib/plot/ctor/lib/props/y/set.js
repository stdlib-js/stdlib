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

var debug = logger( 'plot:set:y' );


// MAIN //

/**
* Sets the plot `y` values.
*
* @private
* @param {Array} y - y values
* @throws {TypeError} must be an array
* @returns {void}
*/
function set( y ) {
	/* eslint-disable no-invalid-this */
	if ( !isArray( y ) ) {
		throw new TypeError( 'invalid value. `y` must be an array. Value: `' + y + '.`' );
	}
	debug( 'Current value: %s.', JSON.stringify( this._yData ) );

	this._yData = y.slice();
	debug( 'New Value: %s.', JSON.stringify( this._yData ) );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
