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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
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

var inverseStudentsT = require( './inverse_students_t.js' );


// MAIN //

/**
* Returns the inverse of the incomplete beta function via the Student t distribution.
*
* @private
* @param {PositiveNumber} a - function parameter
* @param {Probability} p - probability value
* @param {Object} py - placeholder object holding one minus the returned value
* @returns {number} function value
*/
function findIBetaInvFromTDist( a, p, py ) {
	var df;
	var u;
	var v;
	var t;

	u = p / 2.0;
	v = 1.0 - u;
	df = a * 2.0;
	t = inverseStudentsT( df, u, v );
	if ( py ) {
		py.value = t * t / ( df + ( t*t ) );
	}
	return df / ( df + ( t*t ) );
}


// EXPORTS //

module.exports = findIBetaInvFromTDist;
