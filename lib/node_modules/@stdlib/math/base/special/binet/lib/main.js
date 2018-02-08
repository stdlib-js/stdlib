/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var cospi = require( '@stdlib/math/base/special/cospi' );
var pow = require( '@stdlib/math/base/special/pow' );
var PHI = require( '@stdlib/constants/math/float64-phi' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );


// VARIABLES //

var SQRT_5 = 2.23606797749979;


// MAIN //

/**
* Evaluates Binet's formula extended to real numbers.
*
* ## Notes
*
* -   [Non integer Fibonacci numbers][1]
* -   [Interpolated Fibonacci numbers - real or complex][2]
*
* [1]: https://math.stackexchange.com/questions/798190/non-integer-fibonacci-numbers
* [2]: https://math.stackexchange.com/questions/589841/interpolated-fibonacci-numbers-real-or-complex
*
* @param {number} x - input value
* @returns {number} real-valued result
*
* @example
* var y = binet( 0.0 );
* // returns 0.0
*
* @example
* var y = binet( 1.0 );
* // returns 1.0
*
* @example
* var y = binet( 2.0 );
* // returns 1.0
*
* @example
* var y = binet( 3.0 );
* // returns 2.0
*
* @example
* var y = binet( 4.0 );
* // returns 3.0
*
* @example
* var y = binet( 5.0 );
* // returns ~5.0
*
* @example
* var y = binet( 6.0 );
* // returns ~8.0
*
* @example
* var y = binet( NaN );
* // returns NaN
*
* @example
* var y = binet( 3.14 );
* // returns ~2.12
*
* @example
* var y = binet( -1.0 );
* // returns 1.0
*/
function binet( x ) {
	var a;
	var b;
	if (
		isnan( x ) ||
		x === PINF ||
		x === NINF
	) {
		return NaN;
	}
	a = pow( PHI, x );
	b = cospi( x ) / a;
	return ( a - b ) / SQRT_5;
}


// EXPORTS //

module.exports = binet;
