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
* Computes the median value of a sorted strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - sorted input array
* @param {integer} stride - stride length
* @returns {number} median value
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
*
* var v = mediansorted( x.length, x, 1 );
* // returns 2.0
*/
function mediansorted( N, x, stride ) {
	var offset;
	var n;
	var m;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( stride < 0 ) {
		offset = (1-N) * stride;
	} else {
		offset = 0;
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

module.exports = mediansorted;
