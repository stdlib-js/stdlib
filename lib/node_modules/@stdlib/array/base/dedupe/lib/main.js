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
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/math/base/assert/is-nan' );


// FUNCTIONS //

/**
* De-duplicates values in-place.
*
* @private
* @param {Array} x - input array
* @param {PositiveInteger} limit - number of allowed consecutive duplicates
* @returns {Array} input array
*
* @example
* var x = [ 1, 1, 2, 3, 3 ];
*
* var y = dedupeInPlace( x, 1 );
* // returns [ 1, 2, 3 ]
*
* var bool = ( x === y );
* // returns true
*
* @example
* var x = [ 1, 1, 1, 2, 1, 1, 3, 3 ];
*
* var y = dedupeInPlace( x, 2 );
* // returns [ 1, 1, 2, 1, 1, 3, 3 ]
*
* var bool = ( x === y );
* // returns true
*/
function dedupeInPlace( x, limit ) {
	var count;
	var prev;
	var len;
	var ptr;
	var v;
	var i;

	len = x.length;
	if ( len === 0 ) {
		return x;
	}
	prev = x[ 0 ];
	count = 1;
	ptr = 1;
	for ( i = 1; i < len; i++ ) {
		v = x[ i ];
		if ( v === prev ) {
			count += 1;
			if ( count <= limit ) {
				x[ ptr ] = prev;
				ptr += 1;
			}
		} else {
			prev = v;
			count = 1;
			x[ ptr ] = prev;
			ptr += 1;
		}
	}
	x.length = ptr;
	return x;
}

/**
* De-duplicates values in-place, treating `NaN` values as equal.
*
* @private
* @param {Array} x - input array
* @param {PositiveInteger} limit - number of allowed consecutive duplicates
* @returns {Array} input array
*
* @example
* var x = [ 1, 1, 2, NaN, NaN, 3, 3 ];
*
* var y = dedupeEqualNaNs( x, 1 );
* // returns [ 1, 2, NaN, 3 ]
*
* var bool = ( x === y );
* // returns true
*
* @example
* var x = [ 1, 1, 1, 2, 1, 1, NaN, NaN, NaN, 3, 3 ];
*
* var y = dedupeEqualNaNs( x, 2 );
* // returns [ 1, 1, 2, 1, 1, NaN, NaN, 3, 3 ]
*
* var bool = ( x === y );
* // returns true
*/
function dedupeEqualNaNs( x, limit ) {
	var count;
	var prev;
	var len;
	var ptr;
	var FLG;
	var v;
	var i;

	len = x.length;
	if ( len === 0 ) {
		return x;
	}
	FLG = false;
	prev = x[ 0 ];
	if ( isnan( prev ) ) {
		FLG = true;
	}
	count = 1;
	ptr = 1;
	for ( i = 1; i < len; i++ ) {
		v = x[ i ];
		if ( v === prev || ( FLG && isnan( v ) ) ) {
			count += 1;
			if ( count <= limit ) {
				x[ ptr ] = prev;
				ptr += 1;
			}
		} else {
			prev = v;
			count = 1;
			x[ ptr ] = prev;
			ptr += 1;
			FLG = false;
			if ( isnan( prev ) ) {
				FLG = true;
			}
		}
	}
	x.length = ptr;
	return x;
}


// MAIN //

/**
* Removes consecutive duplicated values.
*
* @param {Array} x - input array
* @param {PositiveInteger} limit - number of allowed consecutive duplicates
* @param {boolean} equalNaNs - boolean indicating whether NaNs should be considered equal
* @returns {Array} de-duplicated values
*
* @example
* var x = [ 1, 1, 2, 3, 3 ];
*
* var y = dedupe( x, 1, false );
* // returns [ 1, 2, 3 ]
*
* var bool = ( x === y );
* // returns true
*
* @example
* var x = [ 1, 1, 1, 2, 1, 1, 3, 3 ];
*
* var y = dedupe( x, 2, false );
* // returns [ 1, 1, 2, 1, 1, 3, 3 ]
*
* var bool = ( x === y );
* // returns true
*/
function dedupe( x, limit, equalNaNs ) {
	if ( equalNaNs ) {
		return dedupeEqualNaNs( x, limit );
	}
	return dedupeInPlace( x, limit );
}


// EXPORTS //

module.exports = dedupe;
