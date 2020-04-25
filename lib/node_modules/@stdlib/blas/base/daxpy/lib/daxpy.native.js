/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Multiplies a vector `x` by a constant and adds the result to `y`.
*
* @param {PositiveInteger} N - number of elements
* @param {number} alpha - scalar
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - destination array
* @param {integer} strideY - `y` stride length
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var alpha = 5.0;
*
* daxpy( x.length, alpha, x, 1, y, 1 );
* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*/
function daxpy( N, alpha, x, strideX, y, strideY ) {
	addon( N, alpha, x, strideX, y, strideY );
	return y;
}


// EXPORTS //

module.exports = daxpy;
