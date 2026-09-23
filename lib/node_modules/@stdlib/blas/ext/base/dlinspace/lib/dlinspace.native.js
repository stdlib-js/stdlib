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

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Fills a double-precision floating-point strided array with linearly spaced values over a specified interval.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} start - start of interval
* @param {number} stop - end of interval
* @param {boolean} endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @returns {Float64Array} input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlinspace( x.length, 0.0, 100.0, true, x, 1 );
* // x => <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlinspace( x.length, 0.0, 100.0, false, x, 1 );
* // x => <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0 ]
*/
function dlinspace( N, start, stop, endpoint, x, strideX ) {
	addon( N, start, stop, endpoint, x, strideX );
	return x;
}


// EXPORTS //

module.exports = dlinspace;
