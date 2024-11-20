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
* Copies de-duplicated values to a new array.
*
* @private
* @param {Array} x - input array
* @param {PositiveInteger} limit - number of allowed consecutive duplicates
* @returns {Array} output array
*
* @example
* var x = [ 1, 1, 2, 3, 3 ];
*
* var y = dedupeCopy( x, 1 );
* // returns [ 1, 2, 3 ]
*
* var bool = ( x === y );
* // returns false
*
* @example
* var x = [ 1, 1, 1, 2, 1, 1, 3, 3 ];
*
* var y = dedupeCopy( x, 2 );
* // returns [ 1, 1, 2, 1, 1, 3, 3 ]
*
* var bool = ( x === y );
* // returns false
*/
function dedupeCopy( x, limit ) {
	var count;
	var prev;
	var len;
	var out;
	var v;
	var i;

	out = [];
	len = x.length;
	if ( len === 0 ) {
		return out;
	}
	prev = NaN; // we leverage the fact that `NaN` is not equal to anything, including itself, to handle the initial condition
	count = 0;
	for ( i = 0; i < len; i++ ) {
		v = x[ i ];
		if ( v === prev ) {
			count += 1;
			if ( count <= limit ) {
				out.push( prev );
			}
		} else {
			prev = v;
			count = 1;
			out.push( prev );
		}
	}
	return out;
}

/**
* Copies de-duplicated values to a new array, treating `NaN` values as equal.
*
* @private
* @param {Array} x - input array
* @param {PositiveInteger} limit - number of allowed consecutive duplicates
* @returns {Array} output array
*
* @example
* var x = [ 1, 1, 2, NaN, NaN, 3, 3 ];
*
* var y = dedupeEqualNaNs( x, 1 );
* // returns [ 1, 2, NaN, 3 ]
*
* var bool = ( x === y );
* // returns false
*
* @example
* var x = [ 1, 1, 1, 2, 1, 1, NaN, NaN, NaN, 3, 3 ];
*
* var y = dedupeEqualNaNs( x, 2 );
* // returns [ 1, 1, 2, 1, 1, NaN, NaN, 3, 3 ]
*
* var bool = ( x === y );
* // returns false
*/
function dedupeEqualNaNs( x, limit ) {
	var count;
	var prev;
	var len;
	var out;
	var FLG;
	var v;
	var i;

	out = [];
	len = x.length;
	if ( len === 0 ) {
		return out;
	}
	FLG = false;
	prev = NaN; // we leverage the fact that `NaN` is not equal to anything, including itself, to handle the initial condition
	count = 0;
	for ( i = 0; i < len; i++ ) {
		v = x[ i ];
		if ( v === prev || ( FLG && isnan( v ) ) ) {
			count += 1;
			if ( count <= limit ) {
				out.push( prev );
			}
		} else {
			prev = v;
			count = 1;
			out.push( prev );
			FLG = false;
			if ( isnan( prev ) ) {
				FLG = true;
			}
		}
	}
	return out;
}


// MAIN //

/**
* Copies elements to a new "generic" array after removing consecutive duplicated values.
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
* // returns false
*
* @example
* var x = [ 1, 1, 1, 2, 1, 1, 3, 3 ];
*
* var y = dedupe( x, 2, false );
* // returns [ 1, 1, 2, 1, 1, 3, 3 ]
*
* var bool = ( x === y );
* // returns false
*/
function dedupe( x, limit, equalNaNs ) {
	if ( equalNaNs ) {
		return dedupeEqualNaNs( x, limit );
	}
	return dedupeCopy( x, limit );
}


// EXPORTS //

module.exports = dedupe;
