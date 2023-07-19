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

var gnansumkbn = require( '@stdlib/blas/ext/base/gnansumkbn' );


// MAIN //

/**
* Computes the sum of strided array elements, ignoring `NaN` values.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} stride - stride length
* @returns {number} sum
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
* var N = x.length;
*
* var v = gnansum( N, x, 1 );
* // returns 1.0
*/
function gnansum( N, x, stride ) {
	return gnansumkbn( N, x, stride );
}


// EXPORTS //

module.exports = gnansum;
