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

var Float64Array = require( '@stdlib/array/float64' );
var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var base = require( './base.js' );


// MAIN //

/**
* Returns an updated sum of squares represented in scaled form.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} X - input array
* @param {integer} strideX - stride length for `X`
* @param {number} scale - scaling factor
* @param {number} sumsq - basic sum of squares from which output is factored out
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var out = dlassq( 4, X, 1, 1.0, 0.0 );
* // returns <Float64Array>[ 1.0, 30.0 ]
*/
function dlassq( N, X, strideX, scale, sumsq ) {
	var out;
	var ox;

	ox = stride2offset( N, strideX );
	out = new Float64Array( 2 );
	return base( N, X, strideX, ox, scale, sumsq, out, 1, 0 );
}


// EXPORTS //

module.exports = dlassq;
