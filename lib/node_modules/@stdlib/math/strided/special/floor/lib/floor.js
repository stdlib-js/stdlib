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

var dispatch = require( '@stdlib/strided/dispatch' );
var unary = require( '@stdlib/strided/base/unary' );
var types = require( './types.json' );
var meta = require( './meta.json' );
var data = require( './data.js' );


// VARIABLES //

var fcn = dispatch( unary, types, data, meta.nargs, meta.nin, meta.nout );


// MAIN //

/**
* Rounds each element in a strided array `x` toward negative infinity and assigns the results to elements in a strided array `y`.
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
* var x = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* floor( x.length, x, 1, y, 1 );
* // y => <Float64Array>[ -2.0, 2.0, -4.0, 4.0, -5.0 ]
*/
function floor( N, x, strideX, y, strideY ) {
	return fcn( N, x, strideX, y, strideY );
}


// EXPORTS //

module.exports = floor;
