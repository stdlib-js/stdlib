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

var normalizeIndices = require( '@stdlib/ndarray/base/to-unique-normalized-indices' );
var indicesComplement = require( '@stdlib/array/base/indices-complement' );
var takeIndexed = require( '@stdlib/array/base/take-indexed' );


// MAIN //

/**
* Returns the shape defined by the dimensions which are **not** included in a list of dimensions.
*
* @private
* @param {NonNegativeIntegerArray} shape - input ndarray
* @param {IntegerArray} dims - list of dimensions
* @returns {NonNegativeIntegerArray} shape
*/
function nonCoreShape( shape, dims ) { // TODO: consider moving to a `@stdlib/ndarray/base` utility
	var ind = normalizeIndices( dims, shape.length-1 );
	if ( ind === null ) {
		// Note: this is an error condition, as `null` is returned when provided out-of-bounds indices...
		return [];
	}
	return takeIndexed( shape, indicesComplement( shape.length, ind ) );
}


// EXPORTS //

module.exports = nonCoreShape;
