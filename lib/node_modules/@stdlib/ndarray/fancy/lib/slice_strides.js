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
* Resolves slice strides.
*
* @private
* @param {MultiSlice} slice - multi-slice object
* @param {IntegerArray} strides - array strides
* @param {NonNegativeIntegerArray} sdims - indices of non-reduced dimensions
* @returns {IntegerArray} slice strides
*/
function sliceStrides( slice, strides, sdims ) {
	var data;
	var out;
	var i;
	var j;

	data = slice.data;
	out = [];
	for ( i = 0; i < sdims.length; i++ ) {
		j = sdims[ i ];
		out.push( strides[j]*data[j].step );
	}
	return out;
}


// EXPORTS //

module.exports = sliceStrides;
