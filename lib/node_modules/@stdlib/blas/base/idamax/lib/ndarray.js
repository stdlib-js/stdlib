/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Finds the index of the first element having the maximum absolute value.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @returns {integer} index value
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* var idx = idamax( x.length, x, 1, 0 );
* // returns 4
*/
function idamax( N, x, strideX, offsetX ) {
	var dmax;
	var idx;
	var ix;
	var v;
	var i;

	if ( N < 1 || strideX <= 0 ) {
		return -1;
	}
	idx = 0;
	if ( N === 1 ) {
		return idx;
	}
	dmax = abs( x[ offsetX ] );
	ix = offsetX + strideX;
	for ( i = 1; i < N; i++ ) {
		v = abs( x[ ix ] );
		if ( v > dmax ) {
			idx = i;
			dmax = v;
		}
		ix += strideX;
	}
	return idx;
}


// EXPORTS //

module.exports = idamax;
