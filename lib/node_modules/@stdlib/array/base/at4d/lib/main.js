/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Returns an element from a four-dimensional nested array.
*
* @param {ArrayLikeObject<ArrayLikeObject<ArrayLikeObject<Collection>>>} x - input array
* @param {integer} i0 - first dimension index
* @param {integer} i1 - second dimension index
* @param {integer} i2 - third dimension index
* @param {integer} i3 - fourth dimension index
* @returns {*} nested array element
*
* @example
* var x = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];
*
* var v = at4d( x, 0, 0, 0, 1 );
* // returns 2
*
* v = at4d( x, 0, 0, 1, 0 );
* // returns 3
*
* v = at4d( x, 0, 0, -2, -2 );
* // returns 1
*/
function at4d( x, i0, i1, i2, i3 ) {
	var value;
	var idx;
	var N;
	var i;
	var j;

	idx = [ i0, i1, i2, i3 ];
	value = x;
	for ( i = 0; i < idx.length; i++ ) {
		j = idx[ i ];
		N = value.length;
		if ( j < 0 ) {
			j += N;
		}
		if ( j < 0 || j >= N ) {
			return;
		}
		value = value[ j ];
	}
	return value;
}


// EXPORTS //

module.exports = at4d;
