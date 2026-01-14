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
var abs = require( '@stdlib/math/base/special/abs' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Computes the maximum absolute value of a strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} maximum absolute value
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var v = maxabs( 4, x, 2, 1 );
* // returns 4.0
*/
function maxabs( N, x, strideX, offsetX ) {
	var max;
	var ix;
	var o;
	var v;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, o, strideX, offsetX );
	}
	if ( N === 1 || strideX === 0 ) {
		return abs( x[ offsetX ] );
	}
	ix = offsetX;
	max = abs( x[ ix ] );
	for ( i = 1; i < N; i++ ) {
		ix += strideX;
		v = abs( x[ ix ] );
		if ( isnan( v ) ) {
			return v;
		}
		if ( v > max ) {
			max = v;
		}
	}
	return max;
}


// EXPORTS //

module.exports = maxabs;
