/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );


// MAIN //

/**
* Applies a plane rotation with real cosine and complex sine.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} cx - first input array
* @param {integer} strideCX - `cx` stride length
* @param {NonNegativeInteger} offsetCX - starting `cx` index
* @param {Complex64Array} cy - second input array
* @param {integer} strideCY - `cy` stride length
* @param {NonNegativeInteger} offsetCY - starting `cy` index
* @param {number} c - cosine of the angle of rotation
* @param {Complex64} s - sine of the angle of rotation
* @returns {Complex64Array} `cy`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var s = new Complex64( 0.3, 0.4 );
*
* crot( cx.length, cx, 1, 0, cy, 1, 0, 0.8, s );
*
* var z = cy.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns ~-1.1
*
* var im = imagf( z );
* // returns ~-0.2
*
* z = cx.get( 0 );
* // returns <Complex64>
*
* re = realf( z );
* // returns ~0.8
*
* im = imagf( z );
* // returns ~1.6
*/
function crot( N, cx, strideCX, offsetCX, cy, strideCY, offsetCY, c, s ) {
	var viewX;
	var viewY;
	var sr;
	var si;
	var sx;
	var sy;
	var ix;
	var iy;
	var yr;
	var yi;
	var xr;
	var xi;
	var i;

	if ( N <= 0 ) {
		return cy;
	}
	viewX = reinterpret( cx, 0 );
	viewY = reinterpret( cy, 0 );

	ix = offsetCX * 2;
	iy = offsetCY * 2;

	sx = strideCX * 2;
	sy = strideCY * 2;

	sr = realf( s );
	si = imagf( s );

	for ( i = 0; i < N; i++ ) {
		yr = viewY[ iy ];
		yi = viewY[ iy+1 ];
		xr = viewX[ ix ];
		xi = viewX[ ix+1 ];

		// Compute tmp = c * cx[ ix ] + s * cy[ iy ]
		viewX[ ix ] = f32( f32( c*xr ) + f32( f32( sr*yr ) - f32( si*yi ) ) );
		viewX[ ix+1 ] = f32( f32( c*xi ) + f32( f32( sr*yi ) + f32( si*yr ) ) );

		// Compute cy[ iy ] = c * cy[ iy ] - conj(s) * cx[ ix ]
		viewY[ iy ] = f32( f32( c*yr ) - f32( f32( sr*xr ) + f32( si*xi ) ) );
		viewY[ iy+1 ] = f32( f32( c*yi ) - f32( f32( sr*xi ) - f32( si*xr ) ) );

		ix += sx;
		iy += sy;
	}
	return cy;
}


// EXPORTS //

module.exports = crot;
