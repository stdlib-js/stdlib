/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );


// MAIN //

/**
* Generates a linearly spaced complex number array over a specified interval.
*
* @private
* @param {string} dt1 - start value data type
* @param {(number|ComplexLike)} start - start of interval
* @param {string} dt2 - stop value data type
* @param {(number|ComplexLike)} stop - end of interval
* @param {NonNegativeInteger} len - length of output array
* @param {boolean} endpoint - boolean indicating whether to include `stop` in the output array
* @returns {Array} linearly spaced array
*/
function linspace( dt1, start, dt2, stop, len, endpoint ) {
	var cmplx;
	var isf32;
	var arr;
	var re1;
	var re2;
	var im1;
	var im2;
	var re;
	var im;
	var dr;
	var di;
	var N;
	var i;

	if ( len === 0 ) {
		return [];
	}
	isf32 = 0;
	if ( dt1 === 'float64' ) {
		re1 = start;
		im1 = 0.0;
	} else if ( dt1 === 'complex64' ) {
		isf32 += 1;
		re1 = realf( start );
		im1 = imagf( start );
	} else {
		re1 = real( start );
		im1 = imag( start );
	}
	if ( dt2 === 'float64' ) {
		re2 = stop;
		im2 = 0.0;
	} else if ( dt2 === 'complex64' ) {
		isf32 += 1;
		re2 = realf( stop );
		im2 = imagf( stop );
	} else {
		re2 = real( stop );
		im2 = imag( stop );
	}
	// Determine which complex number constructor to use according to type promotion rules:
	if ( isf32 === 2 ) {
		cmplx = Complex64;
	} else {
		cmplx = Complex128;
	}
	// Set the first value:
	if ( len === 1 ) {
		if ( endpoint ) {
			return [ new cmplx( re2, im2 ) ];
		}
		return [ new cmplx( re1, im1 ) ];
	}
	arr = [ new cmplx( re1, im1 ) ];

	// Calculate the increments:
	if ( endpoint ) {
		N = len - 1;
	} else {
		N = len;
	}
	dr = ( re2-re1 ) / N;
	di = ( im2-im1 ) / N;

	// Generate linearly spaced values:
	for ( i = 1; i < N; i++ ) {
		re = re1 + (dr*i);
		im = im1 + (di*i);
		arr.push( new cmplx( re, im ) );
	}
	// Check whether to include the `stop` value in the output array:
	if ( endpoint ) {
		arr.push( new cmplx( re2, im2 ) );
	}
	return arr;
}


// EXPORTS //

module.exports = linspace;
