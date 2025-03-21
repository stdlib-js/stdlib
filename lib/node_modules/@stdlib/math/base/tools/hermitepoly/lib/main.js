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

var SQRT2 = require( '@stdlib/constants/float64/sqrt-two' );
var pow = require( '@stdlib/math/base/special/pow' );
var normhermitepoly = require( '@stdlib/math/base/tools/normhermitepoly' );


// MAIN //

/**
* Evaluates a physicist's Hermite polynomial.
*
* @param {NonNegativeInteger} n - nonnegative polynomial degree
* @param {number} x - evaluation point
* @returns {number} function value
*
* @example
* var v = hermitepoly( 1, 1.0 );
* // returns 2.0
*
* @example
* var v = hermitepoly( 1, 0.5 );
* // returns 1.0
*
* @example
* var v = hermitepoly( -1, 0.5 );
* // returns NaN
*
* @example
* var v = hermitepoly( 0, 0.5 );
* // returns 1.0
*
* @example
* var v = hermitepoly( 2, 0.5 );
* // returns -1.0
*/
function hermitepoly( n, x ) {
	return pow( 2.0, 0.5*n ) * normhermitepoly( n, SQRT2*x );
}


// EXPORTS //

module.exports = hermitepoly;
