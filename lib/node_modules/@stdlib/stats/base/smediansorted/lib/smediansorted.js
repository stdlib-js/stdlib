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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var floor = require( '@stdlib/math/base/special/floor' );


// MAIN //

/**
* Computes the median value of a sorted single-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - sorted input array
* @param {integer} stride - stride length
* @returns {number} median value
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* var v = smediansorted( x.length, x, 1 );
* // returns 2.0
*/
function smediansorted( N, x, stride ) {
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
		return float64ToFloat32( float64ToFloat32( x[ offset+(m*stride) ] + x[ offset+((m-1)*stride) ] ) / 2.0 ); // eslint-disable-line max-len
	}
	// Odd number of elements...
	return x[ offset+(m*stride) ];
}


// EXPORTS //

module.exports = smediansorted;
