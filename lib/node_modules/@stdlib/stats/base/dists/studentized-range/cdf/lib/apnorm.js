/* eslint-disable max-len, no-mixed-operators */

/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var exp = require( '@stdlib/math/base/special/exp' );
var SQRT_TWO_PI = require( '@stdlib/constants/float64/sqrt-two-pi' );


// VARIABLES //

var CUTOFF = 7.071; // 10 / sqrt(2)
var p0 = 220.2068679123761e0;
var p1 = 221.2135961699311e0;
var p2 = 112.0792914978709e0;
var p3 = 33.91286607838300e0;
var p4 = 6.373962203531650e0;
var p5 = 0.7003830644436881e0;
var p6 = 0.3526249659989109e-01;
var q0 = 440.4137358247522e0;
var q1 = 793.8265125199484e0;
var q2 = 637.3336333788311e0;
var q3 = 296.5642487796737e0;
var q4 = 86.78073220294608e0;
var q5 = 16.06417757920695e0;
var q6 = 1.755667163182642e0;
var q7 = 0.8838834764831844e-1;


// MAIN //

/**
* Evaluates the CDF of the standard normal distribution.
*
* @private
* @param {number} z - standard deviation from the mean
* @returns {number} evaluated CDF
*/
function apnorm( z ) {
	var expntl;
	var zabs;
	var pdf;
	var p;
	var q;

	zabs = abs( z );
	if ( zabs > 37.0 ) {
		if ( z > 0.0 ) {
			p = 1.0;
		} else {
			p = 0.0;
		}
	} else {
		// Case: |z| >= 37
		expntl = exp( -0.5 * zabs * zabs );
		pdf = expntl / SQRT_TWO_PI;
		if ( zabs < CUTOFF ) {
			p = expntl * ((((((p6 * zabs + p5) * zabs + p4) * zabs + p3) * zabs + p2) * zabs + p1) * zabs + p0) /
				(((((((q7 * zabs + q6) * zabs + q5) * zabs + q4) * zabs + q3) * zabs + q2) * zabs + q1) * zabs + q0);
		}
		else {
			p = pdf / (zabs + 1.0 / (zabs + 2.0 / (zabs + 3.0 / (zabs + 4.0 / (zabs + 0.65)))));
		}
		if ( z >= 0.0 ) {
			q = p;
			p = 1.0 - q;
		}
	}
	return p;
}


// EXPORTS //

module.exports = apnorm;
