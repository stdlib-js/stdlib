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

var euclidean = require( './euclidean.js' );


// MAIN //

/**
* Computes the squared Euclidean distance between two data points.
*
* @private
* @param {NonNegativeInteger} N - number of elements
* @param {NumericArray} X - strided array
* @param {PositiveInteger} strideX - stride
* @param {NonNegativeInteger} offsetX - index offset
* @param {NumericArray} Y - strided array
* @param {PositiveInteger} strideY - stride
* @param {NonNegativeInteger} offsetY - index offset
* @returns {number} squared Euclidean distance
*/
function squaredEuclidean( N, X, strideX, offsetX, Y, strideY, offsetY ) { // TODO: consider moving to an "extended" BLAS package
	var d = euclidean( N, X, strideX, offsetX, Y, strideY, offsetY );
	return d * d;
}


// EXPORTS //

module.exports = squaredEuclidean;
