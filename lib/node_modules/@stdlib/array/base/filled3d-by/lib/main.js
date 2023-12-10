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
* Returns a filled three-dimensional nested array according to a provided callback function.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Callback} clbk - callback function
* @param {*} [thisArg] - callback function execution context
* @returns {Array} filled array
*
* @example
* var constantFunction = require( '@stdlib/utils/constant-function' );
*
* var out = filled3dBy( [ 1, 1, 3 ], constantFunction( 'beep' ) );
* // returns [ [ [ 'beep', 'beep', 'beep' ] ] ]
*/
function filled3dBy( shape, clbk, thisArg ) {
	var arr;
	var a0;
	var a1;
	var S0;
	var S1;
	var S2;
	var i0;
	var i1;
	var i2;

	S0 = shape[ 2 ];
	S1 = shape[ 1 ];
	S2 = shape[ 0 ];

	// Manually push elements in order to ensure "fast" elements...
	arr = [];
	for ( i2 = 0; i2 < S2; i2++ ) {
		a1 = [];
		for ( i1 = 0; i1 < S1; i1++ ) {
			a0 = [];
			for ( i0 = 0; i0 < S0; i0++ ) {
				a0.push( clbk.call( thisArg, [ i2, i1, i0 ] ) );
			}
			a1.push( a0 );
		}
		arr.push( a1 );
	}
	return arr;
}


// EXPORTS //

module.exports = filled3dBy;
