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
* Adds elements of a double-precision complex floating-point strided array `x` to the corresponding elements of a double-precision complex floating-point strided array `y` and assigns the results to `y`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Complex128Array} y - output array
* @param {integer} strideY - `y` stride length
* @returns {Complex128Array} output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
*
* zxpy( x.length, x, 1, y, 1 );
* // y => <Complex128Array>[ 3.0, 5.0, 7.0, 9.0, 11.0, 13.0 ]
*/
function zxpy( N, x, strideX, y, strideY ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = zxpy;
