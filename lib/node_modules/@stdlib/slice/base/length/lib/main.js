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

var ceil = require( '@stdlib/math/base/special/ceil' );


// MAIN //

/**
* Returns the number of elements in a normalized slice.
*
* @param {Slice} slice - normalized Slice object
* @returns {NonNegativeInteger} number of elements
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );
*
* var s = new Slice( 2, null, 1 );
* // returns <Slice>
*
* var v = sliceLength( normalizeSlice( s, 10, false ) );
* // returns 8
*
* v = sliceLength( normalizeSlice( s, 11, false ) );
* // returns 9
*
* v = sliceLength( normalizeSlice( s, 5, false ) );
* // returns 3
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );
*
* var s = new Slice( 2, null, 2 );
* // returns <Slice>
*
* var v = sliceLength( normalizeSlice( s, 10, false ) );
* // returns 4
*
* v = sliceLength( normalizeSlice( s, 11, false ) );
* // returns 5
*
* v = sliceLength( normalizeSlice( s, 5, false ) );
* // returns 2
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );
*
* var s = new Slice( -1, null, -2 );
*
* var v = sliceLength( normalizeSlice( s, 10, false ) );
* // returns 5
*
* v = sliceLength( normalizeSlice( s, 11, false ) );
* // returns 6
*
* v = sliceLength( normalizeSlice( s, 5, false ) );
* // returns 3
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );
*
* var s = new Slice( 3, 5, -1 );
*
* var v = sliceLength( normalizeSlice( s, 10, false ) );
* // returns 0
*
* v = sliceLength( normalizeSlice( s, 11, false ) );
* // returns 0
*
* v = sliceLength( normalizeSlice( s, 5, false ) );
* // returns 0
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );
*
* var s = new Slice( 5, 3, 1 );
*
* var v = sliceLength( normalizeSlice( s, 10, false ) );
* // returns 0
*
* v = sliceLength( normalizeSlice( s, 11, false ) );
* // returns 0
*
* v = sliceLength( normalizeSlice( s, 5, false ) );
* // returns 0
*/
function sliceLength( slice ) {
	var inc;
	var x1;
	var x2;

	x1 = slice.start;
	x2 = slice.stop;
	inc = slice.step;

	// For a normalized slice, stop should only be `null` when the increment is negative...
	if ( x2 === null ) {
		x2 = -1; // set to -1 to ensure that the first element is included
	}
	if (
		// If the increment is positive, the slice is empty whenever the starting index is greater than or equal to the stopping index:
		( inc > 0 && x1 >= x2 ) ||

		// If the increment is negative, the slice is empty whenever the starting index is less than or equal to the stopping index:
		( inc < 0 && x1 <= x2 )
	) {
		return 0;
	}
	return ceil( ( x2 - x1 ) / inc );
}


// EXPORTS //

module.exports = sliceLength;
