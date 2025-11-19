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
		return -1.109328031539917;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = float64ToFloat32(-1.109328031539917 + float64ToFloat32(x * float64ToFloat32(-3.8310675621032715 + float64ToFloat32(x * float64ToFloat32(-3.370384931564331 + float64ToFloat32(x * float64ToFloat32(0.2808057367801666 + float64ToFloat32(x * float64ToFloat32(1.6638069152832031 + float64ToFloat32(x * 0.6446838974952698)))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(1.0 + float64ToFloat32(x * float64ToFloat32(3.4535388946533203 + float64ToFloat32(x * float64ToFloat32(4.52089262008667 + float64ToFloat32(x * float64ToFloat32(2.7012734413146973 + float64ToFloat32(x * float64ToFloat32(0.6446880102157593 + float64ToFloat32(x * -2.031451629136427e-7)))))))))); // eslint-disable-line max-len
	} else {
		x = float64ToFloat32( 1.0 / x );
		s1 = float64ToFloat32(0.6446838974952698 + float64ToFloat32(x * float64ToFloat32(1.6638069152832031 + float64ToFloat32(x * float64ToFloat32(0.2808057367801666 + float64ToFloat32(x * float64ToFloat32(-3.370384931564331 + float64ToFloat32(x * float64ToFloat32(-3.8310675621032715 + float64ToFloat32(x * -1.109328031539917)))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(-2.031451629136427e-7 + float64ToFloat32(x * float64ToFloat32(0.6446880102157593 + float64ToFloat32(x * float64ToFloat32(2.7012734413146973 + float64ToFloat32(x * float64ToFloat32(4.52089262008667 + float64ToFloat32(x * float64ToFloat32(3.4535388946533203 + float64ToFloat32(x * 1.0)))))))))); // eslint-disable-line max-len
	}
	return float64ToFloat32( s1 / s2 );
}


// EXPORTS //

module.exports = evalrational;
