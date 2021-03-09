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

var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var addon = require( './../src/addon.node' );
var js = require( './trunc.js' );


// MAIN //

/**
* Rounds each element in a strided array `x` toward zero and assigns the results to elements in a strided array `y`.
*
* @param {integer} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} strideX - `x` stride length
* @param {Collection} y - destination array
* @param {integer} strideY - `y` stride length
* @throws {TypeError} first argument must be an integer
* @throws {TypeError} second argument must be an array-like object
* @throws {TypeError} third argument must be an integer
* @throws {TypeError} fourth argument must be an array-like object
* @throws {TypeError} fifth argument must be an integer
* @throws {Error} insufficient arguments
* @throws {Error} too many arguments
* @throws {RangeError} second argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws {RangeError} fourth argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws {TypeError} unable to resolve a strided array function supporting the provided array argument data types
* @returns {Collection} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* trunc( x.length, x, 1, y, 1 );
* // y => <Float64Array>[ 1.0, 2.0, -3.0, 4.0, -5.0 ]
*/
function trunc( N, x, strideX, y, strideY ) {
	// WARNING: we assume that, if we're provided something resembling a typed array, we're provided a typed array; however, this can lead to potential unintended errors as the native add-on cannot work with non-typed array objects (e.g., generic arrays)...
	if ( !isTypedArrayLike( x ) || !isTypedArrayLike( y ) ) {
		return js( N, x, strideX, y, strideY );
	}
	addon( N, x, strideX, y, strideY );
	return y;
}


// EXPORTS //

module.exports = trunc;
