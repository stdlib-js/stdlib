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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
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

'use strict';

// MODULES //

var evalpoly = require( '@stdlib/math/base/tools/evalpoly' );
var erfcinv = require( '@stdlib/math/base/special/erfcinv' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var exp = require( '@stdlib/math/base/special/exp' );
var SQRT2 = require( '@stdlib/constants/math/float64-sqrt-two' );


// VARIABLES //

// Workspaces for the polynomial coefficients:
var workspace = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
var terms = [ 0.0, 0.0, 0.0, 0.0 ];


// MAIN //

/**
* Carries out the first method by Temme (described in section 2).
*
* ## References
*
* -   Temme, N. M. 1992. "Incomplete Laplace Integrals: Uniform Asymptotic Expansion with Application to the Incomplete Beta Function." _Journal of Computational and Applied Mathematics_ 41 (1–2): 1638–63. doi:[10.1016/0377-0427(92)90244-R](https://doi.org/10.1016/0377-0427(92)90244-R).
*
* @private
* @param {PositiveNumber} a - function parameter
* @param {PositiveNumber} b - function parameter
* @param {Probability} z - function parameter
* @returns {number} function value
*/
function temme1( a, b, z ) {
	var eta0;
	var eta2;
	var eta;
	var B2;
	var B3;
	var B;
	var c;

	// Get the first approximation for eta from the inverse error function (Eq: 2.9 and 2.10):
	eta0 = erfcinv( 2.0 * z );
	eta0 /= -sqrt( a / 2.0 );

	terms[ 0 ] = eta0;

	// Calculate powers:
	B = b - a;
	B2 = B * B;
	B3 = B2 * B;

	// Calculate correction terms:

	// See eq following 2.15:
	workspace[ 0 ] = -B * SQRT2 / 2;
	workspace[ 1 ] = ( 1 - (2.0*B) ) / 8.0;
	workspace[ 2 ] = -(B * SQRT2 / 48.0);
	workspace[ 3 ] = -1.0 / 192.0;
	workspace[ 4 ] = -B * SQRT2 / 3840.0;
	workspace[ 5 ] = 0.0;
	workspace[ 6 ] = 0.0;
	terms[ 1 ] = evalpoly( workspace, eta0 );

	// Eq Following 2.17:
	workspace[ 0 ] = B * SQRT2 * ( (3.0*B) - 2.0) / 12.0;
	workspace[ 1 ] = ( (20.0*B2) - (12.0*B) + 1.0 ) / 128.0;
	workspace[ 2 ] = B * SQRT2 * ( (20.0*B) - 1.0) / 960.0;
	workspace[ 3 ] = ( (16.0*B2) + (30.0*B) - 15.0) / 4608.0;
	workspace[ 4 ] = B * SQRT2 * ( (21.0*B) + 32) / 53760.0;
	workspace[ 5 ] = (-(32.0*B2) + 63.0) / 368640.0;
	workspace[ 6 ] = -B * SQRT2 * ( (120.0*B) + 17.0) / 25804480.0;
	terms[ 2 ] = evalpoly( workspace, eta0 );

	// Eq Following 2.17:
	workspace[ 0 ] = B * SQRT2 * ( (-75*B2) + (80.0*B) - 16.0) / 480.0;
	workspace[ 1 ] = ( (-1080.0*B3) + (868.0*B2) - (90.0*B) - 45.0) / 9216.0;
	workspace[ 2 ] = B * SQRT2 * ( (-1190.0*B2) + (84.0*B) + 373.0) / 53760.0;
	workspace[ 3 ] = ( (-2240.0*B3)-(2508.0*B2)+(2100.0*B)-165.0 ) / 368640.0;
	workspace[ 4 ] = 0.0;
	workspace[ 5 ] = 0.0;
	workspace[ 6 ] = 0.0;
	terms[ 3 ] = evalpoly( workspace, eta0 );

	// Bring them together to get a final estimate for eta:
	eta = evalpoly( terms, 1.0/a );

	// Now we need to convert eta to the return value `x`, by solving the appropriate quadratic equation:
	eta2 = eta * eta;
	c = -exp( -eta2 / 2.0 );
	if ( eta2 === 0.0 ) {
		return 0.5;
	}
	return ( 1.0 + ( eta * sqrt( ( 1.0+c ) / eta2 ) ) ) / 2.0;
}


// EXPORTS //

module.exports = temme1;
