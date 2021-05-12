/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Computes a chi-square test statistic.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} x - observation frequencies
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - expected frequencies
* @param {integer} strideY - `y` stride length
* @returns {number} test statistic
*/
function testStatistic( N, x, strideX, y, strideY ) {
	var stat;
	var v1;
	var v2;
	var d;
	var i;

	stat = 0.0;
	for ( i = 0; i < N; i++ ) {
		v1 = x[ i*strideX ];
		v2 = y[ i*strideY ];
		if ( v2 === 0.0 ) {
			if ( v1 === 0.0 ) {
				continue;
			}
			return PINF;
		}
		d = v1 - v2;
		stat += ( d * d ) / v2;
	}
	return stat;
}


// EXPORTS //

module.exports = testStatistic;
