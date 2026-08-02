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
var powf = require( '@stdlib/math/base/special/powf' );
var lnf = require( '@stdlib/math/base/special/lnf' );
var sincosf = require( '@stdlib/math/base/special/sincosf' ).assign;


// VARIABLES //

// Workspace for storing computed sines and cosines:
var WORKSPACE = [ 0.0, 0.0 ];


// MAIN //

/**
* Fills a single-precision complex floating-point strided array with logarithmically spaced values over a specified interval using alternative indexing semantics.
*
* ## Method
*
* 1.  If \\( b \\) is a positive real number, exponentiation with base \\( b \\) and complex exponent \\( z \\) is defined by means of the exponential function with a complex argument as
*
*     ```tex
*     b^z = e^{z \ln b}
*     ```
*
*     where \\( \ln b \\) denotes the natural logarithm of \\( b \\).
*
* 2.  Euler's formula states that, for any real number \\( y \\), one has
*
*     ```tex
*     e^{iy} = \cos y + i \sin y
*     ```
*
* 3.  Consequently, Euler's formula allows expressing the polar form of \\( b^z \\) in terms of the real and imaginary components of \\( z = x + iy \\).
*
*     ```tex
*     b^{x + iy} = b^x ( \cos(y \ln b) + i \sin(y \ln b) )
*     ```
*
*     which follows from
*
*     ```tex
*     \begin{align*}
*     b^{x + iy} &= b^x b^{iy} \\
*                &= b^x e^{iy \ln b} \\
*                &= b^x ( \cos(y \ln b) + i \sin(y \ln b) ) \\
*     \end{align*}
*     ```
*
* 4.  Using Euler's formulation thus provides an update equation for generating each logarithmically spaced element in which we compute the sine and cosine of the imaginary component of the exponent and multiply by a real-valued scalar.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} base - base of the logarithmic scale
* @param {Complex64} start - exponent of the starting value
* @param {Complex64} stop - exponent of the final value
* @param {boolean} endpoint - boolean indicating whether to include the `base^stop` value when writing values to the input array
* @param {Complex64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Complex64Array} input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex64( 0.0, 0.0 );
* var stp = new Complex64( 2.0, 0.0 );
*
* clogspace( x.length, 10.0, strt, stp, true, x, 1, 0 );
* // x => <Complex64Array>[ 1.0, 0.0, 10.0, 0.0, 100.0, 0.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex64( 0.0, 0.0 );
* var stp = new Complex64( 2.0, 0.0 );
*
* clogspace( x.length, 10.0, strt, stp, false, x, 1, 0 );
* // x => <Complex64Array>[ 1.0, 0.0, 10.0, 0.0 ]
*/
function clogspace( N, base, start, stop, endpoint, x, strideX, offsetX ) {
	var startRe;
	var startIm;
	var stopRe;
	var stopIm;
	var expRe;
	var expIm;
	var scale;
	var view;
	var lnb;
	var dre;
	var dim;
	var sx;
	var ix;
	var i;

	if ( N <= 0 ) {
		return x;
	}

	// Decompose the exponent bounds into their real and imaginary components:
	startRe = realf( start );
	startIm = imagf( start );
	stopRe = realf( stop );
	stopIm = imagf( stop );

	// Compute ln(base) for use in base^z = exp(z * ln(base)):
	lnb = lnf( base );

	// Reinterpret the complex input array as a real-valued array:
	view = reinterpret( x, 0 );

	// Adjust the stride and offset according to the real-valued array (2 floats per element):
	sx = strideX * 2;
	ix = offsetX * 2;

	// Set the first value:
	if ( N === 1 ) {
		if ( endpoint ) {
			scale = powf( base, stopRe );
			sincosf( stopIm * lnb, WORKSPACE, 1, 0 );
			view[ ix ] = scale * WORKSPACE[ 1 ];
			view[ ix+1 ] = scale * WORKSPACE[ 0 ];
		} else {
			scale = powf( base, startRe );
			sincosf( startIm * lnb, WORKSPACE, 1, 0 );
			view[ ix ] = scale * WORKSPACE[ 1 ];
			view[ ix+1 ] = scale * WORKSPACE[ 0 ];
		}
		return x;
	}
	scale = powf( base, startRe );
	sincosf( startIm * lnb, WORKSPACE, 1, 0 );
	view[ ix ] = scale * WORKSPACE[ 1 ];
	view[ ix+1 ] = scale * WORKSPACE[ 0 ];
	ix += sx;

	// Calculate the complex increment:
	if ( endpoint ) {
		N -= 1;
	}
	dre = ( stopRe - startRe ) / N;
	dim = ( stopIm - startIm ) / N;

	// Generate logarithmically spaced values:
	for ( i = 1; i < N; i++ ) {
		expRe = startRe + ( dre * i );
		expIm = startIm + ( dim * i );
		scale = powf( base, expRe );
		sincosf( expIm * lnb, WORKSPACE, 1, 0 );
		view[ ix ] = scale * WORKSPACE[ 1 ];
		view[ ix+1 ] = scale * WORKSPACE[ 0 ];
		ix += sx;
	}
	// Check whether to include the `base^stop` value:
	if ( endpoint ) {
		scale = powf( base, stopRe );
		sincosf( stopIm * lnb, WORKSPACE, 1, 0 );
		view[ ix ] = scale * WORKSPACE[ 1 ];
		view[ ix+1 ] = scale * WORKSPACE[ 0 ];
	}
	return x;
}


// EXPORTS //

module.exports = clogspace;
