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

var Float64Array = require( '@stdlib/array/float64' );


// MAIN //

/**
* Computes the sum along a matrix dimension.
*
* @param {Matrix} mat - input matrix
* @param {number} [dim=2] - matrix dimension along which to compute the sum. If `dim=1`, compute along matrix rows. If `dim=2`, compute along matrix columns.
* @returns {(Int32Array|number)} sums or 0
*/
function sum( mat, dim ) {
	var out;
	var s0;
	var s1;
	var s;
	var M;
	var N;
	var o;
	var i;
	var j;
	var k;

	if ( dim === 1 ) {
		// Compute along the rows...
		M = mat.shape[ 1 ];
		N = mat.shape[ 0 ];
		s0 = mat.strides[ 1 ];
		s1 = mat.strides[ 0 ];
	} else {
		// Compute along the columns...
		M = mat.shape[ 0 ];
		N = mat.shape[ 1 ];
		s0 = mat.strides[ 0 ];
		s1 = mat.strides[ 1 ];
	}
	if ( M === 0 || N === 0 ) {
		return 0;
	}
	out = new Float64Array( M );
	o = mat.offset;
	for ( i = 0; i < M; i++ ) {
		k = o + ( i*s0 );
		s = 0;
		for ( j = 0; j < N; j++ ) {
			s += mat.data[ k + ( j*s1 ) ];
		}
		out[ i ] = s;
	}
	return out;
}


// EXPORTS //

module.exports = sum;
