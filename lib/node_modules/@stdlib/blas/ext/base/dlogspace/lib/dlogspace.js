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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Fills a double-precision floating-point strided array with logarithmically spaced values over a specified interval.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} base - base of the logarithmic scale
* @param {number} start - exponent of the starting value
* @param {number} stop - exponent of the final value
* @param {boolean} endpoint - boolean indicating whether to include the `base^stop` value when writing values to the input array
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @returns {Float64Array} input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlogspace( x.length, 10.0, 0.0, 5.0, true, x, 1 );
* // x => <Float64Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlogspace( x.length, 10.0, 0.0, 5.0, false, x, 1 );
* // x => <Float64Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0 ]
*/
function dlogspace( N, base, start, stop, endpoint, x, strideX ) {
	return ndarray( N, base, start, stop, endpoint, x, strideX, stride2offset( N, strideX ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dlogspace;
