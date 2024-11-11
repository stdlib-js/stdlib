/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var FLOAT64_MAX = require( '@stdlib/constants/float64/max' );
var abs = require( '@stdlib/math/base/special/abs' );
var abs2 = require( '@stdlib/math/base/special/abs2' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// VARIABLES //

// Blue's scaling constants:
var tsml = 1.4916681462400413E-154;
var tbig = 1.9979190722022350E+146;
var ssml = 4.4989137945431964E+161;
var sbig = 1.1113793747425387E-162;


// MAIN //

/**
* Computes the L2-norm of a double-precision floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} L2-norm
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var z = dnrm2( 4, x, 2, 1 );
* // returns 5.0
*/
function dnrm2( N, x, stride, offset ) {
	var notbig;
	var sumsq;
	var abig;
	var amed;
	var asml;
	var ymax;
	var ymin;
	var scl;
	var ax;
	var ix;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offset;

	// Initialize loop values for accumulation:
	notbig = true;

	sumsq = 0.0;
	abig = 0.0;
	amed = 0.0;
	asml = 0.0;
	scl = 1.0;

	// Compute the sum of squares using 3 accumulators--`abig` (sum of squares scaled down to avoid overflow), `asml` (sum of squares scaled up to avoid underflow), `amed` (sum of squares that do not require scaling)--and thresholds and multipliers--`tbig` (values bigger than this are scaled down by `sbig`) and `tsml` (values smaller than this are scaled up by `ssml`)...
	for ( i = 0; i < N; i++ ) {
		ax = abs( x[ ix ] );
		if ( ax > tbig ) {
			abig += abs2( ax * sbig );
			notbig = false;
		} else if ( ax < tsml ) {
			if ( notbig ) {
				asml += abs2( ax * ssml );
			}
		} else {
			amed += ( ax * ax );
		}
		ix += stride;
	}
	// Combine `abig` and `amed` or `amed` and `asml` if more than one accumulator was used...
	if ( abig > 0.0 ) {
		// Combine `abig` and `amed` if `abig` > 0...
		if ( amed > 0.0 || ( amed > FLOAT64_MAX ) || ( amed !== amed ) ) {
			abig += ( ( amed * sbig ) * sbig );
		}
		scl = 1.0 / sbig;
		sumsq = abig;
	} else if ( asml > 0.0 ) {
		// Combine `amed` and `asml` if `asml` > 0...
		if ( amed > 0.0 || amed > FLOAT64_MAX || ( amed !== amed ) ) {
			amed = sqrt( amed );
			asml = sqrt( asml ) / ssml;
			if ( asml > amed ) {
				ymin = amed;
				ymax = asml;
			} else {
				ymin = asml;
				ymax = amed;
			}
			scl = 1.0;
			sumsq = ( ymax * ymax ) * ( 1.0 + abs2( ymin / ymax ) );
		} else {
			scl = 1.0 / ssml;
			sumsq = asml;
		}
	} else {
		// All values are mid-range...
		scl = 1.0;
		sumsq = amed;
	}
	return sqrt( sumsq ) * scl;
}


// EXPORTS //

module.exports = dnrm2;
