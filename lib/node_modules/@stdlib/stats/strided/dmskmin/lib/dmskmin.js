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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Computes the minimum value of a double-precision floating-point strided array according to a mask.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Uint8Array} mask - mask array
* @param {integer} strideMask - `mask` stride length
* @returns {number} minimum value
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0 ] );
* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
*
* var v = dmskmin( x.length, x, 1, mask, 1 );
* // returns -2.0
*/
function dmskmin( N, x, strideX, mask, strideMask ) {
	var ox = stride2offset( N, strideX );
	var om = stride2offset( N, strideMask );
	return ndarray( N, x, strideX, ox, mask, strideMask, om );
}


// EXPORTS //

module.exports = dmskmin;
