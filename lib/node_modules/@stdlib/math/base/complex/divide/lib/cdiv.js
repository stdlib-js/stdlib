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
var robustInternal = require( './robust_internal.js' );


// VARIABLES //

var LARGE_THRESHOLD = FLOAT64_BIGGEST * 0.5;
var SMALL_THRESHOLD = FLOAT64_SMALLEST * ( 2.0 / EPS );
var RECIP_EPS_SQR = 2.0 / ( EPS * EPS );


// MAIN //

/**
* Divides two complex numbers.
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} re1 - real component
* @param {number} im1 - imaginary component
* @param {number} re2 - real component
* @param {number} im2 - imaginary component
* @returns {(Array|TypedArray|Object)} output array
*
* @example
* var out = new Array( 2 );
*
* var v = cdiv( out, -13.0, -1.0, -2.0, 1.0 );
* // returns [ 5.0, 3.0 ]
*
* var bool = ( v === out );
* // returns true
*/
function cdiv( out, re1, im1, re2, im2 ) {
	var ab;
	var cd;
	var s;

	ab = max( abs(re1), abs(im1) );
	cd = max( abs(re2), abs(im2) );
	s = 1.0;

	if ( ab >= LARGE_THRESHOLD ) {
		re1 *= 0.5;
		im1 *= 0.5;
		s *= 2.0;
	} else if ( ab <= SMALL_THRESHOLD ) {
		re1 *= RECIP_EPS_SQR;
		im1 *= RECIP_EPS_SQR;
		s /= RECIP_EPS_SQR;
	}
	if ( cd >= LARGE_THRESHOLD ) {
		re2 *= 0.5;
		im2 *= 0.5;
		s *= 0.5;
	} else if ( cd <= SMALL_THRESHOLD ) {
		re2 *= RECIP_EPS_SQR;
		im2 *= RECIP_EPS_SQR;
		s *= RECIP_EPS_SQR;
	}
	if ( abs( im2 ) <= abs( re2 ) ) {
		robustInternal( out, re1, im1, re2, im2 );
	} else {
		robustInternal( out, im1, re1, im2, re2 );
		out[ 1 ] *= -1;
	}
	out[ 0 ] *= s;
	out[ 1 ] *= s;
	return out;
}


// EXPORTS //

module.exports = cdiv;
