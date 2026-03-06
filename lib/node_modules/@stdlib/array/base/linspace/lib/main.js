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
* Generates a linearly spaced numeric array.
*
* @param {number} x1 - first array value
* @param {number} x2 - last array value
* @param {NonNegativeInteger} len - length of output array
* @returns {Array} linearly spaced numeric array
*
* @example
* var arr = linspace( 0, 100, 6 );
* // returns [ 0, 20, 40, 60, 80, 100 ]
*/
function linspace( x1, x2, len ) {
	var arr;
	var N;
	var d;
	var i;

	if ( len === 0 ) {
		return [];
	}
	// Calculate the increment:
	N = len - 1;
	d = ( x2-x1 ) / N;

	// Build the output array...
	arr = [ x1 ];
	for ( i = 1; i < N; i++ ) {
		arr.push( x1 + (d*i) );
	}
	arr.push( x2 );
	return arr;
}


// EXPORTS //

module.exports = linspace;
