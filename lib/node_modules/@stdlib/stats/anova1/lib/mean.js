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

/**
* Computes the arithmetic mean of a numeric array.
*
* @private
* @param {NumericArray} arr - input array
* @returns {number} arithmetic mean
*/
function mean( arr ) {
	var delta;
	var len;
	var mu;
	var i;

	mu = 0.0;
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		delta = arr[ i ] - mu;
		mu += delta / (i+1);
	}
	return mu;
}


// EXPORTS //

module.exports = mean;
