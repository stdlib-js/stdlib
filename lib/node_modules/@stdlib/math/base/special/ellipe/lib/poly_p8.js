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
		return 1.2110560275684594;
	}
	return 1.2110560275684594 + (x * (-0.6303064132874558 + (x * (-0.38716640952066916 + (x * (-0.5922782353119346 + (x * (-1.23755558451305 + (x * (-3.0320566617452474 + (x * (-8.18168822157359 + (x * (-23.55507217389693 + (x * (-71.04099935893065 + (x * (-221.879685319235 + (x * (-712.1364793277636 + (x * (-2336.1253314403966 + (x * (-7801.945954775964 + (x * (-26448.19586059192 + (x * (-90799.48341621365 + (x * (-315126.04064491636 + (x * -1104011.3443115912))))))))))))))))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
