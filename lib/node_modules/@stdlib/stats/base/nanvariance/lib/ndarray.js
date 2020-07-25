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

var nanvariancepn = require( '@stdlib/stats/base/nanvariancepn' ).ndarray;


// MAIN //

/**
* Computes the variance of a strided array ignoring `NaN` values.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {NumericArray} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} variance
*
* @example
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
* var N = floor( x.length / 2 );
*
* var v = nanvariance( N, 1, x, 2, 1 );
* // returns 6.25
*/
function nanvariance( N, correction, x, stride, offset ) {
	return nanvariancepn( N, correction, x, stride, offset );
}


// EXPORTS //

module.exports = nanvariance;
