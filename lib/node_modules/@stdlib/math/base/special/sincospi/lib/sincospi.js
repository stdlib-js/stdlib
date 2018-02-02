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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isInfinite = require( '@stdlib/math/base/assert/is-infinite' );
var abs = require( '@stdlib/math/base/special/abs' );
var sincos = require( '@stdlib/math/base/special/sincos' );
var floor = require( '@stdlib/math/base/special/floor' );
var PI = require( '@stdlib/constants/math/float64-pi' );
var copysign = require( '@stdlib/math/base/special/copysign' );


// MAIN //

/**
* Simultaneously computes the sine and cosine of a number times π.
*
* @private
* @param {(Array|TypedArray|Object)} out - destination array
* @param {number} x - input value
* @returns {(Array|TypedArray|Object)} two-element array containing sin(πx) and cos(πx)
*
* @example
* var v = sincospi( [ 0.0, 0.0 ], 0.0 );
* // returns [ 0.0, 1.0 ]
*
* @example
* var v = sincospi( [ 0.0, 0.0 ], 0.5 );
* // returns [ 1.0, 0.0 ]
*
* @example
* var v = sincospi( [ 0.0, 0.0 ], 0.1 );
* // returns [ ~0.309, ~0.951 ]
*
* @example
* var v = sincospi( [ 0.0, 0.0 ], NaN );
* // returns [ NaN, NaN ]
*/
function sincospi( out, x ) {
	var tmp;
	var ix;
	var ar;
	var r;

	if ( isnan( x ) || isInfinite( x ) ) {
		out[ 0 ] = NaN;
		out[ 1 ] = NaN;
		return out;
	}
	r = x % 2.0;
	ar = abs( r );
	if ( ar === 0.0 || ar === 1.0 ) {
		ix = floor( ar );
		out[ 0 ] = copysign( 0.0, r );
		out[ 1 ] = ( ix%2 === 1 ) ? -1.0 : 1.0;
		return out;
	}
	if ( ar < 0.25 ) {
		return sincos( out, PI*r );
	}
	if ( ar < 0.75 ) {
		ar = 0.5 - ar;
		sincos( out, PI*ar );
		tmp = out[ 0 ];
		out[ 0 ] = copysign( out[ 1 ], r );
		out[ 1 ] = tmp;
		return out;
	}
	if ( ar < 1.25 ) {
		r = copysign( 1.0, r ) - r;
		sincos( out, PI*r );
		out[ 1 ] *= -1;
		return out;
	}
	if ( ar < 1.75 ) {
		ar -= 1.5;
		sincos( out, PI*ar );
		tmp = out[ 0 ];
		out[ 0 ] = -copysign( out[ 1 ], r );
		out[ 1 ] = tmp;
		return out;
	}
	r -= copysign( 2.0, r );
	return sincos( out, PI*r );
}


// EXPORTS //

module.exports = sincospi;
