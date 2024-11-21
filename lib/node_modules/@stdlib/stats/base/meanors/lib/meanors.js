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

var gsumors = require( '@stdlib/blas/ext/base/gsumors' );


// MAIN //

/**
* Computes the arithmetic mean of a strided array using ordinary recursive summation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} stride - stride length
* @returns {number} arithmetic mean
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var N = x.length;
*
* var v = meanors( N, x, 1 );
* // returns ~0.3333
*/
function meanors( N, x, stride ) {
	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		return x[ 0 ];
	}
	return gsumors( N, x, stride ) / N;
}


// EXPORTS //

module.exports = meanors;
