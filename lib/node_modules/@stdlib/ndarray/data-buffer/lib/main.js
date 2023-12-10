/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var isCollection = require( '@stdlib/assert/is-collection' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns the underlying data buffer of a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @throws {TypeError} must provide an ndarray
* @returns {Collection} underlying data buffer
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'float64'
* });
*
* var out = data( x );
* // returns <Float64Array>
*/
function data( x ) {
	var out;

	// Note: we intentionally avoid rigorous ndarray checks to minimize performance impacts. This obviously means that non-ndarray-like objects can sneak through, but this is likely all right for the purposes of this function...
	if ( typeof x !== 'object' || x === null ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	out = x.data;
	if ( isCollection( out ) ) {
		return out;
	}
	// A data buffer is essential for operating on an ndarray object, so no fallbacks or workarounds for data buffer resolution...
	throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
}


// EXPORTS //

module.exports = data;
