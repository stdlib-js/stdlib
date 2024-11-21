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

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var max = require( '@stdlib/math/base/special/max' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Calculates the fitted value `ys` for a value `xs` on the horizontal axis.
*
* ## Method
*
* -   The smoothed value for the x-axis value at the current index is computed using a (robust) locally weighted regression of degree one.  The tricube weight function is used with `h` equal to the maximum of `xs - x[ nleft ]` and `x[ nright ] - xs`.
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
* @param {NonNegativeInteger} i - current index
* @param {NonNegativeInteger} nleft - index of the first point used in computing the fitted value
* @param {NonNegativeInteger} nright - index of the last point used in computing the fitted value
* @param {ProbabilityArray} w - weights at indices from `nleft` to `nright` to be used in the calculation of the fitted value
* @param {boolean} userw - boolean indicating whether a robust fit is carried out using the weights in `rw`
* @param {ProbabilityArray} rw - robustness weights
* @returns {number} fitted value
*/
function lowest( x, y, n, i, nleft, nright, w, userw, rw ) {
	var range;
	var nrt;
	var h1;
	var h9;
	var xs;
	var ys;
	var h;
	var a;
	var b;
	var c;
	var r;
	var j;

	xs = x[ i ];
	range = x[ n - 1 ] - x[ 0 ];
	h = max( xs - x[ nleft ], x[ nright ] - xs );
	h9 = 0.999 * h;
	h1 = 0.001 * h;

	// Compute weights (pick up all ties on right):
	a = 0.0; // sum of weights
	for ( j = nleft; j < n; j++ ) {
		w[ j ] = 0.0;
		r = abs( x[ j ] - xs );
		if ( r <= h9 ) { // small enough for non-zero weight
			if ( r > h1 ) {
				w[ j ] = pow( 1.0-pow( r/h, 3.0 ), 3.0 );
			} else {
				w[ j ] = 1.0;
			}
			if ( userw ) {
				w[ j ] *= rw[ j ];
			}
			a += w[ j ];
		}
		else if ( x[ j ] > xs ) {
			break; // get out at first zero weight on right
		}
	}
	nrt = j - 1; // rightmost point (may be greater than `nright` because of ties)
	if ( a <= 0.0 ) {
		return y[ i ];
	}

	// Make sum of weights equal to one:
	for ( j = nleft; j <= nrt; j++ ) {
		w[ j ] /= a;
	}

	if ( h > 0.0 ) { // use linear fit
		// Find weighted center of x values:
		a = 0.0;
		for ( j = nleft; j <= nrt; j++ ) {
			a += w[ j ] * x[ j ];
		}
		b = xs - a;
		c = 0.0;
		for ( j = nleft; j <= nrt; j++ ) {
			c += w[ j ] * pow( x[ j ] - a, 2.0 );
		}
		if ( sqrt( c ) > 0.001 * range ) {
			// Points are spread out enough to compute slope:
			b /= c;
			for ( j = nleft; j <= nrt; j++ ) {
				w[ j ] *= ( 1.0 + ( b*(x[j]-a) ) );
			}
		}
	}
	ys = 0.0;
	for ( j = nleft; j <= nrt; j++ ) {
		ys += w[ j ] * y[ j ];
	}
	return ys;
}


// EXPORTS //

module.exports = lowest;
