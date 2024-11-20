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

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var ln = require( '@stdlib/math/base/special/ln' );


// VARIABLES //

// Coefficients for P close to 0.5
var a0 = 3.3871328727963666080E0;
var a1 = 1.3314166789178437745E+2;
var a2 = 1.9715909503065514427E+3;
var a3 = 1.3731693765509461125E+4;
var a4 = 4.5921953931549871457E+4;
var a5 = 6.7265770927008700853E+4;
var a6 = 3.3430575583588128105E+4;
var a7 = 2.5090809287301226727E+3;
var b1 = 4.2313330701600911252E+1;
var b2 = 6.8718700749205790830E+2;
var b3 = 5.3941960214247511077E+3;
var b4 = 2.1213794301586595867E+4;
var b5 = 3.9307895800092710610E+4;
var b6 = 2.8729085735721942674E+4;
var b7 = 5.2264952788528545610E+3;

// Coefficients for P not close to 0, 0.5 or 1.
var c0 = 1.42343711074968357734E0;
var c1 = 4.63033784615654529590E0;
var c2 = 5.76949722146069140550E0;
var c3 = 3.64784832476320460504E0;
var c4 = 1.27045825245236838258E0;
var c5 = 2.41780725177450611770E-1;
var c6 = 2.27238449892691845833E-2;
var c7 = 7.74545014278341407640E-4;
var d1 = 2.05319162663775882187E0;
var d2 = 1.67638483018380384940E0;
var d3 = 6.89767334985100004550E-1;
var d4 = 1.48103976427480074590E-1;
var d5 = 1.51986665636164571966E-2;
var d6 = 5.47593808499534494600E-4;
var d7 = 1.05075007164441684324E-9;

// Coefficients for P near 0 or 1.
var e0 = 6.65790464350110377720E0;
var e1 = 5.46378491116411436990E0;
var e2 = 1.78482653991729133580E0;
var e3 = 2.96560571828504891230E-1;
var e4 = 2.65321895265761230930E-2;
var e5 = 1.24266094738807843860E-3;
var e6 = 2.71155556874348757815E-5;
var e7 = 2.01033439929228813265E-7;
var f1 = 5.99832206555887937690E-1;
var f2 = 1.36929880922735805310E-1;
var f3 = 1.48753612908506148525E-2;
var f4 = 7.86869131145613259100E-4;
var f5 = 1.84631831751005468180E-5;
var f6 = 1.42151175831644588870E-7;
var f7 = 2.04426310338993978564E-15;


// MAIN //

/**
* Returns the normal deviate Z corresponding to a given lower tail area of `p`.
*
* @private
* @param {Probability} p - lower tail area
* @returns {number} normal deviate
*/
function apnorminv( p ) {
	var ppnd;
	var q;
	var r;

	q = p - 0.5;
	if ( abs( q ) <= 0.425 ) {
		r = 0.180625 - ( q * q );
		ppnd = q * (((((((a7 * r + a6) * r + a5) * r + a4) * r + a3) * r + a2) * r + a1) * r + a0) /
			(((((((b7 * r + b6) * r + b5) * r + b4) * r + b3) * r + b2) * r + b1) * r + 1.0);
	} else {
		if ( q < 0.0 ) {
			r = p;
		} else {
			r = 1.0 - p;
		}
		if ( r <= 0.0 ) {
			ppnd = 0.0;
		} else {
			r = sqrt( -ln( r ) );
			if ( r <= 5.0 ) {
				r -= 1.6;
				ppnd = (((((((c7 * r + c6) * r + c5) * r + c4) * r + c3) * r + c2) * r + c1) * r + c0) /
					(((((((d7 * r + d6) * r + d5) * r + d4) * r + d3) * r + d2) * r + d1) * r + 1.0);
			} else {
				r -= 5.0;
				ppnd = (((((((e7 * r + e6) * r + e5) * r + e4) * r + e3) * r + e2) * r + e1) * r + e0) /
					(((((((f7 * r + f6) * r + f5) * r + f4) * r + f3) * r + f2) * r + f1) * r + 1.0);
			}
			if ( q < 0.0 ) {
				ppnd = -ppnd;
			}
		}
	}
	return ppnd;
}


// EXPORTS //

module.exports = apnorminv;
