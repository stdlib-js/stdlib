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

var dispatch = require( '@stdlib/strided/base/unary-addon-dispatch' );
var addon = require( './../src/addon.node' );
var js = require( './cbrt.js' );


// MAIN //

/**
* Computes the cube root of each element in a strided array `x` and assigns the results to elements in a strided array `y`.
*
* @name cbrt
* @type {Function}
* @param {integer} N - number of indexed elements
* @param {*} dtypeX - `x` data type
* @param {Collection} x - input array
* @param {integer} strideX - `x` stride length
* @param {*} dtypeY - `y` data type
* @param {Collection} y - destination array
* @param {integer} strideY - `y` stride length
* @throws {TypeError} first argument must be an integer
* @throws {TypeError} third argument must be an array-like object
* @throws {TypeError} fourth argument must be an integer
* @throws {TypeError} sixth argument must be an array-like object
* @throws {TypeError} seventh argument must be an integer
* @throws {Error} insufficient arguments
* @throws {Error} too many arguments
* @throws {RangeError} third argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws {RangeError} sixth argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws {TypeError} unable to resolve a strided array function supporting the provided array argument data types
* @returns {Collection} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cbrt( x.length, 'float64', x, 1, 'float64', y, 1 );
* // y => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
*/
var cbrt = dispatch( addon, js );


// EXPORTS //

module.exports = cbrt;
