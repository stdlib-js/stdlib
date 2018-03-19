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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

/* eslint-disable no-mixed-operators */

'use strict';

// MODULES //

var erfcinv = require( '@stdlib/math/base/special/erfcinv' );
var expm1 = require( '@stdlib/math/base/special/expm1' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );
var HALF_PI = require( '@stdlib/constants/math/float64-half-pi' );
var SQRT2 = require( '@stdlib/constants/math/float64-sqrt-two' );


// MAIN //

/**
* Evaluates Student's t quantiles via a method due to Hill.
*
* ## References
*
* -   Hill, G. W. 1970. "Algorithm 396: Student's T-Quantiles." _Communications of the ACM_ 13 (10). New York, NY, USA: ACM: 619–20. doi:[10.1145/355598.355600](https://doi.org/10.1145/355598.355600).
*
* @private
* @param {PositiveNumber} ndf - degrees of freedom
* @param {Probability} u - input probability
* @returns {number} function value
*/
function inverseStudentsTHill( ndf, u ) {
	var a;
	var b;
	var c;
	var d;
	var q;
	var x;
	var y;

	if ( ndf > 1e20 ) {
		return -erfcinv( 2 * u ) * SQRT2;
	}
	a = 1.0 / ( ndf - 0.5 );
	b = 48.0 / (a * a);
	c = ( ( ( ( (20700.0*a/b) - 98.0 ) * a ) - 16.0 ) * a ) + 96.36;
	d = ( ( ( (94.5/(b+c)) - 3.0 ) / b ) + 1.0 ) * sqrt( a * HALF_PI ) * ndf;
	y = pow( d * 2.0 * u, 2.0 / ndf );

	if ( y > ( 0.05 + a ) ) {
		// Asymptotic inverse expansion about normal:
		x = -erfcinv( 2.0 * u ) * SQRT2;
		y = x * x;

		if ( ndf < 5.0 ) {
			c += 0.3 * ( ndf-4.5 ) * ( x + 0.6 );
		}
		c += ( ( ( ( ( ( (0.05*d*x)-5.0 ) * x ) - 7.0 ) * x )- 2.0 ) * x ) + b;
		y = ((((((0.4*y+6.3)*y)+36.0) * y + 94.5) / c - y - 3.0) / b + 1.0) * x;
		y = expm1( a * y * y );
	} else {
		y = ((1.0 / ( ( (ndf+6.0) / (ndf*y) - 0.089 * d - 0.822 ) *
		(ndf+2.0) * 3.0 ) + 0.5 / (ndf+4.0)) * y - 1.0) *
		(ndf+1.0) / (ndf+2.0) + 1.0 / y;
	}
	q = sqrt( ndf * y );
	return -q;
}


// EXPORTS //

module.exports = inverseStudentsTHill;
