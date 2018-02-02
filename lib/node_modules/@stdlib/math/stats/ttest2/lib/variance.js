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
* Computes the unbiased variance of an array.
*
* @private
* @param {NumericArray} arr - input array
* @returns {number} variance
*/
function variance( arr ) {
	var delta;
	var mean;
	var len;
	var M2;
	var i;
	var x;

	delta = 0.0;
	mean = 0.0;
	M2 = 0.0;
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		x = arr[ i ];
		delta = x - mean;
		mean += delta / (i+1);
		M2 += delta * ( x - mean );
	}
	return M2 / ( i - 1 );
}


// EXPORTS //

module.exports = variance;
