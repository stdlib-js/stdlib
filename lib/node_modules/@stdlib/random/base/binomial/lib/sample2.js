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

var floor = require( '@stdlib/math/base/special/floor' );
var sign = require( '@stdlib/math/base/special/signum' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var ln = require( '@stdlib/math/base/special/ln' );
var correction = require( './correction.js' );


// VARIABLES //

var ONE_SIXTH = 1.0 / 6.0;


// MAIN //

/**
* Generates a binomially distributed pseudorandom number.
*
* ## References
*
* -   Hörmann, Wolfgang. 1993. "The generation of binomial random variates." _Journal of Statistical Computation and Simulation_ 46 (1-2): 101–10. doi:[10.1080/00949659308811496][@hormann:1993a].
*
* [@hormann:1993a]: http://dx.doi.org/10.1080/00949659308811496
*
* @private
* @param {PRNG} rand - PRNG for uniformly distributed numbers
* @param {PositiveInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {NonNegativeInteger} pseudorandom number
*/
function sample( rand, n, p ) {
	var alpha;
	var urvr;
	var snpq;
	var npq;
	var rho;
	var tmp;
	var nm;
	var nr;
	var us;
	var km;
	var nk;
	var vr;
	var a;
	var b;
	var c;
	var f;
	var h;
	var i;
	var k;
	var m;
	var q;
	var r;
	var t;
	var u;
	var v;
	var x;

	m = floor( (n + 1) * p );
	nm = n - m + 1;

	q = 1.0 - p;

	r = p / q;
	nr = (n + 1) * r;

	npq = n * p * q;
	snpq = sqrt( npq );

	b = 1.15 + (2.53 * snpq);
	a = -0.0873 + (0.0248*b) + (0.01*p);
	c = (n*p) + 0.5;

	alpha = (2.83 + (5.1/b)) * snpq;

	vr = 0.92 - (4.2/b);
	urvr = 0.86 * vr;

	h = (m + 0.5) * ln( (m+1) / (r*nm) );
	h += correction( m ) + correction( n-m );

	while ( true ) {
		v = rand();
		if ( v <= urvr ) {
			u = (v/vr) - 0.43;
			r = (u * ( (2.0*a / (0.5 - abs(u))) + b )) + c;
			return floor( r );
		}
		if ( v >= vr ) {
			u = rand() - 0.5;
		} else {
			u = (v/vr) - 0.93;
			u = (sign( u ) * 0.5) - u;
			v = vr * rand();
		}
		us = 0.5 - abs(u);
		k = floor( (u * ( (2.0*a/us) + b )) + c );
		if ( k < 0 || k > n ) {
			// Try again...
			continue;
		}
		v = v * alpha / ( (a/(us*us)) + b );
		km = abs( k - m );
		if ( km > 15 ) {
			v = ln( v );
			rho = km / npq;
			tmp = ( (km/3) + 0.625 ) * km;
			tmp += ONE_SIXTH;
			tmp /= npq;
			rho *= tmp + 0.5;
			t = -(km * km) / (2.0 * npq);
			if ( v < t - rho ) {
				return k;
			}
			if ( v <= t + rho ) {
				nk = n - k + 1;
				x = h + ( (n+1)*ln( nm/nk ) );
				x += (k+0.5) * ln( nk*r/(k+1) );
				x += -(correction( k ) + correction( n-k ));
				if ( v <= x ) {
					return k;
				}
			}
		} else {
			f = 1.0;
			if ( m < k ) {
				for ( i = m; i <= k; i++ ) {
					f *= (nr/i) - r;
				}
			} else if ( m > k ) {
				for ( i = k; i <= m; i++ ) {
					v *= (nr/i) - r;
				}
			}
			if ( v <= f ) {
				return k;
			}
		}
	}
}


// EXPORTS //

module.exports = sample;
