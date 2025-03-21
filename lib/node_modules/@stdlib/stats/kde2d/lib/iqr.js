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

/**
* Computes a quantile of the values in a numeric array.
*
* @private
* @param {NumericArray} arr - sorted 1d array
* @param {Probability} p - quantile prob [0,1]
* @returns {number} quantile
*/
function quantile( arr, p ) {
	var len = arr.length;
	var id;
	var h;
	h = ( ( len - 1.0 ) * p ) + 1.0;
	id = floor( h ) - 1.0;
	return arr[ id ] + ( ( h - floor( h ) ) * ( arr[ id + 1 ] - arr[ id ] ) );
}


// MAIN //

/**
* Computes the inter-quartile range for a numeric array.
*
* @private
* @param {NumericArray} data - ndarray like data
* @param {number} j - column index for which to get the IQR
* @returns {number} inter-quartile range
*/
function iqr( data, j ) {
	// Copy and sort data --> build X
	var arr;
	var i;
	arr = new Array( data.shape[0] );
	for ( i = 0; i < data.shape[0]; i++ ) {
		arr[ i ] = data.get( i, j );
	}
	arr.sort( ascending );
	return quantile( arr, 0.75 ) - quantile( arr, 0.25 );
}


// EXPORTS //

module.exports = iqr;
