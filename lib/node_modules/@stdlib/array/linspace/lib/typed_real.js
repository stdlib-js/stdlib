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
* Generates a linearly spaced sequence over a specified interval and assigns the results to a provided output array.
*
* @private
* @param {TypedArray} out - output array
* @param {number} start - start of interval
* @param {number} stop - end of interval
* @param {NonNegativeInteger} len - length of output array
* @param {boolean} endpoint - boolean indicating whether to include `stop` in the output array
* @returns {TypedArray} linearly spaced array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var out = new Float64Array( 6 );
* var arr = linspace( out, 0, 100, out.length, true );
* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var out = new Float64Array( 5 );
* var arr = linspace( out, 0, 100, out.length, false );
* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0 ]
*/
function linspace( out, start, stop, len, endpoint ) {
	var N;
	var d;
	var i;

	if ( len === 0 ) {
		return out;
	}
	// Set the first value:
	if ( len === 1 ) {
		if ( endpoint ) {
			out[ 0 ] = stop;
		} else {
			out[ 0 ] = start;
		}
		return out;
	}
	out[ 0 ] = start;

	// Calculate the increment:
	if ( endpoint ) {
		N = len - 1;
	} else {
		N = len;
	}
	d = ( stop-start ) / N;

	// Generate linearly spaced values:
	for ( i = 1; i < N; i++ ) {
		out[ i ] = start + (d*i);
	}
	// Check whether to include the `stop` value in the output array:
	if ( endpoint ) {
		out[ N ] = stop;
	}
	return out;
}


// EXPORTS //

module.exports = linspace;
