/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var SBIG = 1.11137937474253874e-162;
var SSML = 4.49891379454319638e+161;
var TBIG = 1.99791907220223503e+146;
var TSML = 1.49166814624004135e-154;


// MAIN //

/**
* Returns an updated sum of squares represented in scaled form.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} X - input array
* @param {integer} strideX - stride length for `X`
* @param {NonNegativeInteger} offsetX - starting index for `X`
* @param {number} scale - scaling factor
* @param {number} sumsq - basic sum of squares from which output is factored out
* @param {Float64Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var out = new Float64Array( [ 0.0, 0.0 ] );
*
* dlassq( 4, X, 1, 0, 1.0, 0.0, out, 1, 0 );
* // out => <Float64Array>[ 1.0, 30.0 ]
*/
function dlassq( N, X, strideX, offsetX, scale, sumsq, out, strideOut, offsetOut ) { // eslint-disable-line max-len
	var notbig;
	var abig;
	var asml;
	var amed;
	var ymin;
	var ymax;
	var ax;
	var ox;
	var i;

	if ( isnan( scale ) || isnan( sumsq ) ) {
		return out;
	}
	if ( sumsq === 0.0 ) {
		scale = 1.0;
	}
	if ( scale === 0.0 ) {
		scale = 1.0;
		sumsq = 0.0;
	}
	if ( N <= 0 ) {
		out[ offsetOut ] = scale;
		out[ offsetOut + strideOut ] = sumsq;
		return out;
	}
	/*
	* Compute the sum of squares in 3 accumulators:
	*
	* -   `abig`: sums of squares scaled down to avoid overflow
	* -   `asml`: sums of squares scaled up to avoid underflow
	* -   `amed`: sums of squares that do not require scaling
	*
	* The thresholds and multipliers are
	*
	* -   `tbig`: values bigger than this are scaled down by `sbig`
	* -   `tsml`: values smaller than this are scaled up by `ssml`
	*/
	notbig = true;
	asml = 0.0;
	amed = 0.0;
	abig = 0.0;
	ox = offsetX;
	for ( i = 0; i < N; i++ ) {
		ax = abs( X[ ox ] );
		if ( ax > TBIG ) {
			abig += abs2( ax*SBIG );
			notbig = false;
		} else if ( ax < TSML ) {
			if ( notbig ) {
				asml += abs2( ax*SSML );
			}
		} else {
			amed += abs2( ax );
		}
		ox += strideX;
	}
	// Put the existing sum of squares into one of the accumulators...
	if ( sumsq > 0.0 ) {
		ax = scale * sqrt( sumsq );
		if ( ax > TBIG ) {
			if ( scale > 1.0 ) {
				scale *= SBIG;
				abig += scale * ( scale * sumsq );
			} else {
				// `sumsq > tbig^2` => `(sbig * (sbig * sumsq))` is representable
				abig += scale * ( scale * ( SBIG * ( SBIG*sumsq ) ) );
			}
		} else if ( ax < TSML ) {
			if ( notbig ) {
				if ( scale < 1.0 ) {
					scale *= SSML;
					asml += scale * ( scale*sumsq );
				} else {
					// `sumsq < tsml^2` => `(ssml * (ssml * sumsq))` is representable
					asml += scale * ( scale * ( SSML * ( SSML*sumsq ) ) );
				}
			}
		} else {
			amed += scale * ( scale*sumsq );
		}
	}
	// Combine `abig` and `amed` or `amed` and `asml` if more than one accumulator was used...
	if ( abig > 0.0 ) {
		// Combine `abig` and `amed` if `abig > 0`...
		if ( amed > 0.0 || isnan( amed ) ) {
			abig += ( amed*SBIG ) * SBIG;
		}
		out[ offsetOut ] = 1.0 / SBIG;
		out[ offsetOut + strideOut ] = abig;
		return out;
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
		out[ offsetOut ] = scale;
		out[ offsetOut + strideOut ] = sumsq;
		return out;
	}
	// Otherwise all values are mid-range or zero...
	out[ offsetOut ] = 1.0;
	out[ offsetOut + strideOut ] = amed;
	return out;
}


// EXPORTS //

module.exports = dlassq;
