/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Returns the maximum accessible index based on a set of provided strided array parameters.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {NonNegativeInteger} index
*
* @example
* var idx = maxViewBufferIndex( 3, 2, 10 );
* // returns 14
*/
function maxViewBufferIndex( N, stride, offset ) {
	if ( N > 0 && stride > 0 ) {
		offset += (N-1) * stride;
	}
	return offset;
}


// EXPORTS //

module.exports = maxViewBufferIndex;
