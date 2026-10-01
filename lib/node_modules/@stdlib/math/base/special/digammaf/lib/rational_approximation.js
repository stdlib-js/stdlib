/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var rateval = require( './rational_pq.js' );


// VARIABLES //

// Location of the positive real root of the digamma function (`1532632 / 2**20`, exactly representable in single-precision):
var ROOT = 1.46163177490234375;

// Low-order correction to the location of the positive real root:
var ROOT_MINOR = f32( 0.3700660185912626595423257213284682051735604e-6 );

// Constant offset for the rational approximation on the interval `[1,2]`:
var Y = f32( 0.99558162689208984 );


// MAIN //

/**
* Evaluates the digamma function over interval `[1,2]`.
*
* @private
* @param {number} x - input value
* @returns {number} function value
*/
function digammaf( x ) {
	var g;
	var r;

	g = f32( x - ROOT );
	g = f32( g - ROOT_MINOR );
	r = rateval( f32( x - 1.0 ) );
	return f32( f32( g * Y ) + f32( g * r ) );
}


// EXPORTS //

module.exports = digammaf;
