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
* Returns an element from a three-dimensional nested array.
*
* @param {ArrayLikeObject<ArrayLikeObject<Collection>>} x - input array
* @param {integer} i0 - first dimension index
* @param {integer} i1 - second dimension index
* @param {integer} i2 - third dimension index
* @returns {*} nested array element
*
* @example
* var x = [ [ [ 1, 2 ], [ 3, 4 ] ] ];
*
* var v = at3d( x, 0, 0, 1 );
* // returns 2
*
* v = at3d( x, 0, 1, 0 );
* // returns 3
*
* v = at3d( x, 0, -2, -2 );
* // returns 1
*/
function at3d( x, i0, i1, i2 ) {
	var x0;
	var x1;
	var N;

	N = x.length;
	if ( i0 < 0 ) {
		i0 += N;
	}
	if ( i0 < 0 || i0 >= N ) {
		return;
	}
	x0 = x[ i0 ];
	N = x0.length;
	if ( i1 < 0 ) {
		i1 += N;
	}
	if ( i1 < 0 || i1 >= N ) {
		return;
	}
	x1 = x0[ i1 ];
	N = x1.length;
	if ( i2 < 0 ) {
		i2 += N;
	}
	if ( i2 < 0 || i2 >= N ) {
		return;
	}
	return x1[ i2 ];
}


// EXPORTS //

module.exports = at3d;
