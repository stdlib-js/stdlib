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

var smap = require( '@stdlib/strided/base/smap' ).ndarray;
var ceilf = require( '@stdlib/math/base/special/ceilf' );


// MAIN //

/**
* Rounds each element in a single-precision floating-point strided array `x` toward positive infinity and assigns the results to elements in a single-precision floating-point strided array `y`.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float32Array} y - destination array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* sceil( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float32Array>[ 2.0, 3.0, -3.0, 4.0, -5.0 ]
*/
function sceil( N, x, strideX, offsetX, y, strideY, offsetY ) {
	return smap( N, x, strideX, offsetX, y, strideY, offsetY, ceilf );
}


// EXPORTS //

module.exports = sceil;
