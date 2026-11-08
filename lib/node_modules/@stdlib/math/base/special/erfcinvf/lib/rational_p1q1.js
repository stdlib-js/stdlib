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
		return -0.0005087819299660623;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = float64ToFloat32(-0.0005087819299660623 + float64ToFloat32(x * float64ToFloat32(-0.008368748240172863 + float64ToFloat32(x * float64ToFloat32(0.03348066285252571 + float64ToFloat32(x * float64ToFloat32(-0.012692614458501339 + float64ToFloat32(x * float64ToFloat32(-0.036563798785209656 + float64ToFloat32(x * float64ToFloat32(0.02198786847293377 + float64ToFloat32(x * float64ToFloat32(0.008226878941059113 + float64ToFloat32(x * float64ToFloat32(-0.005387729499489069 + float64ToFloat32(x * float64ToFloat32(0.0 + float64ToFloat32(x * 0.0)))))))))))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(1.0 + float64ToFloat32(x * float64ToFloat32(-0.9700050354003906 + float64ToFloat32(x * float64ToFloat32(-1.5657455921173096 + float64ToFloat32(x * float64ToFloat32(1.5622155666351318 + float64ToFloat32(x * float64ToFloat32(0.662328839302063 + float64ToFloat32(x * float64ToFloat32(-0.712289035320282 + float64ToFloat32(x * float64ToFloat32(-0.05273963883519173 + float64ToFloat32(x * float64ToFloat32(0.07952836900949478 + float64ToFloat32(x * float64ToFloat32(-0.0023339376784861088 + float64ToFloat32(x * 0.0008862164104357362)))))))))))))))))); // eslint-disable-line max-len
	} else {
		x = float64ToFloat32( 1.0 / x );
		s1 = float64ToFloat32(0.0 + float64ToFloat32(x * float64ToFloat32(0.0 + float64ToFloat32(x * float64ToFloat32(-0.005387729499489069 + float64ToFloat32(x * float64ToFloat32(0.008226878941059113 + float64ToFloat32(x * float64ToFloat32(0.02198786847293377 + float64ToFloat32(x * float64ToFloat32(-0.036563798785209656 + float64ToFloat32(x * float64ToFloat32(-0.012692614458501339 + float64ToFloat32(x * float64ToFloat32(0.03348066285252571 + float64ToFloat32(x * float64ToFloat32(-0.008368748240172863 + float64ToFloat32(x * -0.0005087819299660623)))))))))))))))))); // eslint-disable-line max-len
		s2 = float64ToFloat32(0.0008862164104357362 + float64ToFloat32(x * float64ToFloat32(-0.0023339376784861088 + float64ToFloat32(x * float64ToFloat32(0.07952836900949478 + float64ToFloat32(x * float64ToFloat32(-0.05273963883519173 + float64ToFloat32(x * float64ToFloat32(-0.712289035320282 + float64ToFloat32(x * float64ToFloat32(0.662328839302063 + float64ToFloat32(x * float64ToFloat32(1.5622155666351318 + float64ToFloat32(x * float64ToFloat32(-1.5657455921173096 + float64ToFloat32(x * float64ToFloat32(-0.9700050354003906 + float64ToFloat32(x * 1.0)))))))))))))))))); // eslint-disable-line max-len
	}
	return float64ToFloat32( s1 / s2 );
}


// EXPORTS //

module.exports = evalrational;
