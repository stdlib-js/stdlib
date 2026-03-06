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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// TODO: consider moving this to a separate pkg: @stdlib/math/base/special/xsinpi

// MODULES //

var isOdd = require( '@stdlib/math/base/assert/is-odd' );
var floor = require( '@stdlib/math/base/special/floor' );
var sinpi = require( '@stdlib/math/base/special/sinpi' );


// MAIN //

/**
* Calculates `x * sin(pi * x)`, taking extra care near when `x` is near a whole number.
*
* @private
* @param {number} x - input value
* @returns {number} function value
*/
function sinpx( x ) {
	var result;
	var dist;
	var sign;
	var fl;

	sign = 1;
	if ( x < 0.0 ) {
		x = -x;
	}
	fl = floor( x );
	if ( isOdd(fl) ) {
		fl += 1;
		dist = fl - x;
		sign = -sign;
	} else {
		dist = x - fl;
	}
	if ( dist > 0.5 ) {
		dist = 1.0 - dist;
	}
	result = sinpi( dist );
	return sign*x*result;
}


// EXPORTS //

module.exports = sinpx;
