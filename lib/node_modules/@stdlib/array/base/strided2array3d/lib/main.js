/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Converts a strided array to a three-dimensional nested array.
*
* ## Notes
*
* -   The function assumes that the input array is compatible with the specified array shape, dimension strides, and index offset.
*
* @param {Collection} x - input array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - dimension strides
* @param {NonNegativeInteger} offset - index of the first indexed value in the input array
* @returns {Array<Array<Array>>} three-dimensional nested array
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var arr = strided2array3d( x, [ 1, 3, 2 ], [ 6, 2, 1 ], 0 );
* // returns [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ]
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var arr = strided2array3d( x, [ 1, 3, 2 ], [ 1, 1, 3 ], 0 );
* // returns [ [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ] ]
*/
function strided2array3d( x, shape, strides, offset ) {
	var out;
	var dx0;
	var dx1;
	var dx2;
	var ix1;
	var ix0;
	var S0;
	var S1;
	var S2;
	var i0;
	var i1;
	var i2;
	var t2;
	var t1;

	S2 = shape[ 0 ];
	S1 = shape[ 1 ];
	S0 = shape[ 2 ];

	dx2 = strides[ 0 ];
	dx1 = strides[ 1 ];
	dx0 = strides[ 2 ];

	out = [];
	for ( i2 = 0; i2 < S2; i2++ ) {
		t2 = [];
		ix1 = offset + ( dx2*i2 );
		for ( i1 = 0; i1 < S1; i1++ ) {
			t1 = [];
			ix0 = ix1 + ( dx1*i1 );
			for ( i0 = 0; i0 < S0; i0++ ) {
				t1.push( x[ ix0 ] );
				ix0 += dx0;
			}
			t2.push( t1 );
		}
		out.push( t2 );
	}
	return out;
}


// EXPORTS //

module.exports = strided2array3d;
