/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Computes the number of non-`NaN` elements in a double-precision complex floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {NonNegativeInteger} number of non-`NaN` elements
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, NaN, NaN, 3.0, 4.0 ] );
*
* var v = znancount( 3, x, 1, 0 );
* // returns 2
*/
function znancount( N, x, strideX, offsetX ) {
	var count;
	var view;
	var ix;
	var sx;
	var i;

	if ( N <= 0 ) {
		return 0;
	}
	view = reinterpret( x, 0 );
	ix = offsetX * 2;
	sx = strideX * 2;
	count = 0;
	for ( i = 0; i < N; i++ ) {
		if ( !isnan( view[ ix ] ) && !isnan( view[ ix+1 ] ) ) {
			count += 1;
		}
		ix += sx;
	}
	return count;
}


// EXPORTS //

module.exports = znancount;
