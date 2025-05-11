/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Generates a linearly spaced two-dimensional nested numeric array.
*
* @param {number} start - first array value
* @param {number} stop - last array value
* @param {NonNegativeIntegerArray} shape - array shape
* @param {boolean} colexicographic - specifies whether generated array values should be stored in colexicographic order
* @returns {Array} linearly spaced two-dimensional nested numeric array
*
* @example
* var x = linspace2d( 0, 100, [ 2, 3 ], false );
* // returns [ [ 0, 20, 40 ], [ 60, 80, 100 ] ]
*
* x = linspace2d( 0, 100, [ 2, 3 ], true );
* // returns [ [ 0, 40, 80 ], [ 20, 60, 100 ] ]
*/
function linspace2d( start, stop, shape, colexicographic ) {
	var inc0;
	var inc1;
	var out;
	var tmp;
	var idx;
	var s0;
	var i0;
	var s1;
	var i1;
	var d;
	var n;

	s0 = shape[ 1 ];
	s1 = shape[ 0 ];

	n = s0 * s1;
	if ( n === 0 ) {
		return [];
	}
	d = ( stop - start ) / ( n - 1 );
	if ( colexicographic ) {
		inc0 = s1;                // index increment for the innermost loop
		inc1 = 1 - ( s0 * inc0 ); // index increment for the outermost loop
	} else {
		inc0 = 1; // index increment for the innermost loop
		inc1 = 0; // index increment for the outermost loop
	}
	out = [];
	idx = 0;
	for ( i1 = 0; i1 < s1; i1++ ) {
		tmp = [];
		for ( i0 = 0; i0 < s0; i0++ ) {
			tmp.push( start + ( idx * d ) );
			idx += inc0;
		}
		out.push( tmp );
		idx += inc1;
	}
	return out;
}


// EXPORTS //

module.exports = linspace2d;
