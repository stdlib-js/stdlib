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

// MAIN //

/**
* Resolves a stride length for broadcasting a one-dimensional array.
*
* @private
* @param {NonNegativeInteger} M - input array length
* @param {NonNegativeInteger} N - output array length
* @throws {Error} input arrays must be broadcast compatible
* @returns {NonNegativeInteger} stride length
*/
function resolveStride( M, N ) {
	// Note that this effectively in-lines logic from `@stdlib/array/base/broadcast-array` in order to avoid unnecessary object creation...
	if ( M === 1 ) {
		return 0;
	}
	if ( M === N ) {
		return 1;
	}
	throw new Error( 'invalid arguments. Input arguments are not broadcast compatible.' );
}


// EXPORTS //

module.exports = resolveStride;
