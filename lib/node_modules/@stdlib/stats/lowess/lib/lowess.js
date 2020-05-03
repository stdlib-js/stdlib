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
var abs = require( '@stdlib/math/base/special/abs' );
var max = require( '@stdlib/math/base/special/max' );
var min = require( '@stdlib/math/base/special/min' );
var pow = require( '@stdlib/math/base/special/pow' );
var lowest = require( './lowest.js' );


// FUNCTIONS //

/**
* Comparator function used to sort values in ascending order.
*
* @private
* @param {number} a - first value
* @param {number} b - second value
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
}


// MAIN //

/**
* Locally-weighted polynomial regression via the LOWESS algorithm.
*
* ## Method
*
* -   Calculates fitted values using a nearest neighbor function and robust locally weighted regression of degree one with the tricube weight function.
*
* ## References
*
* -   Cleveland, William S. 1979. "Robust Locally and Smoothing Weighted Regression Scatterplots." _Journal of the American Statistical Association_ 74 (368): 829–36. doi:[10.1080/01621459.1979.10481038](https://doi.org/10.1080/01621459.1979.10481038).
* -   Cleveland, William S. 1981. "Lowess: A program for smoothing scatterplots by robust locally weighted regression." _American Statistician_ 35 (1): 54–55. doi:[10.2307/2683591](https://doi.org/10.2307/2683591).
*
* @private
* @param {NumericArray} x - ordered x-axis values (abscissa values)
* @param {NumericArray} y - corresponding y-axis values (ordinate values)
* @param {PositiveInteger} n - number of observations
* @param {PositiveNumber} f - smoother span (proportion of points which influence smoothing at each value)
* @param {NonNegativeInteger} nsteps - number of iterations in the robust fit
* @param {PositiveNumber} delta - nonnegative parameter which may be used to reduce the number of computations
* @returns {Object} sorted x-values and fitted values
*/
function lowess( x, y, n, f, nsteps, delta ) {
	var nright;
	var denom;
	var nleft;
	var alpha;
	var cmad;
	var iter;
	var last;
	var cut;
	var res;
	var m1;
	var m2;
	var ns;
	var c1;
	var c9;
	var d1;
	var d2;
	var rw;
	var ys;
	var i;
	var j;
	var r;

	if ( n < 2 ) {
		return y;
	}
	ys = new Array( n );
	res = new Array( n );
	rw = new Array( n );

	// Use at least two and at most n points:
	ns = max( min( floor( f * n ), n ), 2 );

	// Robustness iterations:
	for ( iter = 1; iter <= nsteps + 1; iter++ ) {
		nleft = 0;
		nright = ns - 1;
		last = -1; // index of previously estimated point
		i = 0; // index of current point
		do {
			while ( nright < n - 1 ) {
				// Move nleft, nright to the right if radius decreases:
				d1 = x[ i ] - x[ nleft ];
				d2 = x[ nright + 1 ] - x[ i ];

				// If d1 <= d2 with x[nright+1] == x[nright], lowest fixes:
				if ( d1 <= d2 ) {
					break;
				}
				// Radius will not decrease by a move to the right...
				nleft += 1;
				nright += 1;
			}
			// Fitted value at x[ i ]:
			ys[ i ] = lowest( x, y, n, i, nleft, nright, res, (iter > 1), rw );

			if ( last < i - 1 ) {
				denom = x[ i ] - x[ last ];
				for ( j = last + 1; j < i; j++ ) {
					alpha = ( x[ j ] - x[ last ] ) / denom;
					ys[ j ] = ( alpha*ys[ i ] ) + ( (1.0-alpha) * ys[ last ] );
				}
			}
			last = i;
			cut = x[ last ] + delta;
			for ( i = last + 1; i < n; i++ ) {
				if ( x[ i ] > cut ) {
					break;
				}
				if ( x[ i ] === x[ last ] ) {
					ys[ i ] = ys[ last ];
					last = i;
				}
			}
			i = max( last + 1, i - 1 );
		} while ( last < n - 1 );

		// Calculate Residuals:
		for ( i = 0; i < n; i++ ) {
			res[ i ] = y[ i ] - ys[ i ];
		}
		if ( iter > nsteps ) {
			break; // Compute robustness weights except last time...
		}
		for ( i = 0; i < n; i++ ) {
			rw[i] = abs( res[i] );
		}
		rw.sort( ascending );
		m1 = floor( n / 2.0 );
		m2 = n - m1 - 1.0;
		cmad = 3.0 * ( rw[m1] + rw[m2] );
		c9 = 0.999 * cmad;
		c1 = 0.001 * cmad;
		for ( i = 0; i < n; i++ ) {
			r = abs( res[i] );
			if ( r <= c1 ) {
				rw[ i ] = 1.0; // near 0, avoid underflow
			}
			else if ( r > c9 ) {
				rw[ i ] = 0.0;  // near 1, avoid underflow
			}
			else {
				rw[ i ] = pow( 1.0 - pow( r / cmad, 2.0 ), 2.0 );
			}
		}
	}
	return {
		'x': x,
		'y': ys
	};
}


// EXPORTS //

module.exports = lowess;
