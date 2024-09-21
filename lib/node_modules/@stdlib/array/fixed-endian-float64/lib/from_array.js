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
* Fills an output DataView with double-precision values.
*
* @private
* @param {DataView} view - output data view
* @param {Array} arr - input array
* @param {boolean} isLE - boolean indicating whether the store values in little-endian byte order
* @returns {DataView} output data view
*/
function fromArray( view, arr, isLE ) {
	var len;
	var i;

	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		view.setFloat64( i*8, arr[ i ], isLE ); // FIXME: handle accessor arrays, FIXME: avoid hardcoding bytes per element
	}
	return view;
}


// EXPORTS //

module.exports = fromArray;
