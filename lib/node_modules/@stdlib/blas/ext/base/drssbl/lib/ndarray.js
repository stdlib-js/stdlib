/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var abs2 = require( '@stdlib/math/base/special/abs2' );
var abs = require( '@stdlib/math/base/special/abs' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// VARIABLES //

// Blue's scaling constants:
var SBIG = 1.11137937474253874e-162;
var SSML = 4.49891379454319638e+161;
var TBIG = 1.99791907220223503e+146;
var TSML = 1.49166814624004135e-154;


// MAIN //

/**
* Computes the residual sum of squares of two double-precision floating-point strided arrays using Blue's algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - first input array
* @param {integer} strideX - stride length of `x`
* @param {NonNegativeInteger} offsetX - starting index of `x`
* @param {Float64Array} y - second input array
* @param {integer} strideY - stride length of `y`
* @param {NonNegativeInteger} offsetY - starting index of `y`
* @returns {number} residual sum of squares
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
* var y = new Float64Array( [ 2.0, 1.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var z = drssbl( x.length, x, 1, 0, y, 1, 0 );
* // returns 72.0
*/
function drssbl( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var notbig;
	var sumsq;
	var scale;
	var abig;
	var asml;
	var amed;
	var ymin;
	var ymax;
	var az;
	var ix;
	var iy;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	iy = offsetY;

	// Initialize loop values for accumulation:
	notbig = true;

	abig = 0.0;
	amed = 0.0;
	asml = 0.0;

	/*
	* Compute the sum of squares in 3 accumulators:
	*
	* -   `abig`: sum of squares scaled down to avoid overflow
	* -   `asml`: sum of squares scaled up to avoid underflow
	* -   `amed`: sum of squares that do not require scaling
	*
	* The thresholds and multipliers are
	*
	* -   `tbig`: values bigger than this are scaled down by `sbig`
	* -   `tsml`: values smaller than this are scaled up by `ssml`
	*/
	for ( i = 0; i < N; i++ ) {
		az = abs( x[ ix ] - y[ iy ] );
		if ( az > TBIG ) {
			abig += abs2( az*SBIG );
			notbig = false;
		} else if ( az < TSML ) {
			if ( notbig ) {
				asml += abs2( az*SSML );
			}
		} else {
			amed += abs2( az );
		}
		ix += strideX;
		iy += strideY;
	}
	// Combine `abig` and `amed` or `amed` and `asml` if more than one accumulator was used...
	if ( abig > 0.0 ) {
		// Combine `abig` and `amed` if `abig > 0`...
		if ( amed > 0.0 || isnan( amed ) ) {
			abig += ( amed*SBIG ) * SBIG;
		}
		scale = 1.0 / SBIG;
		sumsq = abig;
		return sumsq * ( scale*scale );
	}
	if ( asml > 0.0 ) {
		// Combine `amed` and `asml` if `asml > 0`...
		if ( amed > 0.0 || isnan( amed ) ) {
			amed = sqrt( amed );
			asml = sqrt( asml ) / SSML;
			if ( asml > amed ) {
				ymin = amed;
				ymax = asml;
			} else {
				ymin = asml;
				ymax = amed;
			}
			scale = 1.0;
			sumsq = abs2( ymax ) * ( 1.0 + abs2( ymin/ymax ) );
		} else {
			scale = 1.0 / SSML;
			sumsq = asml;
		}
		return sumsq * ( scale*scale );
	}
	// Otherwise all values are mid-range or zero...
	scale = 1.0;
	sumsq = amed;
	return sumsq * ( scale*scale );
}


// EXPORTS //

module.exports = drssbl;
