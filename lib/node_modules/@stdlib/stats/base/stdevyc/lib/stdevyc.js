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

var varianceyc = require( '@stdlib/stats/base/varianceyc' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Computes the standard deviation of a strided array using a one-pass algorithm proposed by Youngs and Cramer.
*
* ## References
*
* -   Youngs, Edward A., and Elliot M. Cramer. 1971. "Some Results Relevant to Choice of Sum and Sum-of-Product Algorithms." _Technometrics_ 13 (3): 657–65. doi:[10.1080/00401706.1971.10488826](https://doi.org/10.1080/00401706.1971.10488826).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {NumericArray} x - input array
* @param {integer} stride - stride length
* @returns {number} standard deviation
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = stdevyc( x.length, 1, x, 1 );
* // returns ~2.0817
*/
function stdevyc( N, correction, x, stride ) {
	return sqrt( varianceyc( N, correction, x, stride ) );
}


// EXPORTS //

module.exports = stdevyc;
