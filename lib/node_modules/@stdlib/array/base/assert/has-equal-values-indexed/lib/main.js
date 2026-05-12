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
* Tests if two indexed arrays have equal values.
*
* @param {Collection} x - first input array
* @param {Collection} y - second input array
* @returns {boolean} boolean indicating if both arrays have equal values
*
* @example
* var x = [ 0, 0, 1, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = hasEqualValuesIndexed( x, y );
* // returns true
*
* @example
* var x = [ 0, 0, 0, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = hasEqualValuesIndexed( x, y );
* // returns false
*/
function hasEqualValuesIndexed( x, y ) {
	var i;
	if ( x.length !== y.length ) {
		return false;
	}
	for ( i = 0; i < x.length; i++ ) {
		if ( x[ i ] !== y[ i ] ) {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = hasEqualValuesIndexed;
