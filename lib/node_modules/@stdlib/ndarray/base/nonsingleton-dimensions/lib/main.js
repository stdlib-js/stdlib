/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Returns the number of non-singleton dimensions.
*
* ## Notes
*
* -   A singleton dimension is a dimension whose size is equal to `1`.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @returns {NonNegativeInteger} number of non-singleton dimensions
*
* @example
* var shape = [ 2, 2, 1 ];
*
* var n = nonsingletonDimensions( shape );
* // returns 2
*
* @example
* var shape = [ 1, 1, 1 ];
*
* var n = nonsingletonDimensions( shape );
* // returns 0
*/
function nonsingletonDimensions( shape ) {
	var cnt;
	var i;

	cnt = 0;
	for ( i = 0; i < shape.length; i++ ) {
		if ( shape[ i ] !== 1 ) {
			cnt += 1;
		}
	}
	return cnt;
}


// EXPORTS //

module.exports = nonsingletonDimensions;
