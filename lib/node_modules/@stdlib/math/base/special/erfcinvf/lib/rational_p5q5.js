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
		return -0.016743101179599762;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = float64ToFloat32(-0.016743101179599762 + float64ToFloat32(x * float64ToFloat32(-0.0011295144213363528 + float64ToFloat32(x * float64ToFloat32(0.0010562886018306017 + float64ToFloat32(x * float64ToFloat32(0.0002093863149639219 + float64ToFloat32(x * float64ToFloat32(0.000014962478417146485 + float64ToFloat32(x * float64ToFloat32(4.496967846989719e-7 + float64ToFloat32(x * float64ToFloat32(4.625961835813541e-9 + float64ToFloat32(x * float64ToFloat32(-2.8112872747505617e-14 + float64ToFloat32(x * 9.905571215128252e-17)))))))))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(1.0 + float64ToFloat32(x * float64ToFloat32(0.5914293527603149 + float64ToFloat32(x * float64ToFloat32(0.1381518691778183 + float64ToFloat32(x * float64ToFloat32(0.016074609011411667 + float64ToFloat32(x * float64ToFloat32(0.0009640118223614991 + float64ToFloat32(x * float64ToFloat32(0.000027533547836355865 + float64ToFloat32(x * float64ToFloat32(2.822431781623891e-7 + float64ToFloat32(x * float64ToFloat32(0.0 + float64ToFloat32(x * 0.0)))))))))))))))); // eslint-disable-line max-len
	} else {
		x = float64ToFloat32( 1.0 / x );
		s1 = float64ToFloat32(9.905571215128252e-17 + float64ToFloat32(x * float64ToFloat32(-2.8112872747505617e-14 + float64ToFloat32(x * float64ToFloat32(4.625961835813541e-9 + float64ToFloat32(x * float64ToFloat32(4.496967846989719e-7 + float64ToFloat32(x * float64ToFloat32(0.000014962478417146485 + float64ToFloat32(x * float64ToFloat32(0.0002093863149639219 + float64ToFloat32(x * float64ToFloat32(0.0010562886018306017 + float64ToFloat32(x * float64ToFloat32(-0.0011295144213363528 + float64ToFloat32(x * -0.016743101179599762)))))))))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(0.0 + float64ToFloat32(x * float64ToFloat32(0.0 + float64ToFloat32(x * float64ToFloat32(2.822431781623891e-7 + float64ToFloat32(x * float64ToFloat32(0.000027533547836355865 + float64ToFloat32(x * float64ToFloat32(0.0009640118223614991 + float64ToFloat32(x * float64ToFloat32(0.016074609011411667 + float64ToFloat32(x * float64ToFloat32(0.1381518691778183 + float64ToFloat32(x * float64ToFloat32(0.5914293527603149 + float64ToFloat32(x * 1.0)))))))))))))))); // eslint-disable-line max-len
	}
	return float64ToFloat32( s1 / s2 );
}


// EXPORTS //

module.exports = evalrational;
