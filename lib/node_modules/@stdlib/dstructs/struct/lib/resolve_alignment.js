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
* Resolves the struct's byte alignment.
*
* @private
* @param {Array<Object>} fields - list of normalized field objects
* @returns {PositiveInteger} alignment
*/
function alignment( fields ) {
	var max;
	var v;
	var i;

	max = 0;
	for ( i = 0; i < fields.length; i++ ) {
		v = fields[ i ].alignment;
		if ( v > max ) {
			max = v;
		}
	}
	return max;
}


// EXPORTS //

module.exports = alignment;
