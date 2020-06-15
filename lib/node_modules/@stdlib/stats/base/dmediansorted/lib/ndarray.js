/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var floor = require( '@stdlib/math/base/special/floor' );


// MAIN //

/**
* Computes the median value of a sorted double-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - sorted input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} median value
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = new Float64Array( [ 2.0, -3.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var N = floor( x.length / 2 );
*
* var v = dmediansorted( N, x, 2, 1 );
* // returns 0.0
*/
function dmediansorted( N, x, stride, offset ) {
	var n;
	var m;

	if ( N <= 0 ) {
		return NaN;
	}
	n = N / 2;
	m = floor( n );
	if ( n === m ) {
		// Even number of elements...
		return ( x[ offset+(m*stride) ] + x[ offset+((m-1)*stride) ] ) / 2.0;
	}
	// Odd number of elements...
	return x[ offset+(m*stride) ];
}


// EXPORTS //

module.exports = dmediansorted;
