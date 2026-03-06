/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Broadcasts array shapes to a single shape.
*
* ## Notes
*
* -   Two respective dimensions in two shape arrays are compatible if
*
*     1.  the dimensions are equal.
*     2.  one dimension is `1`.
*
* -   The function returns `null` if provided incompatible shapes (i.e., shapes which cannot be broadcast with one another).
*
* @param {Array<NonNegativeIntegerArray>} shapes - array of shape arrays
* @returns {(NonNegativeIntegerArray|null)} broadcast shape (or `null`)
*
* @example
* var shapes = [
*     [ 8, 1, 6, 1 ],
*     [ 7, 1, 5 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 8, 7, 6, 5 ]
*
* @example
* var shapes = [
*     [ 5, 4 ],
*     [ 1 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 5, 4 ]
*
* @example
* var shapes = [
*     [ 5, 4 ],
*     [ 4 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 5, 4 ]
*
* @example
* var shapes = [
*     [ 15, 3, 5 ],
*     [ 15, 1, 5 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 15, 3, 5 ]
*
* @example
* var shapes = [
*     [ 15, 3, 5 ],
*     [ 3, 5 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 15, 3, 5 ]
*
* @example
* var shapes = [
*     [ 15, 3, 5 ],
*     [ 3, 1 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 15, 3, 5 ]
*
* @example
* var shapes = [
*     [ 8, 1, 1, 6, 1 ],
*     [ 1, 7, 1, 5 ],
*     [ 8, 4, 1, 6, 5 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 8, 4, 7, 6, 5 ]
*
* @example
* var shapes = [
*     [ 8, 1, 1, 6, 1 ],
*     [ 0 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 8, 1, 1, 6, 0 ]
*
* @example
* var shapes = [
*     [ 8, 1, 1, 6, 1 ],
*     [ 8, 0, 1, 6, 1 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 8, 0, 1, 6, 1 ]
*
* @example
* var shapes = [
*     [ 8, 8, 1, 6, 1 ],
*     [ 8, 0, 1, 6, 1 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns null
*
* @example
* var shapes = [
*     [ 8, 0, 1, 6, 1 ],
*     [ 8, 8, 1, 6, 1 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns null
*
* @example
* var shapes = [
*     []
* ];
*
* var out = broadcastShapes( shapes );
* // returns []
*
* @example
* var shapes = [
*     [],
*     []
* ];
*
* var out = broadcastShapes( shapes );
* // returns []
*
* @example
* var shapes = [];
*
* var out = broadcastShapes( shapes );
* // returns []
*
* @example
* var shapes = [
*     [ 3, 2, 1 ],
*     []
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 3, 2, 1 ]
*
* @example
* var shapes = [
*     [],
*     [ 3, 2, 1 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 3, 2, 1 ]
*/
function broadcastShapes( shapes ) {
	var ndims;
	var out;
	var dim;
	var sh;
	var n1;
	var n2;
	var d;
	var M;
	var N;
	var i;
	var j;

	M = shapes.length;
	out = [];
	if ( M === 0 ) {
		return out;
	}
	sh = shapes[ 0 ];
	N = sh.length;

	// If provided a single input shape array, then the broadcast shape is input shape...
	if ( M === 1 ) {
		// Need to manually copy to output shape, as shapes could be array-like objects...
		for ( i = 0; i < N; i++ ) {
			out.push( sh[ i ] );
		}
		return out;
	}
	// Determine the maximum dimensionality...
	ndims = [ N ];
	for ( i = 1; i < M; i++ ) {
		ndims.push( shapes[ i ].length );
		if ( ndims[ i ] > N ) {
			N = ndims[ i ];
		}
	}
	// Initialize the output array...
	for ( i = 0; i < N; i++ ) {
		out.push( 0 );
	}
	// Compute the broadcast shape...
	i = N - 1;
	while ( i >= 0 ) {
		n1 = ndims[ 0 ] - N + i;
		if ( n1 >= 0 ) {
			dim = sh[ n1 ];
		} else {
			dim = 1;
		}
		for ( j = 1; j < M; j++ ) {
			n2 = ndims[ j ] - N + i;
			if ( n2 >= 0 ) {
				d = shapes[ j ][ n2 ];
			} else {
				d = 1;
			}
			if ( dim === 1 ) {
				dim = d;
				continue;
			}
			if ( d === 1 || dim === d ) {
				// When either `d` is `1` or `d` equals the current output shape dimension, the current output shape dimension remains the same...
				continue;
			}
			// The current shape cannot be broadcast against one of the other shapes...
			return null;
		}
		out[ i ] = dim;
		i -= 1;
	}
	return out;
}


// EXPORTS //

module.exports = broadcastShapes;
