/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Returns a vector of `N` random real numbers drawn from a uniform (0,1) distribution.
*
* ## Notes
*
* -   `seed` should have four indexed elements, each of which must be on the interval `[0, 4095]`, with `seed[3]` being odd. On exit, `seed` is updated.
* -   At most `128` random numbers are generated per invocation. If `N > 128`, only the first `128` indexed elements of `x` are updated.
* -   If `N <= 0`, the function returns `x` unchanged and does not update `seed`.
*
* @param {Int32Array} seed - seed array of four integers
* @param {NonNegativeInteger} N - number of random numbers to generate
* @param {Float64Array} x - output array
* @returns {Float64Array} output array
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var seed = new Int32Array( [ 0, 1, 2, 3 ] );
* var x = new Float64Array( 3 );
*
* dlaruv( seed, 3, x );
* // x => <Float64Array>[ ~0.1319, ~0.2338, ~0.3216 ]
*/
function dlaruv( seed, N, x ) {
	return ndarray( N, seed, 1, 0, x, 1, 0 );
}


// EXPORTS //

module.exports = dlaruv;
