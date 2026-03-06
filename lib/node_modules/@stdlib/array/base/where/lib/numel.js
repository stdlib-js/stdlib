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

// MODULES //

var ceil = require( '@stdlib/math/base/special/ceil' );


// MAIN //

/**
* Computes the number of indexed elements in a strided array.
*
* @private
* @param {NonNegativeInteger} len - array length
* @param {integer} stride - array stride
* @param {NonNegativeInteger} offset - array offset
* @returns {NonNegativeInteger} number of indexed elements
*
* @example
* var N = numel( 10, -2, 9 );
* // returns 5
*
* N = numel( 10, -2, 8 );
* // returns 5
*
* N = numel( 10, -2, 7 );
* // returns 4
*
* N = numel( 10, -2, 6 );
* // returns 4
*
* N = numel( 10, -2, 5 );
* // returns 3
*
* @example
* var N = numel( 10, -3, 9 );
* // returns 4
*
* N = numel( 10, -3, 8 );
* // returns 3
*
* N = numel( 10, -3, 7 );
* // returns 3
*
* N = numel( 10, -3, 6 );
* // returns 3
*
* N = numel( 10, -3, 5 );
* // returns 2
*
* @example
* var N = numel( 10, 2, 0 );
* // returns 5
*
* N = numel( 10, 2, 1 );
* // returns 5
*
* N = numel( 10, 2, 2 );
* // returns 4
*
* N = numel( 10, 2, 3 );
* // returns 4
*
* @example
* var N = numel( 10, 3, 0 );
* // returns 4
*
* N = numel( 10, 3, 1 );
* // returns 3
*
* N = numel( 10, 3, 2 );
* // returns 3
*
* N = numel( 10, 3, 3 );
* // returns 3
*/
function numel( len, stride, offset ) {
	if ( stride < 0 ) {
		return ceil( (offset+1) / -stride );
	}
	return ceil( (len-offset) / stride );
}


// EXPORTS //

module.exports = numel;
