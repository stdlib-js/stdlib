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

var abs = require( '@stdlib/math/base/special/abs' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs2 = require( '@stdlib/math/base/special/abs2' );
var copysign = require( '@stdlib/math/base/special/copysign' );


// MAIN //

/**
* Constructs a Givens plane rotation.
*
* @param {number} a - rotational elimination parameter
* @param {number} b - rotational elimination parameter
* @param {Float64Array} out - output array
* @param {integer} stride - index increment
* @param {NonNegativeInteger} offset - starting index
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var out = drotg( 0.0, 2.0, new Float64Array( 4 ), 1, 0 );
* // returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
*/
function drotg( a, b, out, stride, offset ) {
	var scale;
	var sign;
	var aa;
	var ab;
	var r;
	var c;
	var s;
	var z;

	aa = abs( a );
	ab = abs( b );
	if ( aa > ab ) {
		sign = copysign( 1.0, a );
	} else {
		sign = copysign( 1.0, b );
	}
	scale = aa + ab;
	if ( scale === 0.0 ) {
		c = 1.0;
		s = 0.0;
		r = 0.0;
		z = 0.0;
	} else {
		r = scale * sqrt( abs2( a/scale ) + abs2( b/scale ) );
		r *= sign;
		c = a / r;
		s = b / r;
		z = 1.0;
		if ( aa > ab ) {
			z = s;
		} else if ( c !== 0.0 ) {
			z = 1.0 / c;
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

module.exports = drotg;
