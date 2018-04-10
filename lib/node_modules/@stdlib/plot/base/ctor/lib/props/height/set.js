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
var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;


// VARIABLES //

var debug = logger( 'plot:base:set:height' );


// MAIN //

/**
* Sets the height.
*
* @private
* @param {PositiveNumber} height - height
* @throws {TypeError} must be a positive number
*/
function set( height ) {
	/* eslint-disable no-invalid-this */
	if ( !isPositiveNumber( height ) ) {
		throw new TypeError( 'invalid value. `height` must be a positive number. Value: `' + height + '.`' );
	}
	if ( height !== this._height ) {
		debug( 'Current value: %d.', this._height );

		this._height = height;
		debug( 'New Value: %d.', this._height );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
