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
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Computes the median value of a sorted strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - sorted input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} median value
*
* @example
* var x = [ 2.0, -3.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var v = mediansorted( 4, x, 2, 1 );
* // returns 0.0
*/
function mediansorted( N, x, strideX, offsetX ) {
	var n;
	var m;
	var o;

	if ( N <= 0 ) {
		return NaN;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, o, strideX, offsetX );
	}
	n = N / 2;
	m = floor( n );
	if ( n === m ) {
		// Even number of elements...
		return ( x[ offsetX+(m*strideX) ] + x[ offsetX+((m-1)*strideX) ] ) / 2.0;
	}
	// Odd number of elements...
	return x[ offsetX+(m*strideX) ];
}


// EXPORTS //

module.exports = mediansorted;
