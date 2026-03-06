/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var factory = require( './factory.js' );


// MAIN //

/**
* Fills a strided array with pseudorandom numbers drawn from a geometric distribution.
*
* @name geometric
* @type {Function}
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} p - success probability
* @param {integer} sp - `p` stride length
* @param {Collection} out - output array
* @param {integer} so - `out` stride length
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* geometric( out.length, [ 0.01 ], 0, out, 1 );
*/
var geometric = factory();


// EXPORTS //

module.exports = geometric;
