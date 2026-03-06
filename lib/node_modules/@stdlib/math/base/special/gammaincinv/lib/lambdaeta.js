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

var abs = require( '@stdlib/math/base/special/abs' );
var exp = require( '@stdlib/math/base/special/exp' );
var ln = require( '@stdlib/math/base/special/ln' );
var evalpoly = require( '@stdlib/math/base/tools/evalpoly' );
var polyvalAK1 = require( './polyval_ak1.js' );
var polyvalAK2 = require( './polyval_ak2.js' );


// VARIABLES //

var THRESHOLD = 1.0e-8;
var ONEO12 = 0.0833333333333333333333333333333;
var ONEO120 = 0.00833333333333333333333333333333;

// Polynomial coefficient workspace:
var AK = [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]; // WARNING: not thread safe


// MAIN //

/**
* Returns the positive number satisfying \\( \eta^2/2=\lambda-1-\ln(\lambda) \\) with \\( \operatorname{sign}(\lambda-1)=\operatorname{sign}(\eta) \\).
*
* @private
* @param {number} eta - eta value
* @returns {number} value satisfying equation
*/
function lambdaeta( eta ) {
	var L2;
	var L3;
	var L4;
	var L5;
	var la;
	var L;
	var q;
	var r;
	var s;

	s = eta * eta * 0.5;
	if ( eta === 0.0 ) {
		la = 0.0;
	}
	else if ( eta < -1.0 ) {
		r = exp( -1.0 - s );
		la = polyvalAK1( r );
	}
	else if ( eta < 1.0 ) {
		r = eta;
		la = polyvalAK2( r );
	}
	else {
		r = 11.0 + s;
		L = ln( r );
		la = r + L;
		r = 1.0 / r;
		L2 = L * L;
		L3 = L2 * L;
		L4 = L3 * L;
		L5 = L4 * L;
		AK[ 1 ] = ( 2.0-L ) * 0.5;
		AK[ 2 ] = ( ( -9.0*L ) + 6.0 + ( 2.0*L2 ) ) / 6.0;
		AK[ 3 ] = -( (3*L3)+ (36*L) - (22*L2) - 12 ) * ONEO12;
		AK[ 4 ] = ( 60.0 + (350.0*L2) - (300.0*L) - (125.0*L3) + (12.0*L4) ) / 60.0; // eslint-disable-line max-len
		AK[ 5 ] = -(-120 - (274*L4) + (900*L) - (1700*L2) + (1125*L3) + (20*L5)) * ONEO120; // eslint-disable-line max-len
		la += ( L * r * evalpoly( AK, r ) );
	}
	r = 1.0;
	if (
		( eta > -3.5 && eta < -0.03 ) ||
		( eta > 0.03 && eta < 40.0 )
	) {
		r = 1.0;
		q = la;
		do {
			la = q * ( s+ln(q) ) / ( q-1.0 );
			r = abs( ( q/la ) - 1.0 );
			q = la;
		} while ( r > THRESHOLD );
	}
	return la;
}


// EXPORTS //

module.exports = lambdaeta;
