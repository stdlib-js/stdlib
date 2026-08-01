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
* Fills a double-precision complex floating-point strided array with logarithmically spaced values over a specified interval.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} base - base of the logarithmic scale
* @param {Complex128} start - exponent of the starting value
* @param {Complex128} stop - exponent of the final value
* @param {boolean} endpoint - boolean indicating whether to include the `base^stop` value when writing values to the input array
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length
* @returns {Complex128Array} input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex128( 0.0, 0.0 );
* var stp = new Complex128( 2.0, 0.0 );
*
* zlogspace( x.length, 10.0, strt, stp, true, x, 1 );
* // x => <Complex128Array>[ 1.0, 0.0, 10.0, 0.0, 100.0, 0.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex128( 0.0, 0.0 );
* var stp = new Complex128( 2.0, 0.0 );
*
* zlogspace( x.length, 10.0, strt, stp, false, x, 1 );
* // x => <Complex128Array>[ 1.0, 0.0, 10.0, 0.0 ]
*/
function zlogspace( N, base, start, stop, endpoint, x, strideX ) {
	return ndarray( N, base, start, stop, endpoint, x, strideX, stride2offset( N, strideX ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = zlogspace;
