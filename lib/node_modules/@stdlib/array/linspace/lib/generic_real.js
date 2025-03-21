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
* Generates a linearly spaced array over a specified interval.
*
* @private
* @param {number} start - start of interval
* @param {number} stop - end of interval
* @param {NonNegativeInteger} len - length of output array
* @param {boolean} endpoint - boolean indicating whether to include `stop` in the output array
* @returns {Array} linearly spaced array
*
* @example
* var arr = linspace( 0, 100, 6, true );
* // returns [ 0, 20, 40, 60, 80, 100 ]
*
* @example
* var arr = linspace( 0, 100, 5, false );
* // returns [ 0, 20, 40, 60, 80 ]
*/
function linspace( start, stop, len, endpoint ) {
	var arr;
	var N;
	var d;
	var i;

	if ( len === 0 ) {
		return [];
	}
	// Set the first value:
	if ( len === 1 ) {
		if ( endpoint ) {
			return [ stop ];
		}
		return [ start ];
	}
	arr = [ start ];

	// Calculate the increment:
	if ( endpoint ) {
		N = len - 1;
	} else {
		N = len;
	}
	d = ( stop-start ) / N;

	// Generate linearly spaced values:
	for ( i = 1; i < N; i++ ) {
		arr.push( start + (d*i) );
	}
	// Check whether to include the `stop` value in the output array:
	if ( endpoint ) {
		arr.push( stop );
	}
	return arr;
}


// EXPORTS //

module.exports = linspace;
