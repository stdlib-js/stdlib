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


// MAIN //

/**
* Applies a modified Givens plane rotation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Float32Array} param - parameters for the modified Givens transformation
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] );
* var y = new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] );
* var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* srotm( 4, x, -1, 3, y, -2, 6, param );
* // x => <Float32Array>[ ~-0.9, ~-0.8, ~1.3, ~-1.6, ~0.9, ~-0.3, ~-0.4 ]
* // y => <Float32Array>[ ~1.7, ~-0.9, ~0.5, ~0.7, ~-1.6, ~0.2, ~2.4 ]
*/
function srotm( N, x, strideX, offsetX, y, strideY, offsetY, param ) {
	var sflag;
	var sh11;
	var sh12;
	var sh21;
	var sh22;
	var ix;
	var iy;
	var i;
	var w;
	var z;

	sflag = param[ 0 ];
	if ( N <= 0 || sflag === -2.0 ) {
		return y;
	}
	ix = offsetX;
	iy = offsetY;
	if ( strideX === strideY && strideX > 0 ) {
		if ( sflag < 0.0 ) {
			sh11 = param[ 1 ];
			sh12 = param[ 3 ];
			sh21 = param[ 2 ];
			sh22 = param[ 4 ];
			for ( i = 0; i < N; i++ ) {
				w = x[ ix ];
				z = y[ ix ];
				x[ ix ] = f32( f32( w * sh11 ) + f32( z * sh12 ) );
				y[ ix ] = f32( f32( w * sh21 ) + f32( z * sh22 ) );
				ix += strideX;
			}
			return y;
		}
		if ( sflag === 0.0 ) {
			sh12 = param[ 3 ];
			sh21 = param[ 2 ];
			for ( i = 0; i < N; i++ ) {
				w = x[ ix ];
				z = y[ ix ];
				x[ ix ] = f32( w + f32( z * sh12 ) );
				y[ ix ] = f32( f32( w * sh21 ) + z );
				ix += strideX;
			}
			return y;
		}
		sh11 = param[ 1 ];
		sh22 = param[ 4 ];
		for ( i = 0; i < N; i++ ) {
			w = x[ ix ];
			z = y[ ix ];
			x[ ix ] = f32( f32( w * sh11 ) + z );
			y[ ix ] = f32( -w + f32( z * sh22 ) );
			ix += strideX;
		}
		return y;
	}
	if ( sflag < 0.0 ) {
		sh11 = param[ 1 ];
		sh12 = param[ 3 ];
		sh21 = param[ 2 ];
		sh22 = param[ 4 ];
		for ( i = 0; i < N; i++ ) {
			w = x[ ix ];
			z = y[ iy ];
			x[ ix ] = f32( f32( w * sh11 ) + f32( z * sh12 ) );
			y[ iy ] = f32( f32( w * sh21 ) + f32( z * sh22 ) );
			ix += strideX;
			iy += strideY;
		}
		return y;
	}
	if ( sflag === 0.0 ) {
		sh12 = param[ 3 ];
		sh21 = param[ 2 ];
		for ( i = 0; i < N; i++ ) {
			w = x[ ix ];
			z = y[ iy ];
			x[ ix ] = f32( w + f32( z * sh12 ) );
			y[ iy ] = f32( f32( w * sh21 ) + z );
			ix += strideX;
			iy += strideY;
		}
		return y;
	}
	sh11 = param[ 1 ];
	sh22 = param[ 4 ];
	for ( i = 0; i < N; i++ ) {
		w = x[ ix ];
		z = y[ iy ];
		x[ ix ] = f32( f32( w * sh11 ) + z );
		y[ iy ] = f32( -w + f32( z * sh22 ) );
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = srotm;
