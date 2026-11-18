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
* Tests whether at least one element in a single-precision floating-point strided array is truthy.
*
* ## Notes
*
* -   The function explicitly treats `NaN` values as falsy.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @returns {boolean} boolean indicating whether at least one element is truthy
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
*
* var v = sany( x.length, x, 1 );
* // returns true
*/
function sany( N, x, strideX ) {
	var ox = stride2offset( N, strideX );
	return ndarray( N, x, strideX, ox );
}


// EXPORTS //

module.exports = sany;
