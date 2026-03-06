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

var round = require( '@stdlib/math/base/special/round' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var PI = require( '@stdlib/constants/float64/pi' );
var apnorm = require( './apnorm.js' );
var WEIGHT = require( './weight.json' );
var ROOT = require( './root.json' );


// FUNCTIONS //

/**
* Evaluates a Gauss-Legendre quadrature.
*
* @private
* @param {number} ww - quadrature point
* @param {number} yii - integral bound
* @param {number} aii - integral bound
* @param {number} bii - integral bound
* @param {number} r - relative error tolerance
* @returns {number} integral value
*/
function fint( ww, yii, aii, bii, r ) {
	var yyi = ( ( bii - aii ) * yii ) + bii + aii;
	var out = exp( -yyi * yyi * 0.125 );
	out *= pow( apnorm( yyi * 0.5 ) -
		apnorm( ( yyi - (2*ww) ) * 0.5 ), r - 1 );
	return out;
}

/**
* Evaluates the Gauss-Legendre quadrature rule.
*
* @private
* @param {number} ww - quadrature point
* @param {number} aii - integral bound
* @param {number} bii - integral bound
* @param {number} r - relative error tolerance
* @param {number} a - lower bound of integration
* @param {number} b - upper bound of integration
* @param {number} n - number of quadrature points
* @returns {number} integral value
*/
function gaussLegreQuadrature( ww, aii, bii, r, a, b, n ) {
	var wsum = 0.0;
	var c = ( b - a ) * 0.5;
	var d = ( b + a ) * 0.5;
	var j;
	for ( j = 0; j < n; j++ ) {
		if ( ROOT[j] === 0.0 ) {
			wsum += WEIGHT[j] * fint( ww, d, aii, bii, r );
		} else {
			wsum += WEIGHT[j] * ( fint( ww, ( ROOT[j]*c ) + d, aii, bii, r ) );
		}
	}
	return c * wsum;
}


// MAIN //

/**
* Evaluates `H(w)`.
*
* @private
* @param {number} w - quantile of the studentized range
* @param {number} r - sample size for range (same for each group)
* @returns {number} evaluated function
*/
function prangeVInf( w, r ) {
	var soma;
	var ai;
	var ii;
	var bi;
	var i;
	var k;
	if ( w <= 0 ) {
		return 0.0;
	}
	if ( w <= 3 ) {
		k = 3.0;
	} else {
		k = 2.0;
	}
	ai = w / 2.0;
	ii = 1;
	bi = ( ( (k - ii) * (w / 2.0) ) + (8*ii) ) / k;
	soma = 0;
	for ( i = 1; i < round( k ) + 1; i++ ) {
		ii = i;
		soma += ((bi - ai) / 2.0) *
			gaussLegreQuadrature( w, ai, bi, r, -1.0, +1.0, 20 );
		ai = bi;
		if ( i + 1 === round(k) ) {
			bi = 8;
		} else {
			bi = ( ( (k - ii - 1) * (w / 2.0) ) + ( 8 * (ii + 1) ) ) / k;
		}
	}
	soma *= 2.0 * r / sqrt( 2.0 * PI );
	soma += pow( exp(1), r * ln( ( 2.0 * apnorm( w / 2.0 ) ) - 1.0 ) );
	return soma;
}


// EXPORTS //

module.exports = prangeVInf;
