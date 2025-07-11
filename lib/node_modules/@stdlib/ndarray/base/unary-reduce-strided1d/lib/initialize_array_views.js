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

// MAIN //

/**
* Initialize ndarray-like objects for representing zero-dimensional sub-array views of ancillary ndarray arguments.
*
* ## Notes
*
* -   This function ignores the first two ndarray-like objects, which are assumed to be the input and output ndarray, respectively.
* -   This function mutates the provided output array.
*
* @private
* @param {ArrayLikeObject<Object>} arrays - list of ndarray-like objects
* @param {Array<Object>} out - output array
* @returns {Array<Object>} output array
*/
function initializeViews( arrays, out ) {
	var v;
	var i;

	for ( i = 2; i < arrays.length; i++ ) {
		v = arrays[ i ];
		out.push({
			'dtype': v.dtype,
			'data': v.data,
			'shape': [],
			'strides': [ 0 ],
			'offset': v.offset,
			'order': v.order
		});
	}
	return out;
}


// EXPORTS //

module.exports = initializeViews;
