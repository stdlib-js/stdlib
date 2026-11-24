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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Computes the minimum value of a sorted strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - sorted input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} minimum value
*
* @example
* var x = [ 2.0, -3.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var v = minsorted( 4, x, 2, 1 );
* // returns -3.0
*/
function minsorted( N, x, strideX, offsetX ) {
	var v1;
	var v2;
	var o;

	if ( N <= 0 ) {
		return NaN;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, o, strideX, offsetX );
	}
	if ( N === 1 || strideX === 0 ) {
		return x[ 0 ];
	}
	v1 = x[ offsetX ];
	v2 = x[ offsetX + ((N-1)*strideX) ];
	if ( isnan( v1 ) || isnan( v2 ) ) {
		return NaN;
	}
	if ( v1 === v2 ) {
		if ( isNegativeZero( v1 ) || isNegativeZero( v2 ) ) {
			return -0.0;
		}
		return v1;
	}
	if ( v1 < v2 ) {
		return v1;
	}
	return v2;
}


// EXPORTS //

module.exports = minsorted;
