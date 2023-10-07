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

var copyIndexed = require( '@stdlib/array/base/copy-indexed' );


// MAIN //

/**
* Returns the strides of a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @param {boolean} copy - boolean indicating whether to explicitly copy the value assigned to the input ndarray's `strides` property
* @returns {IntegerArray} strides
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var out = strides( zeros( [ 3, 3, 3 ] ), false );
* // returns [ 9, 3, 1 ]
*/
function strides( x, copy ) {
	var st = x.strides;
	if ( copy ) {
		return copyIndexed( st );
	}
	return st;
}


// EXPORTS //

module.exports = strides;
