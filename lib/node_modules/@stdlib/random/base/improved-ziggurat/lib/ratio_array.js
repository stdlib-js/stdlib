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
* Returns an array containing the ratio of each pair of consecutive elements in order: `X[ i+1 ] / X[ i ]`.
*
* @private
* @param {NumberArray} X - input array
* @returns {NumberArray} ratio array
*
* @example
* var R = ratioArray( [ 1.0, 2.0, 5.0 ] );
* // returns [ 2.0, 2.5 ]
*/
function ratioArray( X ) {
	var R;
	var i;

	R = [];
	for ( i = 0; i < X.length-1; i++ ) {
		R.push( X[ i+1 ] / X[ i ] );
	}
	return R;
}


// EXPORTS //

module.exports = ratioArray;
