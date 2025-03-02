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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for a triangular distribution with lower limit `a`, upper limit `b`, and mode `c` at a value `t`.
*
* @param {number} t - input value
* @param {number} a - lower limit
* @param {number} b - upper limit
* @param {number} c - mode
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 0.5, -1.0, 1.0, 0.0 );
* // returns ~1.021
*
* @example
* var y = mgf( 0.5, -1.0, 1.0, 0.5 );
* // returns ~1.111
*
* @example
* var y = mgf( -0.3, -20.0, 0.0, -2.0 );
* // returns ~24.334
*
* @example
* var y = mgf( -2.0, -1.0, 1.0, 0.0 );
* // returns ~1.381
*
* @example
* var y = mgf( NaN, 0.0, 1.0, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, NaN, 1.0, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, 0.0, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 0.5, 1.0, 0.0, NaN );
* // returns NaN
*
* @example
* var y = mgf( 0.5, 1.0, 0.0, 1.5 );
* // returns NaN
*/
function mgf( t, a, b, c ) {
	var bmc;
	var bma;
	var cma;
	var ret;

	if (
		isnan( t ) ||
		isnan( a ) ||
		isnan( b ) ||
		isnan( c ) ||
		a > c ||
		c > b
	) {
		return NaN;
	}
	if ( t === 0.0 ) {
		return 1.0;
	}
	bmc = b - c;
	bma = b - a;
	cma = c - a;
	ret = ( bmc * exp( a*t ) ) - ( bma * exp( c*t ) );
	ret += cma * exp( b*t );
	ret *= 2.0;
	ret /= bma * cma * bmc * pow( t, 2.0 );
	return ret;
}


// EXPORTS //

module.exports = mgf;
