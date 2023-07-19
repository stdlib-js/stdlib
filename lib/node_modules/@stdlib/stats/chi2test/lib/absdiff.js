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
var array = require( '@stdlib/ndarray/array' );
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes an element-wise absolute difference of two matrices and stores the results in a typed array.
*
* @param {Matrix} x - first input matrix
* @param {Matrix} y - second input matrix
* @returns {Matrix} matrix containing the absolute differences
*/
function absdiff( x, y ) {
	var out;
	var i;
	var j;
	var M;
	var N;
	var v;

	M = x.shape[ 0 ];
	N = x.shape[ 1 ];
	out = array( new Float64Array( M * N ), {
		'shape': [ M, N ]
	});
	for ( i = 0; i < M; i++ ) {
		for ( j = 0; j < N; j++ ) {
			v = abs( x.get( i, j ) - y.get( i, j ) );
			out.set( i, j, v );
		}
	}
	return out;
}


// EXPORTS //

module.exports = absdiff;
