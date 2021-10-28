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

var dispatch = require( '@stdlib/strided/dispatch' );
var unary = require( '@stdlib/strided/base/unary' ).ndarray;
var resolve = require( '@stdlib/strided/base/dtype-resolve-enum' );
var types = require( './types.json' );
var meta = require( './meta.json' );
var data = require( './data.js' );


// VARIABLES //

var fcn = dispatch( unary, types, data, meta.nargs+meta.nin+meta.nout, meta.nin, meta.nout ); // eslint-disable-line max-len


// MAIN //

/**
* Computes the squared absolute value for each element in a strided array `x` and assigns the results to elements in a strided array `y`.
*
* @param {integer} N - number of indexed elements
* @param {*} dtypeX - `x` data type
* @param {Collection} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {*} dtypeY - `y` data type
* @param {Collection} y - destination array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @throws {TypeError} first argument must be an integer
* @throws {TypeError} third argument must be an array-like object
* @throws {TypeError} fourth argument must be an integer
* @throws {TypeError} fifth argument must be a nonnegative integer
* @throws {TypeError} seventh argument must be an array-like object
* @throws {TypeError} eighth argument must be an integer
* @throws {TypeError} ninth argument must be a nonnegative integer
* @throws {Error} insufficient arguments
* @throws {Error} too many arguments
* @throws {RangeError} third argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws {RangeError} seventh argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws {TypeError} unable to resolve a strided array function supporting the provided array argument data types
* @returns {Collection} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* abs2( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
* // y => <Float64Array>[ 4.0, 1.0, 9.0, 25.0, 16.0 ]
*/
function abs2( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY ) {
	return fcn( N, resolve( dtypeX ), x, strideX, offsetX, resolve( dtypeY ), y, strideY, offsetY ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = abs2;
