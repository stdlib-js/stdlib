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

var isSingleSegmentCompatible = require( '@stdlib/ndarray/base/assert/is-single-segment-compatible' );
var iterationOrder = require( '@stdlib/ndarray/base/iteration-order' );


// MAIN //

/**
* Returns a boolean indicating if an array is contiguous.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - stride array
* @param {NonNegativeInteger} offset - index offset
* @returns {boolean} boolean indicating if an array is contiguous
*
* @example
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var bool = isContiguous( shape, strides, offset );
* // returns true
*
* @example
* var shape = [ 2, 2 ];
* var strides = [ -2, 1 ];
* var offset = 2;
*
* var bool = isContiguous( shape, strides, offset );
* // returns false
*
* @example
* var shape = [ 2, 2 ];
* var strides = [ 2, 2 ];
* var offset = 0;
*
* var bool = isContiguous( shape, strides, offset );
* // returns false
*/
function isContiguous( shape, strides, offset ) {
	return (
		iterationOrder( strides ) !== 0 &&
		isSingleSegmentCompatible( shape, strides, offset )
	);
}


// EXPORTS //

module.exports = isContiguous;
