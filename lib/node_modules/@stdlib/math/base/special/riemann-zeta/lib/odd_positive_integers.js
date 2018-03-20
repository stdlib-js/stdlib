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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_60_0/boost/math/special_functions/zeta.hpp}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var series = require( './polynomial_series.js' );
var ODD_POSITIVE_INTEGERS = require( './odd_positive_integers.json' );


// MAIN //

/**
* Evaluates the Riemann zeta function for an odd positive integer.
*
* @private
* @param {number} s - input value
* @returns {number} function value
*
* @example
* var v = zeta( 3.0 );
* // returns ~1.202
*/
function zeta( s ) {
	var idx = (s-3) / 2;
	if ( idx >= ODD_POSITIVE_INTEGERS.length ) {
		return series( s );
	}
	return ODD_POSITIVE_INTEGERS[ idx ];
}


// EXPORTS //

module.exports = zeta;
