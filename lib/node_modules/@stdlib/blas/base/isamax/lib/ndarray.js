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

var absf = require( '@stdlib/math/base/special/absf' );


// MAIN //

/**
* Finds the index of the first element having the maximum absolute value.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @returns {integer} index value
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* var idx = isamax( x.length, x, 1, 0 );
* // returns 4
*/
function isamax( N, x, strideX, offsetX ) {
	var smax;
	var idx;
	var ix;
	var v;
	var i;

	if ( N < 1 ) {
		return -1;
	}
	idx = 0;
	if ( N === 1 ) {
		return idx;
	}
	smax = absf( x[ offsetX ] );
	ix = offsetX + strideX;
	for ( i = 1; i < N; i++ ) {
		v = absf( x[ ix ] );
		if ( v > smax ) {
			idx = i;
			smax = v;
		}
		ix += strideX;
	}
	return idx;
}


// EXPORTS //

module.exports = isamax;
