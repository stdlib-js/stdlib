/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Computes a one-sample Z-test for a double-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {(integer|string)} alternative - alternative hypothesis
* @param {number} alpha - significance level
* @param {number} mu - mean under the null hypothesis
* @param {PositiveNumber} sigma - known standard deviation
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @param {Object} out - output results object
* @returns {Object} results object
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
*
* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
*
* var results = new Results();
* var out = dztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*/
function dztest( N, alternative, alpha, mu, sigma, x, strideX, out ) {
	return ndarray( N, alternative, alpha, mu, sigma, x, strideX, stride2offset( N, strideX ), out ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dztest;
