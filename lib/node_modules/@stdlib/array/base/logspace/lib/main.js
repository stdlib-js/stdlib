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

// MODULES //

var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Generates a logarithmically spaced numeric array.
*
* @param {number} a - exponent of start value
* @param {number} b - exponent of end value
* @param {NonNegativeInteger} len - length of output array
* @returns {Array} logarithmically spaced numeric array
*
* @example
* var arr = logspace( 0, 2, 6 );
* // returns [ 1, ~2.5, ~6.31, ~15.85, ~39.81, 100 ]
*/
function logspace( a, b, len ) {
	var arr;
	var N;
	var d;
	var i;

	if ( len === 0 ) {
		return [];
	}
	// Calculate the increment:
	N = len - 1;
	d = ( b-a ) / N;

	// Build the output array...
	arr = [ pow( 10, a ) ];
	for ( i = 1; i < N; i++ ) {
		arr.push( pow( 10, a+(d*i) ) );
	}
	arr.push( pow( 10, b ) );
	return arr;
}


// EXPORTS //

module.exports = logspace;
