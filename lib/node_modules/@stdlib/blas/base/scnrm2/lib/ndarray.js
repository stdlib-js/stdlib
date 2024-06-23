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

var f32 = require( '@stdlib/number/float64/base/to-float32' );
var FLOAT32_MAX = require( '@stdlib/constants/float32/max' );
var absf = require( '@stdlib/math/base/special/absf' );
var abs2f = require( '@stdlib/math/base/special/abs2f' );
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );


// VARIABLES //

// Blue's scaling constants:
var tsml = 1.08420217E-19;
var tbig = 4.50359963E+15;
var ssml = 3.77789319E+22;
var sbig = 1.32348898E-23;


// MAIN //

/**
* Computes the L2-norm of a complex single-precision floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} cx - input array
* @param {integer} strideX - `cx` stride length
* @param {NonNegativeInteger} offsetX - starting index for `cx`
* @returns {number} L2-norm
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var cx = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
*
* var norm = scnrm2( 4, cx, 1, 0 );
* // returns ~0.8
*/
function scnrm2( N, cx, strideX, offsetX ) {
	var notbig;
	var sumsq;
	var viewX;
	var abig;
	var amed;
	var asml;
	var ymax;
	var ymin;
	var scl;
	var ax;
	var ix;
	var sx;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	// Reinterpret the input array as a real-valued array comprised of interleaved real and imaginary components:
	viewX = reinterpret( cx, 0 );
	sx = strideX * 2;
	ix = offsetX * 2;

	// Initialize loop values for accumulation:
	notbig = true;

	sumsq = 0.0;
	abig = 0.0;
	amed = 0.0;
	asml = 0.0;
	scl = 1.0;

	// Compute the sum of squares using 3 accumulators--`abig` (sum of squares scaled down to avoid overflow), `asml` (sum of squares scaled up to avoid underflow), `amed` (sum of squares that do not require scaling)--and thresholds and multipliers--`tbig` (values bigger than this are scaled down by `sbig`) and `tsml` (values smaller than this are scaled up by `ssml`)...
	for ( i = 0; i < N; i++ ) {
		ax = absf( viewX[ ix ] );
		if ( ax > tbig ) {
			abig = f32( abig + abs2f( ax * sbig ) );
			notbig = false;
		} else if ( ax < tsml ) {
			if ( notbig ) {
				asml = f32( asml + abs2f( ax * ssml ) );
			}
		} else {
			amed = f32( amed + f32( ax * ax ) );
		}
		ax = absf( viewX[ ix + 1 ] );
		if ( ax > tbig ) {
			abig = f32( abig + abs2f( ax * sbig ) );
			notbig = false;
		} else if ( ax < tsml ) {
			if ( notbig ) {
				asml = f32( asml + abs2f( ax * ssml ) );
			}
		} else {
			amed = f32( amed + f32( ax * ax ) );
		}
		ix += sx;
	}
	// Combine `abig` and `amed` or `amed` and `asml` if more than one accumulator was used...
	if ( abig > 0.0 ) {
		// Combine `abig` and `amed` if `abig` > 0...
		if ( amed > 0.0 || ( amed > FLOAT32_MAX ) || ( amed !== amed ) ) {
			abig = f32( abig + f32( f32( amed * sbig ) * sbig ) );
		}
		scl = f32( 1.0 / sbig );
		sumsq = abig;
	} else if ( asml > 0.0 ) {
		// Combine `amed` and `asml` if `asml` > 0...
		if ( amed > 0.0 || amed > FLOAT32_MAX || ( amed !== amed ) ) {
			amed = sqrtf( amed );
			asml = f32( sqrtf( asml ) / ssml );
			if ( asml > amed ) {
				ymin = amed;
				ymax = asml;
			} else {
				ymin = asml;
				ymax = amed;
			}
			scl = 1.0;
			sumsq = f32( f32( ymax * ymax ) * f32( 1.0 + abs2f( ymin / ymax ) ) ); // eslint-disable-line max-len
		} else {
			scl = f32( 1.0 / ssml );
			sumsq = asml;
		}
	} else {
		// All values are mid-range...
		scl = 1.0;
		sumsq = amed;
	}
	return f32( sqrtf( sumsq ) * scl );
}


// EXPORTS //

module.exports = scnrm2;
