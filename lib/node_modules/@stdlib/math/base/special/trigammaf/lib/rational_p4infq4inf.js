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
		return 6.8947580279632365e-18;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = float64ToFloat32(6.8947580279632365e-18 + float64ToFloat32(x * float64ToFloat32(0.5 + float64ToFloat32(x * float64ToFloat32(1.0177274942398071 + float64ToFloat32(x * float64ToFloat32(2.498208522796631 + float64ToFloat32(x * float64ToFloat32(2.192122220993042 + float64ToFloat32(x * float64ToFloat32(1.5897035598754883 + float64ToFloat32(x * 0.40154388546943665)))))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(1.0 + float64ToFloat32(x * float64ToFloat32(1.7021214962005615 + float64ToFloat32(x * float64ToFloat32(4.429043292999268 + float64ToFloat32(x * float64ToFloat32(2.9745631217956543 + float64ToFloat32(x * float64ToFloat32(2.301361560821533 + float64ToFloat32(x * float64ToFloat32(0.2836039960384369 + float64ToFloat32(x * 0.022892987355589867)))))))))))); // eslint-disable-line max-len
	} else {
		x = float64ToFloat32( 1.0 / x );
		s1 = float64ToFloat32(0.40154388546943665 + float64ToFloat32(x * float64ToFloat32(1.5897035598754883 + float64ToFloat32(x * float64ToFloat32(2.192122220993042 + float64ToFloat32(x * float64ToFloat32(2.498208522796631 + float64ToFloat32(x * float64ToFloat32(1.0177274942398071 + float64ToFloat32(x * float64ToFloat32(0.5 + float64ToFloat32(x * 6.8947580279632365e-18)))))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(0.022892987355589867 + float64ToFloat32(x * float64ToFloat32(0.2836039960384369 + float64ToFloat32(x * float64ToFloat32(2.301361560821533 + float64ToFloat32(x * float64ToFloat32(2.9745631217956543 + float64ToFloat32(x * float64ToFloat32(4.429043292999268 + float64ToFloat32(x * float64ToFloat32(1.7021214962005615 + float64ToFloat32(x * 1.0)))))))))))); // eslint-disable-line max-len
	}
	return float64ToFloat32( s1 / s2 );
}


// EXPORTS //

module.exports = evalrational;
