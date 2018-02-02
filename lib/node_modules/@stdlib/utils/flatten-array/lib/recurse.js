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

var isArray = require( '@stdlib/assert/is-array' );


// MAIN //

/**
* Recursively flattens an array.
*
* @private
* @param {Array} out - output array
* @param {Array} arr - input array
* @param {NonNegativeInteger} depth - recursion depth
* @returns {Array} output array
*/
function recurse( out, arr, depth ) {
	var v;
	var i;
	for ( i = 0; i < arr.length; i++ ) {
		v = arr[ i ];
		if ( depth && isArray( v ) ) {
			recurse( out, v, depth-1 );
		} else {
			out.push( v );
		}
	}
	return out;
}


// EXPORTS //

module.exports = recurse;
