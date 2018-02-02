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
var trunc = require( '@stdlib/math/base/special/trunc' );


// MAIN //

/**
* Wraps a value on the half-open interval `[min,max)`.
*
* @param {number} v - input value
* @param {number} min - minimum value
* @param {number} max - maximum value
* @returns {number} wrapped value
*
* @example
* var v = wrap( 3.14, 0.0, 5.0 );
* // returns 3.14
*
* v = wrap( -3.14, 0.0, 5.0 );
* // returns ~1.86
*
* v = wrap( 10.0, 0.0, 5.0 );
* // returns 0.0
*
* v = wrap( -0.0, 0.0, 5.0 );
* // returns 0.0
*
* v = wrap( 0.0, -0.0, 5.0 );
* // returns 0.0
*
* v = wrap( NaN, 0.0, 5.0 );
* // returns NaN
*
* v = wrap( 0.0, NaN, 5.0 );
* // returns NaN
*
* v = wrap( 3.14, 0.0, NaN );
* // returns NaN
*
* v = wrap( 3.14, 5.0, 0.0 );
* // returns NaN
*/
function wrap( v, min, max ) {
	var delta;
	if (
		isnan( v ) ||
		isnan( min ) ||
		isnan( max ) ||
		max <= min
	) {
		return NaN;
	}
	// Normalize +-0 to +0...
	if ( v === 0.0 ) {
		v = 0.0;
	}
	if ( min === 0.0 ) {
		min = 0.0;
	}
	if ( max === 0.0 ) {
		max = 0.0;
	}
	// Simple case where value is already within range...
	if ( min <= v && v < max ) {
		return v;
	}
	// Perform range reduction...
	delta = max - min;
	if ( v < min ) {
		v += delta * ( trunc( (min-v)/delta ) + 1.0 );
	}
	return min + ( (v-min) % delta );
}


// EXPORTS //

module.exports = wrap;
