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
* Resolves slice strides for a provided normalized multi-slice object.
*
* @private
* @param {MultiSlice} slice - normalized multi-slice object
* @param {IntegerArray} strides - array strides
* @param {NonNegativeIntegerArray} rdims - indices of non-reduced dimensions
* @returns {IntegerArray} slice strides
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
*
* var s = new MultiSlice( new Slice( 2, 3, 1 ), new Slice( 10, null, -2 ) );
* // returns <MultiSlice>
*
* var strides = slice2strides( s, [ 8, 2 ], [ 1 ] );
* // returns [ -4 ]
*/
function slice2strides( slice, strides, rdims ) {
	var data;
	var out;
	var i;
	var j;

	data = slice.data;
	out = [];
	for ( i = 0; i < rdims.length; i++ ) {
		j = rdims[ i ];
		out.push( strides[j] * data[j].step );
	}
	return out;
}


// EXPORTS //

module.exports = slice2strides;
