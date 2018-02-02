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
var isArrayLike = require( '@stdlib/assert/is-array-like' );


// VARIABLES //

var debug = logger( 'rug:set:data' );


// MAIN //

/**
* Sets the data values.
*
* ## Notes
*
* -   We always fire a `change` event when set, even if the provided reference is the same, to allow signaling that data values have changed (e.g., a data array has mutated).
*
* @private
* @param {ArrayLike} data - data values
* @throws {TypeError} must be array-like
*/
function set( data ) {
	/* eslint-disable no-invalid-this */
	if ( !isArrayLike( data ) ) {
		throw new TypeError( 'invalid value. `data` must be array-like. Value: `' + data + '.`' );
	}
	debug( 'Current value: %s.', JSON.stringify( this._data ) );

	this._data = data;
	debug( 'New Value: %s.', JSON.stringify( this._data ) );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
