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
* Fills a strided array according to a provided callback function.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {Callback} clbk - callback function
* @param {*} [thisArg] - execution context
* @returns {Collection} input array
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* function fill() {
*     return 5.0;
* }
*
* gfillBy( x.length, x, 1, fill );
* // x => [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
*/
function gfillBy( N, x, strideX, clbk, thisArg ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ), clbk, thisArg );
}


// EXPORTS //

module.exports = gfillBy;
