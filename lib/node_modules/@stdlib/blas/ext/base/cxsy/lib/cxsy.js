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
* Subtracts elements of a single-precision complex floating-point strided array `y` from the corresponding elements of a single-precision complex floating-point strided array `x` and assigns the results to `y`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Complex64Array} y - output array
* @param {integer} strideY - `y` stride length
* @returns {Complex64Array} output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, -2.0, 3.0, 4.0, -5.0, 6.0 ] );
* var y = new Complex64Array( [ 2.0, 3.0, -4.0, 5.0, 6.0, -7.0 ] );
*
* cxsy( x.length, x, 1, y, 1 );
* // y => <Complex64Array>[ -1.0, -5.0, 7.0, -1.0, -11.0, 13.0 ]
*/
function cxsy( N, x, strideX, y, strideY ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = cxsy;
