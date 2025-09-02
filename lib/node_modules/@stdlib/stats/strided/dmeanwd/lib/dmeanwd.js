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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Computes the arithmetic mean of a double-precision floating-point strided array using Welford's algorithm.
*
* ## Method
*
* -   This implementation uses Welford's algorithm for efficient computation, which can be derived as follows
*
*     ```tex
*     \begin{align*}
*     \mu_n &= \frac{1}{n} \sum_{i=0}^{n-1} x_i \\
*           &= \frac{1}{n} \biggl(x_{n-1} + \sum_{i=0}^{n-2} x_i \biggr) \\
*           &= \frac{1}{n} (x_{n-1} + (n-1)\mu_{n-1}) \\
*           &= \mu_{n-1} + \frac{1}{n} (x_{n-1} - \mu_{n-1})
*     \end{align*}
*     ```
*
* ## References
*
* -   Welford, B. P. 1962. "Note on a Method for Calculating Corrected Sums of Squares and Products." _Technometrics_ 4 (3). Taylor & Francis: 419–20. doi:[10.1080/00401706.1962.10490022](https://doi.org/10.1080/00401706.1962.10490022).
* -   van Reeken, A. J. 1968. "Letters to the Editor: Dealing with Neely's Algorithms." _Communications of the ACM_ 11 (3): 149–50. doi:[10.1145/362929.362961](https://doi.org/10.1145/362929.362961).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @returns {number} arithmetic mean
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = dmeanwd( x.length, x, 1 );
* // returns ~0.3333
*/
function dmeanwd( N, x, strideX ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = dmeanwd;
