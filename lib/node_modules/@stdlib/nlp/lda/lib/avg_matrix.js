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

var matrix = require( './matrix.js' );


// MAIN //

/**
* Calculate weighted average of two matrices.
*
* @private
* @param {Matrix} A - first matrix
* @param {Matrix} B - second matrix
* @param {PositiveInteger} weight - relative weight of matrix A
* @returns {Matrix} averaged matrix
*/
function avgMatrix( A, B, weight ) {
	var propA;
	var propB;
	var nrow;
	var ncol;
	var val;
	var C;
	var i;
	var j;

	nrow = A.shape[ 0 ];
	ncol = A.shape[ 1 ];
	C = matrix( [ nrow, ncol ] );
	propA = ( weight - 1.0 ) / weight;
	propB = 1.0 / weight;

	for ( i = 0; i < nrow; i++ ) {
		for ( j = 0; j < ncol; j++ ) {
			val = (propA * A.get(i, j)) + (propB * B.get(i, j));
			C.set( i, j, val );
		}
	}
	return C;
}


// EXPORTS //

module.exports = avgMatrix;
