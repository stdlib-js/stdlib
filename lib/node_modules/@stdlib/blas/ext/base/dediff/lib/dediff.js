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

/* eslint-disable max-params, max-len */

'use strict';

// MODULES //

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Calculates the differences between consecutive elements of a double-precision floating-point strided array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} N1 - number of indexed elements to prepend
* @param {Float64Array} prepend - prepend array
* @param {integer} strideP - stride length for `prepend`
* @param {NonNegativeInteger} N2 - number of indexed elements to append
* @param {Float64Array} append - append array
* @param {integer} strideA - stride length for `append`
* @param {Float64Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 4.0, 7.0, 11.0, 16.0 ] );
* var p = new Float64Array( [ 1.0 ] );
* var a = new Float64Array( [ 22.0 ] );
* var out = new Float64Array( 6 );
*
* dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, 1 );
* // out => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 22.0 ]
*/
function dediff( N, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut ) {
	var ox = stride2offset( N, strideX );
	var op = stride2offset( N1, strideP );
	var oa = stride2offset( N2, strideA );
	var oo = stride2offset( N + N1 + N2 - 1, strideOut );
	ndarray( N, x, strideX, ox, N1, prepend, strideP, op, N2, append, strideA, oa, out, strideOut, oo );
	return out;
}


// EXPORTS //

module.exports = dediff;
