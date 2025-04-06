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
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {Float64Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dnannsum( x.length, x, 1, out, 1 );
* // returns <Float64Array>[ 1.0, 3 ]
*/
function dnannsum( N, x, strideX, out, strideOut ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ), out, strideOut, stride2offset( 2, strideOut ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dnannsum;
