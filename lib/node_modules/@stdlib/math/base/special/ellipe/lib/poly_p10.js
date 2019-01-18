/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// MAIN //

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/
function evalpoly( x ) {
	if ( x === 0.0 ) {
		return 1.1246173251197522;
	}
	return 1.1246173251197522 + (x * (-0.7708450563609095 + (x * (-0.8447940536449113 + (x * (-2.4900973094503946 + (x * (-10.239717411543843 + (x * (-49.7490054655148 + (x * (-267.09866751957054 + (x * (-1532.66588382523 + (x * (-9222.313478526092 + (x * (-57502.51612140314 + (x * (-368596.11674161063 + (x * (-2415611.0887010912 + (x * (-16120097.815816568 + (x * (-109209938.52030899 + (x * (-749380758.1942496 + (x * (-5198725846.725541 + (x * -36409256888.1214))))))))))))))))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
