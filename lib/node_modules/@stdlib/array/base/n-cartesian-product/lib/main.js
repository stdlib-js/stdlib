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
* Returns the n-fold Cartesian product.
*
* ## Notes
*
* -   The main insight of this implementation is that the n-fold Cartesian product can be presented as an n-dimensional array stored in row-major order. As such, we can
*
*     -   Compute the total number of tuples, which is simply the product of the size of each provided array (set). For n-dimensional arrays, this is the equivalent of computing the product of array dimensions to determine the total number of elements.
*     -   Initialize an array for storing indices for indexing into each provided array. For n-dimensional arrays, the index array is equivalent to an array of subscripts for indexing into each dimension.
*     -   For the outermost loop, treat the loop index as a linear index into an n-dimensional array and resolve the corresponding subscripts.
*     -   Continue iterating until all tuples have been generated.
*
* @param {ArrayLikeObject} x1 - first input array
* @param {ArrayLikeObject} x2 - second input array
* @param {ArrayLikeObject} [...args] - additional input arrays
* @returns {Array<Array>} list of ordered tuples comprising the n-fold Cartesian product
*
* @example
* var x1 = [ 1, 2, 3 ];
* var x2 = [ 4, 5 ];
*
* var out = nCartesianProduct( x1, x2 );
* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
*/
function nCartesianProduct( x1, x2 ) {
	var nargs;
	var dims;
	var arr;
	var out;
	var tmp;
	var arg;
	var idx;
	var N;
	var s;
	var i;
	var j;
	var k;

	nargs = arguments.length;

	// Initialize the list of arrays:
	arr = [ x1, x2 ];

	// Initialize the list of array dimensions (equivalent to ndarray shape):
	dims = [ x1.length, x2.length ];

	// Initialize a list of indices for indexing into each array (equivalent to ndarray subscripts):
	idx = [ 0, 0 ];

	// Compute the total number of ordered tuples:
	N = dims[ 0 ] * dims[ 1 ];

	// Update loop variables for any additional arrays...
	for ( i = 2; i < nargs; i++ ) {
		arg = arguments[ i ];
		arr.push( arg );
		dims.push( arg.length );
		idx.push( 0 );
		N *= dims[ i ];
	}
	// Compute the n-fold Cartesian product...
	out = [];
	for ( i = 0; i < N; i++ ) {
		// Resolve a linear index to array indices (logic is equivalent to what is found in ndarray/base/ind2sub for an ndarray stored in row-major order; see https://github.com/stdlib-js/stdlib/blob/215ca5355f3404f15996fd0ced58a98e46f22be6/lib/node_modules/%40stdlib/ndarray/base/ind2sub/lib/assign.js)...
		k = i;
		for ( j = nargs-1; j >= 0; j-- ) {
			s = k % dims[ j ];
			k -= s;
			k /= dims[ j ];
			idx[ j ] = s;
		}
		// Generate the next ordered tuple...
		tmp = [];
		for ( j = 0; j < nargs; j++ ) {
			tmp.push( arr[ j ][ idx[ j ] ] );
		}
		out.push( tmp );
	}
	return out;
}


// EXPORTS //

module.exports = nCartesianProduct;
