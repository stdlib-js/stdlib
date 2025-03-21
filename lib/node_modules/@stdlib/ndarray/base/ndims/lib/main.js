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

// MAIN //

/**
* Returns the number of ndarray dimensions.
*
* @param {ndarrayLike} x - input ndarray
* @returns {NonNegativeInteger} number of dimensions
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var n = ndims( zeros( [ 3, 3, 3 ] ) );
* // returns 3
*/
function ndims( x ) {
	var n = x.ndims; // Note: intentionally cache in case `ndims` is lazily resolved via accessor
	if ( typeof n === 'number' ) {
		return n;
	}
	return x.shape.length;
}


// EXPORTS //

module.exports = ndims;
