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

'use strict';

// MODULES //

var mapBy = require( '@stdlib/strided/base/map-by' );
var ahavercos = require( '@stdlib/math/base/special/ahavercos' );


// MAIN //

/**
* Computes the inverse half-value versed cosine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array/collection
* @param {integer} strideX - `x` stride length
* @param {Collection} y - destination array/collection
* @param {integer} strideY - `y` stride length
* @param {Callback} clbk - callback
* @param {*} [thisArg] - callback execution context
* @returns {Collection} `y`
*
* @example
* function accessor( v ) {
*     return v;
* }
*
* var x = [ 0.0, 0.5, 1.0, 0.25, 0.75 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* ahavercosBy( x.length, x, 1, y, 1, accessor );
*
* console.log( y );
* // => [ ~3.142, ~1.571, 0.0, ~2.094, ~1.047 ]
*/
function ahavercosBy( N, x, strideX, y, strideY, clbk, thisArg ) {
	return mapBy( N, x, strideX, y, strideY, ahavercos, clbk, thisArg );
}


// EXPORTS //

module.exports = ahavercosBy;
