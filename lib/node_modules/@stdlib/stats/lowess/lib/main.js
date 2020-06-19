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

var isNumberArray = require( '@stdlib/assert/is-number-array' ).primitives;
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var range = require( '@stdlib/stats/base/range' );
var lowess = require( './lowess.js' );
var validate = require( './validate.js' );


// FUNCTIONS //

/**
* Comparator function used to sort (x,y)-pairs in ascending order by the first coordinate.
*
* @private
* @param {Array} a - first pair
* @param {Array} b - second pair
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a[ 0 ] - b[ 0 ];
}


// MAIN //

/**
* Locally-weighted polynomial regression via the LOWESS algorithm.
*
* ## References
*
* -   Cleveland, William S. 1979. "Robust Locally and Smoothing Weighted Regression Scatterplots." _Journal of the American Statistical Association_ 74 (368): 829–36. doi:[10.1080/01621459.1979.10481038](https://doi.org/10.1080/01621459.1979.10481038).
* -   Cleveland, William S. 1981. "Lowess: A program for smoothing scatterplots by robust locally weighted regression." _American Statistician_ 35 (1): 54–55. doi:[10.2307/2683591](https://doi.org/10.2307/2683591).
*
* @param {NumericArray} x - ordered x-axis values (abscissa values)
* @param {NumericArray} y - corresponding y-axis values (ordinate values)
* @param {Options} options - function options
* @param {PositiveNumber} [options.f=2/3] - smoother span (proportion of points which influence smoothing at each value)
* @param {integer} [options.nsteps=3] - number of iterations in the robust fit (fewer iterations translates to faster function execution)
* @param {NonNegativeNumber} [options.delta] - nonnegative parameter which may be used to reduce the number of computations
* @param {boolean} [options.sorted=false] - boolean indicating if the input array `x` is already in sorted order
* @throws {TypeError} first argument must be a numeric array
* @throws {TypeError} second argument must be a numeric array
* @throws {Error} arguments `x` and `y` must have the same length
* @returns {Object} ordered x-values and fitted values
*/
function main( x, y, options ) {
	var nsteps;
	var delta;
	var opts;
	var err;
	var xy;
	var f;
	var i;
	var n;
	var r;

	if ( !isTypedArrayLike( x ) && !isNumberArray( x ) ) {
		throw new TypeError( 'invalid argument. First argument `x` must be a numeric array. Value: `' + x + '`.' );
	}
	if ( !isTypedArrayLike( y ) && !isNumberArray( y ) ) {
		throw new TypeError( 'invalid argument. Second argument `y` must be a numeric array. Value: `' + y + '`.' );
	}
	n = x.length;
	if ( y.length !== n ) {
		throw new Error( 'invalid arguments. Arguments `x` and `y` must have the same length.' );
	}
	opts = {};
	if ( arguments.length > 2 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	// Input data has to be sorted:
	if ( opts.sorted !== true ) {
		// Copy to prevent mutation and sort by x:
		xy = new Array( n );
		for ( i = 0; i < n; i++ ) {
			xy[ i ] = [ x[ i ], y[ i ] ];
		}
		xy.sort( ascending ); // TODO: Revisit once we have function for sorting multiple arrays by the elements of one of the arrays
		x = new Array( n );
		y = new Array( n );
		for ( i = 0; i < n; i++ ) {
			x[ i ] = xy[ i ][ 0 ];
			y[ i ] = xy[ i ][ 1 ];
		}
	}
	if ( opts.nsteps === void 0 ) {
		nsteps = 3;
	} else {
		nsteps = opts.nsteps;
	}
	if ( opts.f === void 0 ) {
		f = 2.0/3.0;
	} else {
		f = opts.f;
	}
	if ( opts.delta === void 0 ) {
		r = range( n, x, 1 );
		delta = 0.01 * r;
	} else {
		delta = opts.delta;
	}
	return lowess( x, y, n, f, nsteps, delta );
}


// EXPORTS //

module.exports = main;
