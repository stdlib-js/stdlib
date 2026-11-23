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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Fills a double-precision complex floating-point strided array with linearly spaced values over a specified interval.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128} start - start of interval
* @param {Complex128} stop - end of interval
* @param {boolean} endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length
* @returns {Complex128Array} input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex128( 0.0, 0.0 );
* var stp = new Complex128( 100.0, 50.0 );
*
* zlinspace( x.length, strt, stp, true, x, 1 );
* // x => <Complex128Array>[ 0.0, 0.0, 20.0, 10.0, 40.0, 20.0, 60.0, 30.0, 80.0, 40.0, 100.0, 50.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex128( 0.0, 0.0 );
* var stp = new Complex128( 100.0, 50.0 );
*
* zlinspace( x.length, strt, stp, false, x, 1 );
* // x => <Complex128Array>[ 0.0, 0.0, 20.0, 10.0, 40.0, 20.0, 60.0, 30.0, 80.0, 40.0 ]
*/
function zlinspace( N, start, stop, endpoint, x, strideX ) {
	var view = reinterpret( x, 0 );
	addon( N, start, stop, endpoint, view, strideX );
	return x;
}


// EXPORTS //

module.exports = zlinspace;
