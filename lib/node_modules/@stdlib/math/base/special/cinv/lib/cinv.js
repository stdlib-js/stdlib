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

var abs = require( '@stdlib/math/base/special/abs' );
var max = require( '@stdlib/math/base/special/max' );
var FLOAT64_BIGGEST = require( '@stdlib/constants/float64/max' );
var FLOAT64_SMALLEST = require( '@stdlib/constants/float64/smallest-normal' );
var EPS = require( '@stdlib/constants/float64/eps' );


// VARIABLES //

var LARGE_THRESHOLD = FLOAT64_BIGGEST * 0.5;
var SMALL_THRESHOLD = FLOAT64_SMALLEST * ( 2.0 / EPS );
var RECIP_EPS_SQR = 2.0 / ( EPS * EPS );


// MAIN //

/**
* Computes the inverse of a complex number.
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {(Array|TypedArray|Object)} output array
*
* @example
* var out = new Array( 2 );
*
* var v = cinv( out, 2.0, 4.0 );
* // returns [ 0.1, -0.2 ]
*
* var bool = ( v === out );
* // returns true
*/
function cinv( out, re, im ) {
	var ab;
	var s;
	var r;
	var t;

	ab = max( abs(re), abs(im) );
	s = 1.0;
	if ( ab >= LARGE_THRESHOLD ) {
		re *= 0.5;
		im *= 0.5;
		s *= 0.5;
	} else if ( ab <= SMALL_THRESHOLD ) {
		re *= RECIP_EPS_SQR;
		im *= RECIP_EPS_SQR;
		s *= RECIP_EPS_SQR;
	}
	if ( abs( im ) <= abs( re ) ) {
		r = im / re;
		t = 1.0 / ( re + (im*r) );
		out[ 0 ] = t;
		out[ 1 ] = -r * t;
	} else {
		r = re / im;
		t = 1.0 / ( im + (re*r) );
		out[ 0 ] = r * t;
		out[ 1 ] = -t;
	}
	out[ 0 ] *= s;
	out[ 1 ] *= s;
	return out;
}


// EXPORTS //

module.exports = cinv;
