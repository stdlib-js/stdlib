/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Comparator function for sorting property names and symbols in lexicography order.
*
* ## Notes
*
* -   Symbols are sorted **after** names.
*
* @private
* @param {(string|symbol)} a - property
* @param {(string|symbol)} b - property
* @returns {integer} comparison result
*/
function comparator( a, b ) {
	var ta = typeof a;
	var tb = typeof b;

	// Strings are sorted before symbols:
	if ( ta === 'string' && tb === 'symbol' ) {
		return -1;
	}
	if ( ta === 'symbol' && tb === 'string' ) {
		return 1;
	}
	// Convert symbols to strings:
	a = String( a );
	b = String( b );

	// Sort in lexicographic order:
	if ( a < b ) {
		return -1;
	}
	if ( a === b ) {
		return 0;
	}
	return 1;
}


// EXPORTS //

module.exports = comparator;
