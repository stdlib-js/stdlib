/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
*/

'use strict';

// MAIN //

/**
* Creates a function to evaluate a Taylor series expansion `pow(-1, k-1) * pow(x, k) / k` for `ln(1 + x)`.
*
* @private
* @param {number} x - the value at which to evaluate the series
* @returns {Function} series function
*/
function log1pSeries( x ) {
	var mMult = -x;
	var mProd = -1.0;
	var k = 0;

	return next;

	/**
	* Calculate the next term of the series.
	*
	* @private
	* @returns {number} series expansion term
	*/
	function next() {
		mProd *= mMult;
		k += 1;
		return mProd / k;
	}
}


// EXPORTS //

module.exports = log1pSeries;
