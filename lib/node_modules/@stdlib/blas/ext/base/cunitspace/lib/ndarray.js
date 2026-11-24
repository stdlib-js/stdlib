/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );


// MAIN //

/**
* Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {ComplexLike} start - starting value
* @param {Complex64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Complex64Array} input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cunitspace( x.length, new Complex64( 3.0, 0.0 ), x, 1, 0 );
* // x => <Complex64Array>[ 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ]
*/
function cunitspace( N, start, x, strideX, offsetX ) {
	var view;
	var re;
	var im;
	var ix;
	var i;

	if ( N <= 0 ) {
		return x;
	}
	// Decompose the starting value into its real and imaginary components:
	re = realf( start );
	im = imagf( start );

	// Reinterpret the complex input array as a real-valued array:
	view = reinterpret( x, 0 );

	// Adjust the stride and offset according to real-valued array:
	ix = offsetX * 2;
	strideX *= 2;

	for ( i = 0; i < N; i++ ) {
		view[ ix ] = re + i;
		view[ ix+1 ] = im;
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = cunitspace;
