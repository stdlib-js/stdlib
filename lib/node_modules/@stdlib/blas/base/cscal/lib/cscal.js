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

// MODULES //

var cmulf = require( '@stdlib/math/base/ops/cmulf' );


// MAIN //

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64} ca - constant
* @param {Complex64Array} cx - input array
* @param {integer} strideX - `cx` stride length
* @returns {Complex64Array} input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var ca = new Complex64( 2.0, 2.0 );
*
* cscal( 3, ca, cx, 1 );
*
* var z = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns -2.0
*
* var im = imagf( z );
* // returns 6.0
*/
function cscal( N, ca, cx, strideX ) {
	var ix;
	var i;

	if ( N <= 0 || strideX <= 0 ) {
		return cx;
	}
	if ( strideX === 1 ) {
		// Code for stride equal to `1`...
		for ( i = 0; i < N; i++ ) {
			cx.set( cmulf( ca, cx.get( i ) ), i );
		}
		return cx;
	}
	// Code for stride not equal to `1`...
	ix = 0;
	for ( i = 0; i < N; i++ ) {
		cx.set( cmulf( ca, cx.get( ix ) ), ix );
		ix += strideX;
	}
	return cx;
}


// EXPORTS //

module.exports = cscal;
