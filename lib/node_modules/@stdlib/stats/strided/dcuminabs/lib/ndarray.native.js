/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Computes the cumulative minimum absolute value of double-precision floating-point strided array elements.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var y = new Float64Array( x.length );
* var N = floor( x.length / 2 );
*
* var v = dcuminabs( N, x, 2, 1, y, 1, 0 );
* // returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function dcuminabs( N, x, strideX, offsetX, y, strideY, offsetY ) {
	addon.ndarray( N, x, strideX, offsetX, y, strideY, offsetY );
	return y;
}


// EXPORTS //

module.exports = dcuminabs;
