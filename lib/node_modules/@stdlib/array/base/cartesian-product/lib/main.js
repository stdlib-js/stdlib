/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

// MAIN //

/**
* Returns the Cartesian product.
*
* @param {ArrayLikeObject} x1 - first input array
* @param {ArrayLikeObject} x2 - second input array
* @returns {Array<Array>} list of ordered tuples comprising the Cartesian product
*
* @example
* var x1 = [ 1, 2, 3 ];
* var x2 = [ 4, 5 ];
*
* var out = cartesianProduct( x1, x2 );
* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
*/
function cartesianProduct( x1, x2 ) {
	var out;
	var M;
	var N;
	var v;
	var i;
	var j;

	M = x1.length;
	N = x2.length;
	out = [];
	for ( i = 0; i < M; i++ ) {
		v = x1[ i ];
		for ( j = 0; j < N; j++ ) {
			out.push( [ v, x2[ j ] ] );
		}
	}
	return out;
}


// EXPORTS //

module.exports = cartesianProduct;
