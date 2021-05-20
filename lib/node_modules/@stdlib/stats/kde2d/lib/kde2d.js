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

var ndarray = require( '@stdlib/ndarray/array' );
var linspace = require( '@stdlib/array/linspace' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var isNumericArray = require( '@stdlib/assert/is-numeric-array' );
var isMatrixLike = require( '@stdlib/assert/is-matrix-like' );
var pickBandwidth = require( './pick_bandwidth.js' );
var validate = require( './validate.js' );
var ndarrayLike = require( './ndarray_like.js' );
var min = require( './min.js' );
var max = require( './max.js' );
var gaussian = require( './gaussian.js' );


// MAIN //

/**
* Computes two-dimensional kernel density estimates.
*
* @param {NumericArray} x - array of x values
* @param {NumericArray} y - array of y values
* @param {Options} [options] - function options
* @param {NumericArray} [options.h] - array of length two containing the bandwidth values for x and y
* @param {number} [options.n=25] - number of partitions on the x- and y-axes
* @param {number} [options.xMin] - lower limit of x
* @param {number} [options.xMax] - upper limit of x
* @param {number} [options.yMin] - lower limit of y
* @param {number} [options.yMax] - upper limit of y
* @param {(string|Function)} [options.kernel='gaussian'] - a string or function to specifying the used kernel function
* @throws {TypeError} first argument must be an array or matrix-like
* @throws {TypeError} second argument must be an array
* @throws {Error} first and second arguments must be of the same length
* @throws {RangeError} `xMin` must be smaller than `xMax`
* @throws {RangeError} `yMin` must be smaller than `yMax`
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Object} object containing the density estimates (`z`) along grid points (`x` and `y` values)
*
* @example
* var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
* var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
* var out = kde2d( x, y );
*/
function kde2d() {
	var kernelFunction;
	var maxArgs;
	var zScoreX;
	var zScoreY;
	var gridX;
	var gridY;
	var xMin;
	var xMax;
	var yMin;
	var yMax;
	var xVal; // For gridspace loop
	var yVal; // For gridspace loop
	var subX;
	var subY;
	var opts;
	var arr;
	var err;
	var ans;
	var out;
	var gx;
	var gy;
	var hX;
	var hY;
	var ix;
	var iy;
	var x;
	var y;
	var i;
	var n;
	var z;

	opts = {};

	if ( isMatrixLike( arguments[0] ) ) {
		// Case of ndarray, opts
		arr = arguments[ 0 ];
		maxArgs = 1;
	} else {
		x = arguments[ 0 ];
		y = arguments[ 1 ];
		if ( !isNumericArray( x ) ) {
			throw new TypeError( 'invalid argument. First argument `x` must be a numeric array. Value: `' + x + '`.' );
		}
		if ( !isNumericArray( y ) ) {
			throw new TypeError( 'invalid argument. Second argument `y` must be a numeric array. Value: `' + y + '`.' );
		}
		if ( x.length !== y.length ) {
			throw new Error( 'invalid arguments. Arguments `x` and `y` must be arrays of the same length' );
		}
		arr = ndarrayLike( x, y );
		maxArgs = 2;
	}

	if ( arguments.length > maxArgs ) {
		err = validate( opts, arguments[ maxArgs ] );
		if ( err ) {
			throw err;
		}
	}

	if ( opts.h ) {
		hX = opts.h[0];
		hY = opts.h[1];
	} else {
		hX = pickBandwidth(arr, 0);
		hY = pickBandwidth(arr, 1);
	}

	n = opts.n || 25;
	xMin = opts.xMin || min( arr, 0, arr.shape[0] );
	xMax = opts.xMax || max( arr, 0, arr.shape[0] );
	yMin = opts.yMin || min( arr, 1, arr.shape[0] );
	yMax = opts.yMax || max( arr, 1, arr.shape[0] );

	if ( xMin >= xMax ) {
		throw new RangeError( '`x` min must be strictly less than max' );
	}
	if ( yMin >= yMax ) {
		throw new RangeError( '`y` min must be strictly less than max' );
	}

	kernelFunction = opts.kernel || gaussian;

	// Create the `ndarray` to hold the density values:
	z = ndarray({
		'shape': [n, n]
	} );

	// Make the grid:
	gridX = linspace(xMin, xMax, n);
	gridY = linspace(yMin, yMax, n);

	// Loop through x and y indices:
	for ( ix = 0; ix < gridX.length; ix++ ) {
		gx = gridX[ ix ];
		for ( iy = 0; iy < gridY.length; iy++ ) {
			gy = gridY[ iy ];
			ans = 0.0;
			for ( i = 0; i < arr.shape[ 0 ]; i++ ) {
				xVal = arr.get( i, 0 );
				yVal = arr.get( i, 1 );

				zScoreX = ( (xVal - gx) / hX );
				zScoreY = ( (yVal - gy) / hY );

				subX = ( 1.0 / hX ) * kernelFunction( zScoreX );
				subY = ( 1.0 / hY ) * kernelFunction( zScoreY );
				ans += ( subX * subY );
			}
			z.set( ix, iy, ans / arr.shape[0] );
		}
	}
	out = {};
	setReadOnly( out, 'x', gridX );
	setReadOnly( out, 'y', gridY );
	setReadOnly( out, 'z', z );
	return out;
}


// EXPORTS //

module.exports = kde2d;
