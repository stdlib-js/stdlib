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
* Returns a filled two-dimensional nested array according to a provided callback function.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Callback} clbk - callback function
* @param {*} [thisArg] - callback function execution context
* @returns {Array} filled array
*
* @example
* var constantFunction = require( '@stdlib/utils/constant-function' );
*
* var out = filled2dBy( [ 1, 3 ], constantFunction( 'beep' ) );
* // returns [ [ 'beep', 'beep', 'beep' ] ]
*/
function filled2dBy( shape, clbk, thisArg ) {
	var arr;
	var a0;
	var S0;
	var S1;
	var i;
	var j;

	S0 = shape[ 1 ];
	S1 = shape[ 0 ];

	// Manually push elements in order to ensure "fast" elements...
	arr = [];
	for ( i = 0; i < S1; i++ ) {
		a0 = [];
		for ( j = 0; j < S0; j++ ) {
			a0.push( clbk.call( thisArg, [ i, j ] ) );
		}
		arr.push( a0 );
	}
	return arr;
}


// EXPORTS //

module.exports = filled2dBy;
