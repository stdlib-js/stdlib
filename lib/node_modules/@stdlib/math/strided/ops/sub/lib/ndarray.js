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

/* eslint-disable max-len, max-params */

'use strict';

// MODULES //

var dispatch = require( '@stdlib/strided/dispatch' );
var binary = require( '@stdlib/strided/base/binary' ).ndarray;
var resolve = require( '@stdlib/strided/base/dtype-resolve-enum' );
var types = require( './types.js' );
var meta = require( './meta.json' );
var data = require( './data.js' );


// VARIABLES //

var fcn = dispatch( binary, types, data, meta.nargs+meta.nin+meta.nout, meta.nin, meta.nout );


// MAIN //

/**
* Subtracts each element in a strided array `x` to a corresponding element in a strided array `y` and assigns the results to elements in a strided array `z`.
*
* @param {integer} N - number of indexed elements
* @param {*} dtypeX - `x` data type
* @param {Collection} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {*} dtypeY - `y` data type
* @param {Collection} y - input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {*} dtypeZ - `z` data type
* @param {Collection} z - destination array
* @param {integer} strideZ - `z` stride length
* @param {NonNegativeInteger} offsetZ - starting `z` index
* @throws {TypeError} first argument must be an integer
* @throws {TypeError} third argument must be an array-like object
* @throws {TypeError} fourth argument must be an integer
* @throws {TypeError} fifth argument must be a nonnegative integer
* @throws {TypeError} seventh argument must be an array-like object
* @throws {TypeError} eighth argument must be an integer
* @throws {TypeError} ninth argument must be a nonnegative integer
* @throws {TypeError} eleventh argument must be an array-like object
* @throws {TypeError} twelfth argument must be an integer
* @throws {TypeError} thirteenth argument must be a nonnegative integer
* @throws {Error} insufficient arguments
* @throws {Error} too many arguments
* @throws {RangeError} third argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws {RangeError} seventh argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws {RangeError} eleventh argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws {TypeError} unable to resolve a strided array function supporting the provided array argument data types
* @returns {Collection} `z`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* sub( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
* // z => <Float64Array>[ -3.0, -1.0, 0.0, -9.0, -1.0 ]
*/
function sub( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY, dtypeZ, z, strideZ, offsetZ ) {
	return fcn( N, resolve( dtypeX ), x, strideX, offsetX, resolve( dtypeY ), y, strideY, offsetY, resolve( dtypeZ ), z, strideZ, offsetZ );
}


// EXPORTS //

module.exports = sub;
