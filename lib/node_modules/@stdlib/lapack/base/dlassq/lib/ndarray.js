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

/* eslint-disable max-len */

'use strict';

// MODULES //

var base = require( './base.js' );


// MAIN //

/**
* Returns an updated sum of squares represented in scaled form using alternative indexing semantics.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} X - input array
* @param {integer} strideX - stride length for `X`
* @param {NonNegativeInteger} offsetX - starting index for `X`
* @param {number} scale - scaling factor
* @param {number} sumsq - basic sum of squares from which output is factored out
* @param {Float64Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var out = new Float64Array( [ 0.0, 0.0 ] );
*
* dlassq( 4, X, 1, 0, 1.0, 0.0, out, 1, 0 );
* // out => <Float64Array>[ 1.0, 30.0 ]
*/
function dlassq( N, X, strideX, offsetX, scale, sumsq, out, strideOut, offsetOut ) {
	return base( N, X, strideX, offsetX, scale, sumsq, out, strideOut, offsetOut );
}


// EXPORTS //

module.exports = dlassq;
