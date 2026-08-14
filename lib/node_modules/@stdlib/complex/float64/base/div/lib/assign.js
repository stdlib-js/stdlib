/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Divides two double-precision complex floating-point numbers and assigns results to a provided output array.
*
* @param {number} re1 - real component of the first complex number
* @param {number} im1 - imaginary component of the first complex number
* @param {number} re2 - real component of the second complex number
* @param {number} im2 - imaginary component of the second complex number
* @param {Collection} out - output array
* @param {integer} strideOut - stride length
* @param {NonNegativeInteger} offsetOut - starting index
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var out = assign( -13.0, -1.0, -2.0, 1.0, new Float64Array( 2 ), 1, 0 );
* // returns <Float64Array>[ 5.0, 3.0 ]
*/
function assign( re1, im1, re2, im2, out, strideOut, offsetOut ) {
	var res;
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
		res = robustInternal( re1, im1, re2, im2 );
	} else {
		res = robustInternal( im1, re1, im2, re2 );
		res[ 1 ] *= -1.0;
	}

	res[ 0 ] *= s;
	res[ 1 ] *= s;

	out[ offsetOut ] = res[ 0 ];
	out[ offsetOut+strideOut ] = res[ 1 ];

	return out;
}


// EXPORTS //

module.exports = assign;
