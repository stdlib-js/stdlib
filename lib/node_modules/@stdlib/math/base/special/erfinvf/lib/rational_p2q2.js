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
		return -0.2024335116147995;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = float64ToFloat32(-0.2024335116147995 + float64ToFloat32(x * float64ToFloat32(0.10526467859745026 + float64ToFloat32(x * float64ToFloat32(8.370503425598145 + float64ToFloat32(x * float64ToFloat32(17.644729614257812 + float64ToFloat32(x * float64ToFloat32(-18.851064682006836 + float64ToFloat32(x * float64ToFloat32(-44.63823318481445 + float64ToFloat32(x * float64ToFloat32(17.44538688659668 + float64ToFloat32(x * float64ToFloat32(21.129465103149414 + float64ToFloat32(x * -3.671922445297241)))))))))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(1.0 + float64ToFloat32(x * float64ToFloat32(6.242641448974609 + float64ToFloat32(x * float64ToFloat32(3.971343755722046 + float64ToFloat32(x * float64ToFloat32(-28.660818099975586 + float64ToFloat32(x * float64ToFloat32(-20.14326286315918 + float64ToFloat32(x * float64ToFloat32(48.56092071533203 + float64ToFloat32(x * float64ToFloat32(10.82686710357666 + float64ToFloat32(x * float64ToFloat32(-22.643693923950195 + float64ToFloat32(x * 1.7211476564407349)))))))))))))))); // eslint-disable-line max-len
	} else {
		x = float64ToFloat32( 1.0 / x );
		s1 = float64ToFloat32(-3.671922445297241 + float64ToFloat32(x * float64ToFloat32(21.129465103149414 + float64ToFloat32(x * float64ToFloat32(17.44538688659668 + float64ToFloat32(x * float64ToFloat32(-44.63823318481445 + float64ToFloat32(x * float64ToFloat32(-18.851064682006836 + float64ToFloat32(x * float64ToFloat32(17.644729614257812 + float64ToFloat32(x * float64ToFloat32(8.370503425598145 + float64ToFloat32(x * float64ToFloat32(0.10526467859745026 + float64ToFloat32(x * -0.2024335116147995)))))))))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(1.7211476564407349 + float64ToFloat32(x * float64ToFloat32(-22.643693923950195 + float64ToFloat32(x * float64ToFloat32(10.82686710357666 + float64ToFloat32(x * float64ToFloat32(48.56092071533203 + float64ToFloat32(x * float64ToFloat32(-20.14326286315918 + float64ToFloat32(x * float64ToFloat32(-28.660818099975586 + float64ToFloat32(x * float64ToFloat32(3.971343755722046 + float64ToFloat32(x * float64ToFloat32(6.242641448974609 + float64ToFloat32(x * 1.0)))))))))))))))); // eslint-disable-line max-len
	}
	return float64ToFloat32( s1 / s2 );
}


// EXPORTS //

module.exports = evalrational;
