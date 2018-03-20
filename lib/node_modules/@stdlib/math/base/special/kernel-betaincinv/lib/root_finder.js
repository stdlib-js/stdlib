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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/ibeta_inverse.hpp}. The implementation has been modified for JavaScript.
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

var ln = require( '@stdlib/math/base/special/ln' );
var MAX_VALUE = require( '@stdlib/constants/math/float64-max' );


// VARIABLES //

var BIG = MAX_VALUE / 4.0;


// MAIN //

/**
* Helper function used by root finding code to convert `eta` to `x`.
*
* @private
* @param {number} t - first parameter
* @param {number} a - second parameter
* @returns {Function} root function
*/
function temmeRootFinder( t, a ) {
	return roots;

	/**
	* Calculates roots.
	*
	* @private
	* @param {number} x - function value
	* @returns {Array} function roots
	*/
	function roots( x ) {
		var f1;
		var f;
		var y;

		y = 1.0 - x;
		if ( y === 0.0 ) {
			return [ -BIG, -BIG ];
		}
		if ( x === 0.0 ) {
			return [ -BIG, -BIG ];
		}
		f = ln( x ) + ( a * ln( y ) ) + t;
		f1 = ( 1.0 / x ) - ( a / y );
		return [ f, f1 ];
	}
}


// EXPORTS //

module.exports = temmeRootFinder;
