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

var Int32Array = require( '@stdlib/array/int32' );


// FUNCTIONS //

/**
* Returns a comparison result. If `-1`, `a` comes before `b`. If `1`, `b` comes before `a`. If `0`, the order stays the same.
*
* @private
* @param {number} a - first number
* @param {number} b - second number
* @returns {boolean} comparison result
*/
function ascending( a, b ) {
	if ( a < b ) {
		return -1;
	}
	if ( a > b ) {
		return 1;
	}
	return 0;
}

/**
* Returns a comparison result. If `-1`, `a` comes before `b`. If `1`, `b` comes before `a`. If `0`, the order stays the same.
*
* @private
* @param {number} a - first number
* @param {number} b - second number
* @returns {boolean} comparison result
*/
function descending( a, b ) {
	if ( a < b ) {
		return 1;
	}
	if ( a > b ) {
		return -1;
	}
	return 0;
}


// MAIN //

/**
* Returns a permutation which rearranges input array.
*
* @private
* @param {ArrayLike} x - input array-like object
* @param {boolean} invert - controls whether to permutation that sorts input array in descending order
* @returns {Array} permutation array
*/
function order( x, invert ) {
	var comparator;
	var arr;
	var i;

	comparator = ( invert ) ? descending : ascending;
	arr = new Int32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		arr[ i ] = i;
	}
	return arr.sort( compare );

	/**
	* Compare the elements of the input array.
	*
	* @private
	* @param {number} a - first number
	* @param {number} b - second number
	* @returns {boolean} comparison result
	*/
	function compare( a, b ) {
		return comparator( x[a], x[b] );
	}
}


// EXPORTS //

module.exports = order;
