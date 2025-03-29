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

// MODULES //

var properties = require( '@stdlib/utils/properties' );


// MAIN //

/**
* Searches a strided array-like object for a value having an **own** property whose value is equal to a provided search value and is **not** a property value for any other value in the search array.
*
* ## Notes
*
* -   The returned three-element array has the following elements:
*
*     -   `0`: found value
*     -   `1`: associated property name
*     -   `2`: value index
*
* @private
* @param {NonNegativeInteger} N - number of elements to search
* @param {ArrayLike} arr - array to search
* @param {integer} stride - index stride
* @param {NonNegativeInteger} offset - index offset
* @param {*} value - search value
* @returns {(Array|null)} search results or null
*/
function findUniqueEntry( N, arr, stride, offset, value ) {
	var props;
	var idx;
	var out;
	var FLG;
	var v;
	var i;
	var j;

	idx = offset;
	FLG = false;
	for ( i = 0; i < N; i++ ) {
		v = arr[ idx ];
		props = properties( v );
		for ( j = 0; j < props.length; j++ ) {
			if ( v[ props[ j ] ] === value ) {
				if ( FLG ) {
					return null;
				}
				out = [ v, props[ j ], idx ];
				FLG = true;
			}
		}
		idx += stride;
	}
	if ( out ) {
		return out;
	}
	return null;
}


// EXPORTS //

module.exports = findUniqueEntry;
