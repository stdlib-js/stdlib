/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var mapBy2 = require( '@stdlib/strided/base/map-by2' );
var add = require( '@stdlib/number/float64/base/add' );


// MAIN //

/**
* Performs element-wise addition of two strided arrays via a callback function and assigns each result to an element in an output strided array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array/collection
* @param {integer} sx - `x` stride length
* @param {Collection} y - input array/collection
* @param {integer} sy - `y` stride length
* @param {Collection} z - destination array/collection
* @param {integer} sz - `z` stride length
* @param {Callback} clbk - callback
* @param {*} [thisArg] - callback execution context
* @returns {Collection} `z`
*
* @example
* function accessor( values ) {
*     return values;
* }
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* addBy( x.length, x, 1, y, 1, z, 1, accessor );
*
* console.log( z );
* // => [ 12.0, 14.0, 16.0, 18.0, 20.0 ]
*/
function addBy( N, x, sx, y, sy, z, sz, clbk, thisArg ) {
	return mapBy2( N, x, sx, y, sy, z, sz, add, clbk, thisArg );
}


// EXPORTS //

module.exports = addBy;
