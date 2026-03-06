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
*/

'use strict';

// MAIN //

/**
* Computes the minimum time.
*
* @private
* @param {ArrayArray} times - times
* @returns {NonNegativeIntegerArray} minimum time
*/
function min( times ) {
	var out;
	var t;
	var i;

	out = times[ 0 ];
	for ( i = 1; i < times.length; i++ ) {
		t = times[ i ];
		if (
			t[ 0 ] < out[ 0 ] ||
			(
				t[ 0 ] === out[ 0 ] &&
				t[ 1 ] < out[ 1 ]
			)
		) {
			out = t;
		}
	}
	return out;
}


// EXPORTS //

module.exports = min;
