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
* The original C++ code and copyright notice are from the [Boost library]{@link https://github.com/boostorg/math/blob/fa1896fbc4c6fadc167307342ceb20bf2b6c0688/include/boost/math/special_functions/sqrt1pm1.hpp}. This implementation follows the original, but has been modified for JavaScript.
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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var expm1 = require( '@stdlib/math/base/special/expm1' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the value of `sqrt(1+x)-1`.
*
* @param {number} x - input value
* @returns {number} square root of `1+x` minus one
*
* @example
* var v = sqrt1pm1( 3.0 );
* // returns 1.0
*
* @example
* var v = sqrt1pm1( 0.5 );
* // returns ~0.225
*
* @example
* var v = sqrt1pm1( 0.02 );
* // returns ~0.01
*
* @example
* var v = sqrt1pm1( -0.5 );
* // returns ~-0.293
*
* @example
* var v = sqrt1pm1( -1.1 );
* // returns NaN
*
* @example
* var v = sqrt1pm1( NaN );
* // returns NaN
*/
function sqrt1pm1( x ) {
	if ( isnan( x ) ) {
		return NaN;
	}
	if ( abs( x ) > 0.75 ) {
		return sqrt( 1.0+x ) - 1.0;
	}
	return expm1( log1p( x ) / 2.0 );
}


// EXPORTS //

module.exports = sqrt1pm1;
