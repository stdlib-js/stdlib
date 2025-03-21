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

var gcopy = require( '@stdlib/blas/base/gcopy' ).ndarray;


// MAIN //

/**
* Copies matrix elements to another matrix.
*
* ## Notes
*
* -   Why not just use `gcopy` directly? Because `gcopy` 1) assumes only a single stride per strided array and 2) as we cannot assume that a source matrix is single-segment contiguous, we fall back to copying source matrix "chunks" (rows) to a destination matrix. Assuming the source matrix is row-major, then the implementation should be reasonably performant.
*
* @private
* @param {ndarray} Y - destination matrix
* @param {ndarray} X - source matrix
* @returns {ndarray} destination matrix
*/
function copyMatrix( Y, X ) { // TODO: once an ndarray engine is written, determine whether this function can be replaced by a standalone package
	var xbuf;
	var ybuf;
	var sx1;
	var sx2;
	var sy1;
	var sy2;
	var ox;
	var oy;
	var M;
	var N;
	var i;

	M = X.shape[ 0 ];
	N = X.shape[ 1 ];

	xbuf = X.data;
	ybuf = Y.data;

	sx1 = X.strides[ 0 ];
	sx2 = X.strides[ 1 ];

	sy1 = Y.strides[ 0 ];
	sy2 = Y.strides[ 1 ];

	ox = X.offset;
	oy = Y.offset;

	for ( i = 0; i < M; i++ ) {
		gcopy( N, xbuf, sx2, ox, ybuf, sy2, oy );
		ox += sx1;
		oy += sy1;
	}
	return Y;
}


// EXPORTS //

module.exports = copyMatrix;
