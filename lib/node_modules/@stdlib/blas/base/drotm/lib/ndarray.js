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

// MAIN //

/**
* Applies a modified Givens plane rotation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {Float64Array} param - parameters for the modified Givens transformation
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] );
* var y = new Float64Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* drotm( 4, x, -1, 3, y, -2, 6, param );
* // x => <Float64Array>[ -0.9, -0.8, 1.3, -1.6, 0.9, -0.3, -0.4 ]
* // y => <Float64Array>[ 1.7, -0.9, 0.5, 0.7, -1.6, 0.2, 2.4 ]
*/
function drotm( N, x, strideX, offsetX, y, strideY, offsetY, param ) {
	var dflag;
	var dh11;
	var dh12;
	var dh21;
	var dh22;
	var ix;
	var iy;
	var i;
	var w;
	var z;

	dflag = param[ 0 ];
	if ( N <= 0 || dflag === -2.0 ) {
		return y;
	}
	ix = offsetX;
	iy = offsetY;
	if ( strideX === strideY && strideX > 0 ) {
		if ( dflag < 0.0 ) {
			dh11 = param[ 1 ];
			dh12 = param[ 3 ];
			dh21 = param[ 2 ];
			dh22 = param[ 4 ];
			for ( i = 0; i < N; i++ ) {
				w = x[ ix ];
				z = y[ ix ];
				x[ ix ] = ( w * dh11 ) + ( z * dh12 );
				y[ ix ] = ( w * dh21 ) + ( z * dh22 );
				ix += strideX;
			}
			return y;
		}
		if ( dflag === 0.0 ) {
			dh12 = param[ 3 ];
			dh21 = param[ 2 ];
			for ( i = 0; i < N; i++ ) {
				w = x[ ix ];
				z = y[ ix ];
				x[ ix ] = w + ( z * dh12 );
				y[ ix ] = ( w * dh21 ) + z;
				ix += strideX;
			}
			return y;
		}
		dh11 = param[ 1 ];
		dh22 = param[ 4 ];
		for ( i = 0; i < N; i++ ) {
			w = x[ ix ];
			z = y[ ix ];
			x[ ix ] = ( w * dh11 ) + z;
			y[ ix ] = -w + ( z * dh22 );
			ix += strideX;
		}
		return y;
	}
	if ( dflag < 0.0 ) {
		dh11 = param[ 1 ];
		dh12 = param[ 3 ];
		dh21 = param[ 2 ];
		dh22 = param[ 4 ];
		for ( i = 0; i < N; i++ ) {
			w = x[ ix ];
			z = y[ iy ];
			x[ ix ] = ( w * dh11 ) + ( z * dh12 );
			y[ iy ] = ( w * dh21 ) + ( z * dh22 );
			ix += strideX;
			iy += strideY;
		}
		return y;
	}
	if ( dflag === 0.0 ) {
		dh12 = param[ 3 ];
		dh21 = param[ 2 ];
		for ( i = 0; i < N; i++ ) {
			w = x[ ix ];
			z = y[ iy ];
			x[ ix ] = w + ( z * dh12 );
			y[ iy ] = ( w * dh21 ) + z;
			ix += strideX;
			iy += strideY;
		}
		return y;
	}
	dh11 = param[ 1 ];
	dh22 = param[ 4 ];
	for ( i = 0; i < N; i++ ) {
		w = x[ ix ];
		z = y[ iy ];
		x[ ix ] = ( w * dh11 ) + z;
		y[ iy ] = -w + ( z * dh22 );
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = drotm;
