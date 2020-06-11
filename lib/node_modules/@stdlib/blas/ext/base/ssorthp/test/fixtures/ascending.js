/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );


// MAIN //

/**
* Determines sort order by comparing two values.
*
* ## Notes
*
* -   Return values are as follows:
*
*     -   `-1`: sort `a` to a lower index than `b` (i.e., `a` comes first)
*     -   `1`: sort `b` to a lower index than `a` (i.e., `b` comes first)
*     -   `0`: leave the order of `a` and `b` unchanged with respect to one another
*
* @private
* @param {number} a - first value
* @param {number} b - second value
* @returns {integer} value indicating sort order
*/
function ascending( a, b ) {
	// Sort NaNs to the end...
	if ( isnanf( a ) ) {
		return 1;
	}
	if ( isnanf( b ) ) {
		return -1;
	}
	// Sort negative 0s to the left...
	if ( a === b && a === 0 ) {
		if ( isNegativeZerof( a ) ) {
			return -1;
		}
		if ( isNegativeZerof( b ) ) {
			return 1;
		}
		return 0;
	}
	if ( a > b ) {
		return 1;
	}
	if ( a < b ) {
		return -1;
	}
	return 0;
}


// EXPORTS //

module.exports = ascending;
