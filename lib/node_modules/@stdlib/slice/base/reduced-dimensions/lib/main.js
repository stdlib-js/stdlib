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
* Returns a list of nreduced dimensions in an un-normalized multi-slice.
*
* @param {MultiSlice} slice - input slice
* @returns {NonNegativeIntegerArray} list of reduced dimensions
*
* @example
* var MultiSlice = require( '@stdlib/slice/multi' );
* var Slice = require( '@stdlib/slice/ctor' );
*
* var s = new MultiSlice( 1, null, 2, void 0, new Slice( 0, 10, 1 ) );
* // returns <MultiSlice>
*
* var indices = reducedDimensions( s );
* // returns [ 0, 2 ]
*/
function reducedDimensions( slice ) {
	var data;
	var out;
	var i;

	data = slice.data;
	out = [];
	for ( i = 0; i < data.length; i++ ) {
		if ( typeof data[ i ] === 'number' ) {
			out.push( i );
		}
	}
	return out;
}


// EXPORTS //

module.exports = reducedDimensions;
