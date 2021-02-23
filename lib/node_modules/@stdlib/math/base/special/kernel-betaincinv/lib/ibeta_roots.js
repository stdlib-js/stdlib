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

var kernelBetainc = require( '@stdlib/math/base/special/kernel-betainc' ).assign;
var abs = require( '@stdlib/math/base/special/abs' );
var FLOAT64_MAX = require( '@stdlib/constants/math/float64-max' );
var FLOAT64_MIN_NORM = require( '@stdlib/constants/math/float64-smallest-normal' );


// MAIN //

/**
* Returns a root finding function.
*
* @private
* @param {PositiveNumber} a - function parameter
* @param {PositiveNumber} b - function parameter
* @param {Probability} target - probability value
* @param {boolean} invert - boolean indicating whether to find the roots of the upper or lower incomplete beta function
* @returns {Function} root finding function
*/
function ibetaRoots( a, b, target, invert ) {
	return roots;

	/**
	* Calculates roots.
	*
	* @private
	* @param {number} x - input value
	* @returns {Array} roots
	*/
	function roots( x ) {
		var buf;
		var f1;
		var f2;
		var f;
		var y;

		y = 1.0 - x;

		buf = [ 0.0, 0.0 ];
		kernelBetainc( x, a, b, true, invert, buf, 1, 0 );
		f = buf[ 0 ] - target;
		f1 = buf[ 1 ];
		if ( invert ) {
			f1 = -f1;
		}
		if ( y === 0.0 ) {
			y = FLOAT64_MIN_NORM * 64.0;
		}
		if ( x === 0.0 ) {
			x = FLOAT64_MIN_NORM * 64.0;
		}
		f2 = f1 * ( -(y*a) + ( ( b-2.0 ) * x ) + 1.0 );
		if ( abs( f2 ) < y * x * FLOAT64_MAX ) {
			f2 /= (y * x);
		}
		if ( invert ) {
			f2 = -f2;
		}
		// Make sure we don't have a zero derivative:
		if ( f1 === 0.0 ) {
			f1 = ( ( invert ) ? -1.0 : 1.0 ) * FLOAT64_MIN_NORM * 64.0;
		}
		return [ f, f1, f2 ];
	}
}


// EXPORTS //

module.exports = ibetaRoots;
