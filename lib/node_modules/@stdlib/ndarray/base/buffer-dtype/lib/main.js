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

var isBuffer = require( '@stdlib/assert/is-buffer' );
var isArray = require( '@stdlib/assert/is-array' );
var constructorName = require( '@stdlib/utils/constructor-name' );
var ctor2dtype = require( './ctor2dtype.js' );
var CTORS = require( './ctors.js' );
var DTYPES = require( './dtypes.js' );


// VARIABLES //

var NTYPES = DTYPES.length;


// MAIN //

/**
* Returns the data type of an ndarray data buffer.
*
* @param {*} value - input value
* @returns {(string|null)} data type
*
* @example
* var dt = dtype( [ 1, 2, 3 ] );
* // returns 'generic'
*
* var dt = dtype( 'beep' );
* // returns null
*/
function dtype( value ) {
	var i;
	if ( isArray( value ) ) {
		return 'generic';
	}
	if ( isBuffer( value ) ) {
		return 'binary';
	}
	for ( i = 0; i < NTYPES; i++ ) {
		if ( value instanceof CTORS[ i ] ) {
			return DTYPES[ i ];
		}
	}
	// If the above failed, fall back to a more robust (and significantly slower) means for resolving underlying data types:
	return ctor2dtype[ constructorName( value ) ] || null;
}


// EXPORTS //

module.exports = dtype;
