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

var dmap = require( '@stdlib/strided/base/dmap' ).ndarray;
var cbrt = require( '@stdlib/math/base/special/cbrt' );


// MAIN //

/**
* Computes the cube root of each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `y`.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float64Array} y - destination array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dcbrt( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
*/
function dcbrt( N, x, strideX, offsetX, y, strideY, offsetY ) {
	return dmap( N, x, strideX, offsetX, y, strideY, offsetY, cbrt );
}


// EXPORTS //

module.exports = dcbrt;
