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

// FUNCTIONS //

var contains = require( '@stdlib/assert/contains' );


// MAIN //

/**
* Computes for each array element whether it is a missing value.
*
* @private
* @param {Array} arr - input array
* @param {Array} encoding - array whose elements encode missing values
* @returns {BooleanArray} output array
*/
function isMissing( arr, encoding ) {
	var len;
	var out;
	var i;

	len = arr.length;
	out = new Array( len );
	for ( i = 0; i < len; i++ ) {
		out[ i ] = contains( encoding, arr[ i ] );
	}
	return out;
}


// EXPORTS //

module.exports = isMissing;
