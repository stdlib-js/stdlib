/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var mapBy = require( '@stdlib/strided/base/map-by' ).ndarray;
var besselj0 = require( '@stdlib/math/base/special/besselj0' );


// MAIN //

/**
* Computes the Bessel function of the first kind of order zero for each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array/collection
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Collection} y - destination array/collection
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Callback} clbk - callback
* @param {*} [thisArg] - callback execution context
* @returns {Collection} `y`
*
* @example
* function accessor( v ) {
*     return v;
* }
*
* var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* besselj0By( x.length, x, 1, 0, y, 1, 0, accessor );
*
* console.log( y );
* // => [ 1.0, ~0.765, ~0.998, ~0.984, ~0.938 ]
*/
function besselj0By( N, x, strideX, offsetX, y, strideY, offsetY, clbk, thisArg ) {
	return mapBy( N, x, strideX, offsetX, y, strideY, offsetY, besselj0, clbk, thisArg );
}


// EXPORTS //

module.exports = besselj0By;
