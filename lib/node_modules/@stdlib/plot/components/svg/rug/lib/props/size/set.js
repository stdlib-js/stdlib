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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// VARIABLES //

var debug = logger( 'rug:set:size' );


// MAIN //

/**
* Sets the tick (tassel) size.
*
* @private
* @param {NonNegativeInteger} size - size
* @throws {TypeError} must be a nonnegative integer
*/
function set( size ) {
	/* eslint-disable no-invalid-this */
	if ( !isNonNegativeInteger( size ) ) {
		throw new TypeError( 'invalid value. `size` must be a nonnegative integer. Value: `' + size + '.`' );
	}
	if ( size !== this._size ) {
		debug( 'Current value: %d.', this._size );

		this._size = size;
		debug( 'New Value: %d.', this._size );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
