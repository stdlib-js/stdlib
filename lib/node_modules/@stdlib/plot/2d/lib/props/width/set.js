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
var format = require( '@stdlib/string/format' );


// VARIABLES //

var debug = logger( 'plot:set:width' );


// MAIN //

/**
* Sets the width.
*
* @private
* @param {PositiveNumber} width - width
* @throws {TypeError} must be a positive number
*/
function set( width ) {
	/* eslint-disable no-invalid-this */
	if ( !isPositiveNumber( width ) ) {
		throw new TypeError( format( 'invalid assignment. `%s` must be a positive number. Value: `%s`.', 'width', width ) );
	}
	if ( width !== this._width ) {
		debug( 'Current value: %d.', this._width );

		this._width = width;
		debug( 'New value: %d.', this._width );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
