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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var absf = require( '@stdlib/math/base/special/absf' );
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );
var abs2f = require( '@stdlib/math/base/special/abs2f' );
var copysignf = require( '@stdlib/math/base/special/copysignf' );


// MAIN //

/**
* Constructs a Givens plane rotation.
*
* @param {number} a - rotational elimination parameter
* @param {number} b - rotational elimination parameter
* @param {Float32Array} out - output array
* @param {integer} stride - index increment
* @param {NonNegativeInteger} offset - starting index
* @returns {Float32Array} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var out = srotg( 0.0, 2.0, new Float32Array( 4 ), 1, 0 );
*  // returns <Float32Array>[ 2.0, 1.0, 0.0, 1.0 ]
*/
function srotg( a, b, out, stride, offset ) {
	var scale;
	var sign;
	var aa;
	var ab;
	var r;
	var c;
	var s;
	var z;

	aa = absf( a );
	ab = absf( b );
	if ( aa > ab ) {
		sign = copysignf( 1.0, a );
	} else {
		sign = copysignf( 1.0, b );
	}
	scale = float64ToFloat32( aa + ab );
	if ( scale === 0.0 ) {
		c = 1.0;
		s = 0.0;
		r = 0.0;
		z = 0.0;
	} else {
		r = float64ToFloat32( scale * sqrtf( float64ToFloat32( abs2f( float64ToFloat32( a/scale ) ) + abs2f( float64ToFloat32( b/scale ) ) ) ) ); // eslint-disable-line max-len
		r = float64ToFloat32( r * sign );
		c = float64ToFloat32( a / r );
		s = float64ToFloat32( b / r );
		z = 1.0;
		if ( aa > ab ) {
			z = s;
		} else if ( c !== 0.0 ) {
			z = float64ToFloat32( 1.0 / c );
		}
	}
	a = r;
	b = z;
	out[ offset ] = a;
	out[ offset + stride ] = b;
	out[ offset + ( 2 * stride ) ] = c;
	out[ offset + ( 3 * stride ) ] = s;
	return out;
}


// EXPORTS //

module.exports = srotg;
