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
		return -0.1311027854681015;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = float64ToFloat32(-0.1311027854681015 + float64ToFloat32(x * float64ToFloat32(-0.16379404067993164 + float64ToFloat32(x * float64ToFloat32(0.11703015863895416 + float64ToFloat32(x * float64ToFloat32(0.38707974553108215 + float64ToFloat32(x * float64ToFloat32(0.337785542011261 + float64ToFloat32(x * float64ToFloat32(0.14286953210830688 + float64ToFloat32(x * float64ToFloat32(0.029015790671110153 + float64ToFloat32(x * float64ToFloat32(0.002145590027794242 + float64ToFloat32(x * float64ToFloat32(-6.794655860176135e-7 + float64ToFloat32(x * float64ToFloat32(2.8522533668251526e-8 + float64ToFloat32(x * -6.811499697612078e-10)))))))))))))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(1.0 + float64ToFloat32(x * float64ToFloat32(3.4662539958953857 + float64ToFloat32(x * float64ToFloat32(5.381683349609375 + float64ToFloat32(x * float64ToFloat32(4.778465747833252 + float64ToFloat32(x * float64ToFloat32(2.5930192470550537 + float64ToFloat32(x * float64ToFloat32(0.8488543629646301 + float64ToFloat32(x * float64ToFloat32(0.15226434171199799 + float64ToFloat32(x * float64ToFloat32(0.01105924230068922 + float64ToFloat32(x * float64ToFloat32(0.0 + float64ToFloat32(x * float64ToFloat32(0.0 + float64ToFloat32(x * 0.0)))))))))))))))))))); // eslint-disable-line max-len
	} else {
		x = float64ToFloat32( 1.0 / x );
		s1 = float64ToFloat32(-6.811499697612078e-10 + float64ToFloat32(x * float64ToFloat32(2.8522533668251526e-8 + float64ToFloat32(x * float64ToFloat32(-6.794655860176135e-7 + float64ToFloat32(x * float64ToFloat32(0.002145590027794242 + float64ToFloat32(x * float64ToFloat32(0.029015790671110153 + float64ToFloat32(x * float64ToFloat32(0.14286953210830688 + float64ToFloat32(x * float64ToFloat32(0.337785542011261 + float64ToFloat32(x * float64ToFloat32(0.38707974553108215 + float64ToFloat32(x * float64ToFloat32(0.11703015863895416 + float64ToFloat32(x * float64ToFloat32(-0.16379404067993164 + float64ToFloat32(x * -0.1311027854681015)))))))))))))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(0.0 + float64ToFloat32(x * float64ToFloat32(0.0 + float64ToFloat32(x * float64ToFloat32(0.0 + float64ToFloat32(x * float64ToFloat32(0.01105924230068922 + float64ToFloat32(x * float64ToFloat32(0.15226434171199799 + float64ToFloat32(x * float64ToFloat32(0.8488543629646301 + float64ToFloat32(x * float64ToFloat32(2.5930192470550537 + float64ToFloat32(x * float64ToFloat32(4.778465747833252 + float64ToFloat32(x * float64ToFloat32(5.381683349609375 + float64ToFloat32(x * float64ToFloat32(3.4662539958953857 + float64ToFloat32(x * 1.0)))))))))))))))))))); // eslint-disable-line max-len
	}
	return float64ToFloat32( s1 / s2 );
}


// EXPORTS //

module.exports = evalrational;
