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
* Fills a single-precision complex floating-point strided array with linearly spaced values over a specified interval using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64} start - start of interval
* @param {Complex64} stop - end of interval
* @param {boolean} endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
* @param {Complex64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Complex64Array} input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex64( 0.0, 0.0 );
* var stp = new Complex64( 100.0, 50.0 );
*
* clinspace( x.length, strt, stp, true, x, 1, 0 );
* // x => <Complex64Array>[ 0.0, 0.0, 20.0, 10.0, 40.0, 20.0, 60.0, 30.0, 80.0, 40.0, 100.0, 50.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex64( 0.0, 0.0 );
* var stp = new Complex64( 100.0, 50.0 );
*
* clinspace( x.length, strt, stp, false, x, 1, 0 );
* // x => <Complex64Array>[ 0.0, 0.0, 20.0, 10.0, 40.0, 20.0, 60.0, 30.0, 80.0, 40.0 ]
*/
function clinspace( N, start, stop, endpoint, x, strideX, offsetX ) {
	var startRe;
	var startIm;
	var stopRe;
	var stopIm;
	var view;
	var dre;
	var dim;
	var sx;
	var ix;
	var i;

	if ( N <= 0 ) {
		return x;
	}

	// Decompose the interval bounds into their real and imaginary components:
	startRe = realf( start );
	startIm = imagf( start );
	stopRe = realf( stop );
	stopIm = imagf( stop );

	// Reinterpret the complex input array as a real-valued array:
	view = reinterpret( x, 0 );

	// Adjust the stride and offset according to the real-valued array (2 floats per element):
	sx = strideX * 2;
	ix = offsetX * 2;

	// Set the first value:
	if ( N === 1 ) {
		if ( endpoint ) {
			view[ ix ] = stopRe;
			view[ ix+1 ] = stopIm;
		} else {
			view[ ix ] = startRe;
			view[ ix+1 ] = startIm;
		}
		return x;
	}
	view[ ix ] = startRe;
	view[ ix+1 ] = startIm;
	ix += sx;

	// Calculate the complex increment:
	if ( endpoint ) {
		N -= 1;
	}
	dre = ( stopRe - startRe ) / N;
	dim = ( stopIm - startIm ) / N;

	// Generate linearly spaced values:
	for ( i = 1; i < N; i++ ) {
		view[ ix ] = startRe + ( dre * i );
		view[ ix+1 ] = startIm + ( dim * i );
		ix += sx;
	}
	// Check whether to include the `stop` value:
	if ( endpoint ) {
		view[ ix ] = stopRe;
		view[ ix+1 ] = stopIm;
	}
	return x;
}


// EXPORTS //

module.exports = clinspace;
