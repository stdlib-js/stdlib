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

// MODULES //

var floor = require( '@stdlib/math/base/special/floor' );


// FUNCTIONS //

/**
* Comparator function used to sort values in ascending order.
*
* @private
* @param {number} a - first number
* @param {number} b - second number
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
}


// MAIN //

/**
* Computes the median of an array.
*
* @param {Array} arr - input array
* @returns {number} median value
*/
function median( arr ) {
	var len = arr.length;
	var id;
	var d;
	var i;

	if ( !len ) {
		return null;
	}

	// Copy and sort data in ascending order:
	d = [];
	for ( i = 0; i < len; i++ ) {
		d.push( arr[ i ] );
	}
	d.sort( ascending );

	// Get the middle index:
	id = floor( len / 2 );

	if ( len % 2 ) {
		// The number of elements is not evenly divisible by two, hence we have a middle index:
		return d[ id ];
	}
	// Even number of elements, so must take the mean of the two middle values:
	return ( d[ id-1 ] + d[ id ] ) / 2.0;
}


// EXPORTS //

module.exports = median;
