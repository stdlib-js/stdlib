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

/* This is a generated file. Do not edit directly. */
'use strict';

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/
function evalrational( x ) {
	var ax;
	var s1;
	var s2;
	if ( x === 0.0 ) {
		return -1.3803835408054965e-8;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = float64ToFloat32(-1.3803835408054965e-8 + float64ToFloat32(x * float64ToFloat32(0.5000004768371582 + float64ToFloat32(x * float64ToFloat32(1.6077979803085327 + float64ToFloat32(x * float64ToFloat32(2.5645434856414795 + float64ToFloat32(x * float64ToFloat32(2.0534873008728027 + float64ToFloat32(x * 0.7456697821617126)))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(1.0 + float64ToFloat32(x * float64ToFloat32(2.8822786808013916 + float64ToFloat32(x * float64ToFloat32(4.168166160583496 + float64ToFloat32(x * float64ToFloat32(2.7853527069091797 + float64ToFloat32(x * float64ToFloat32(0.7496767044067383 + float64ToFloat32(x * -0.0005706911324523389)))))))))); // eslint-disable-line max-len
	} else {
		x = float64ToFloat32( 1.0 / x );
		s1 = float64ToFloat32(0.7456697821617126 + float64ToFloat32(x * float64ToFloat32(2.0534873008728027 + float64ToFloat32(x * float64ToFloat32(2.5645434856414795 + float64ToFloat32(x * float64ToFloat32(1.6077979803085327 + float64ToFloat32(x * float64ToFloat32(0.5000004768371582 + float64ToFloat32(x * -1.3803835408054965e-8)))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(-0.0005706911324523389 + float64ToFloat32(x * float64ToFloat32(0.7496767044067383 + float64ToFloat32(x * float64ToFloat32(2.7853527069091797 + float64ToFloat32(x * float64ToFloat32(4.168166160583496 + float64ToFloat32(x * float64ToFloat32(2.8822786808013916 + float64ToFloat32(x * 1.0)))))))))); // eslint-disable-line max-len
	}
	return float64ToFloat32( s1 / s2 );
}


// EXPORTS //

module.exports = evalrational;
