/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Removes and returns the last element of a typed array.
*
* @private
* @param {TypedArray} arr - input array
* @returns {Array} input array and the removed element
*
* @example
* var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* var out = pop( arr );
* // returns [ <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ], 5.0 ]
*/
function pop( arr ) {
	var view;
	var len;
	var v;
	if ( arr.length === 0 ) {
		return [ arr, void 0 ];
	}
	len = arr.length - 1;
	v = arr[ len ];
	view = new arr.constructor( arr.buffer, arr.byteOffset, len );
	return [ view, v ];
}


// EXPORTS //

module.exports = pop;
