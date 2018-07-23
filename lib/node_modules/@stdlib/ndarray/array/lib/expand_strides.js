/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Expands a strides array to accommodate an expanded array shape (i.e., an array shape with prepended singleton dimensions).
*
* @private
* @param {NonNegativeInteger} ndims - number of dimensions
* @param {Array} shape - expanded array shape
* @param {Array} strides - strides array
* @param {string} order - memory layout order
* @returns {Array} output strides array
*
* @example
* var out = expandStrides( 4, [ 1, 1, 2, 2 ], [ 1, 2 ], 'column-major' );
* // returns [ 1, 1, 1, 2 ]
*
* @example
* var out = expandStrides( 4, [ 1, 1, 2, 2 ], [ 2, 1 ], 'row-major' );
* // returns [ 4, 4, 2, 1 ]
*/
function expandStrides( ndims, shape, strides, order ) {
	var out;
	var N;
	var s;
	var i;
	var j;

	N = strides.length;
	j = ndims - N;
	out = [];
	if ( order === 'row-major' ) {
		s = abs( strides[ 0 ] ) * shape[ j ]; // at `j` is the size of the first non-prepended dimension
		for ( i = 0; i < j; i++ ) {
			out.push( s );
		}
		for ( i = 0; i < N; i++ ) {
			out.push( strides[ i ] );
		}
	} else { // column-major
		for ( i = 0; i < j; i++ ) {
			out.push( 1 );
		}
		for ( i = 0; i < N; i++ ) {
			out.push( strides[ i ] );
		}
	}
	return out;
}


// EXPORTS //

module.exports = expandStrides;
