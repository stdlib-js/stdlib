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
* Computes the cumulative maximum of single-precision floating-point strided array elements.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - output array
* @param {integer} strideY - `y` stride length
* @returns {Float32Array} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
* var y = new Float32Array( x.length );
*
* var v = scumax( x.length, x, 1, y, 1 );
* // returns <Float32Array>[ 1.0, 1.0, 2.0 ]
*/
function scumax( N, x, strideX, y, strideY ) {
	addon( N, x, strideX, y, strideY );
	return y;
}


// EXPORTS //

module.exports = scumax;
