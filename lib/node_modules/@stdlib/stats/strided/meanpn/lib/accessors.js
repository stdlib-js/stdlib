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

var gsumpw = require( '@stdlib/blas/ext/base/gsumpw' ).ndarray;
var gapxsumpw = require( '@stdlib/blas/ext/base/gapxsumpw' ).ndarray;


// MAIN //

/**
* Computes the arithmetic mean of a strided array using a two-pass error correction algorithm.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} arithmetic mean
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = meanpn( 4, arraylike2object( x ), 2, 1 );
* // returns 1.25
*/
function meanpn( N, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var mu;
	var c;

	xbuf = x.data;
	get = x.accessors[ 0 ];

	if ( N === 1 || strideX === 0 ) {
		return get( xbuf, offsetX );
	}
	// Compute an estimate for the meanpn:
	mu = gsumpw( N, xbuf, strideX, offsetX ) / N;

	// Compute an error term:
	c = gapxsumpw( N, -mu, xbuf, strideX, offsetX ) / N;

	return mu + c;
}


// EXPORTS //

module.exports = meanpn;
