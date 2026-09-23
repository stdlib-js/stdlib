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
* Returns the first index of a specified search element in a single-precision complex floating-point strided array using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64} searchElement - search element
* @param {Complex64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {integer} index
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var idx = cindexOf( x.length, new Complex64( 3.0, 4.0 ), x, 1, 0 );
* // returns 1
*/
function cindexOf( N, searchElement, x, strideX, offsetX ) {
	var view;
	var re;
	var im;
	var ix;
	var i;

	if ( N <= 0 ) {
		return -1;
	}

	// Decompose the search element into its real and imaginary components:
	re = realf( searchElement );
	im = imagf( searchElement );

	// Reinterpret the complex input array as a real-valued array of interleaved real and imaginary components:
	view = reinterpret( x, 0 );

	// Adjust the stride and offset to account for the interleaved storage:
	ix = offsetX * 2;
	strideX *= 2;

	for ( i = 0; i < N; i++ ) {
		if ( view[ ix ] === re && view[ ix+1 ] === im ) {
			return i;
		}
		ix += strideX;
	}
	return -1;
}


// EXPORTS //

module.exports = cindexOf;
