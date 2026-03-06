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

var constants = require( './constants.js' );


// FUNCTIONS //

/**
* Returns number of elements in array equal to a provided value.
*
* @private
* @param {Array} arr - input array
* @param {NonNegativeInteger} start - starting search index (inclusive)
* @param {NonNegativeInteger} end - ending search index (inclusive)
* @param {*} value - input value
* @returns {NonNegativeInteger} number of elements in array equal to a provided value
*/
function count( arr, start, end, value ) {
	var cnt;
	var i;

	if ( end >= arr.length ) {
		end = arr.length - 1;
	}
	cnt = 0;
	for ( i = start; i <= end; i++ ) {
		if ( arr[ i ] === value ) {
			cnt += 1;
		}
	}
	return cnt;
}

/**
* Returns whether every indexed array element is equal to a provided value.
*
* @private
* @param {Array} arr - input array
* @param {NonNegativeInteger} start - starting search index (inclusive)
* @param {NonNegativeInteger} end - ending search index (inclusive)
* @param {*} value - search value
* @returns {boolean} boolean indicating whether all the values in array in the given range are equal to the provided value
*/
function every( arr, start, end, value ) {
	var i;

	if ( end >= arr.length ) {
		end = arr.length - 1;
	}
	for ( i = start; i <= end; i++ ) {
		if ( arr[ i ] !== value ) {
			return false;
		}
	}
	return true;
}

/**
* Returns the index of the first occurrence of a value in a provided array.
*
* @private
* @param {Array} arr - input array
* @param {NonNegativeInteger} start - starting search index (inclusive)
* @param {NonNegativeInteger} end - ending search index (inclusive)
* @param {*} value - search value
* @returns {integer} index of the first occurrence
*/
function indexOf( arr, start, end, value ) {
	var i;

	if ( end >= arr.length ) {
		end = arr.length - 1;
	}
	for ( i = start; i <= end; i++ ) {
		if ( arr[ i ] === value ) {
			return i;
		}
	}
	return -1;
}

/**
* Returns the index of the last occurrence of a value in a provided array.
*
* @private
* @param {Array} arr - input array
* @param {NonNegativeInteger} start - starting search index at which to start searching backwards (inclusive)
* @param {NonNegativeInteger} end - ending search index (inclusive)
* @param {*} value - search value
* @returns {integer} index of the last occurrence
*/
function lastIndexOf( arr, start, end, value ) {
	var i;

	if ( start >= arr.length-1 ) {
		start = arr.length - 1;
	}
	for ( i = start; i >= end; i-- ) {
		if ( arr[ i ] === value ) {
			return i;
		}
	}
	return -1;
}


// MAIN //

/**
* Returns the break type between grapheme breaking classes according to _UAX #29 3.1.1 Grapheme Cluster Boundary Rules_ on extended grapheme clusters.
*
* @private
* @param {Array} breaks - list of grapheme break properties
* @param {Array} emoji - list of emoji properties
* @returns {NonNegativeInteger} break type
*
* @example
* var out = breakType( [ 11, 3, 11 ], [ 11, 11, 11 ] );
* // returns 1
*/
function breakType( breaks, emoji ) {
	var nextEmoji;
	var next;
	var prev;
	var idx;
	var N;
	var M;

	N = breaks.length;
	M = N - 1;

	prev = breaks[ M-1 ];
	next = breaks[ M ];
	nextEmoji = emoji[ M ];

	idx = lastIndexOf( breaks, M, 0, constants.RegionalIndicator );
	if (
		idx > 0 &&
		prev !== constants.Prepend &&
		prev !== constants.RegionalIndicator &&
		every( breaks, 1, idx-1, constants.RegionalIndicator )
	) {
		if ( count( breaks, 0, M, constants.RegionalIndicator ) % 2 === 1 ) {
			return constants.BreakLastRegional;
		}
		return constants.BreakPenultimateRegional;
	}
	// GB3: CR × LF
	if (
		prev === constants.CR &&
		next === constants.LF
	) {
		return constants.NotBreak;
	}
	// GB4: (Control|CR|LF) ÷
	if (
		prev === constants.Control ||
		prev === constants.CR ||
		prev === constants.LF
	) {
		return constants.BreakStart;
	}
	// GB5: ÷ (Control|CR|LF)
	if (
		next === constants.Control ||
		next === constants.CR ||
		next === constants.LF
	) {
		return constants.BreakStart;
	}
	// GB6: L × (L|V|LV|LVT)
	if (
		prev === constants.L &&
		(
			next === constants.L ||
			next === constants.V ||
			next === constants.LV ||
			next === constants.LVT
		)
	) {
		return constants.NotBreak;
	}
	// GB7: (LV|V) × (V|T)
	if (
		( prev === constants.LV || prev === constants.V ) &&
		( next === constants.V || next === constants.T )
	) {
		return constants.NotBreak;
	}
	// GB8: (LVT|T) × (T)
	if (
		( prev === constants.LVT || prev === constants.T ) &&
		next === constants.T
	) {
		return constants.NotBreak;
	}
	// GB9: × (Extend|ZWJ)
	if (
		next === constants.Extend ||
		next === constants.ZWJ
	) {
		return constants.NotBreak;
	}
	// GB9a: × SpacingMark
	if ( next === constants.SpacingMark ) {
		return constants.NotBreak;
	}
	// GB9b: Prepend ×
	if ( prev === constants.Prepend ) {
		return constants.NotBreak;
	}
	// GB11: \p{Extended_Pictographic} Extend* ZWJ × \p{Extended_Pictographic}
	idx = lastIndexOf( emoji, M-1, 0, constants.ExtendedPictographic );
	if (
		idx >= 0 &&
		prev === constants.ZWJ &&
		nextEmoji === constants.ExtendedPictographic &&
		emoji[ idx ] === constants.ExtendedPictographic &&
		every( breaks, idx+1, M-2, constants.Extend )
	) {
		return constants.NotBreak;
	}
	// GB12: ^ (RI RI)* RI × RI
	// GB13: [^RI] (RI RI)* RI × RI
	if ( indexOf( breaks, 1, M-1, constants.RegionalIndicator ) >= 0 ) {
		return constants.Break;
	}
	if (
		prev === constants.RegionalIndicator &&
		next === constants.RegionalIndicator
	) {
		return constants.NotBreak;
	}
	// GB999: Any ? Any
	return constants.BreakStart;
}


// EXPORTS //

module.exports = breakType;
