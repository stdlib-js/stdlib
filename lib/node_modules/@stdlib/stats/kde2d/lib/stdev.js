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

// MODULES //

var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Computes the unbiased standard deviation.
*
* @private
* @param {ndarrayLike} arr - input array
* @param {number} j - column for which to calculate the standard deviation
* @returns {number} standard deviation
*
* @example
* var ndarrayLike = require( './ndarray_like.js' );
*
* var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
* var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
* var arr = ndarrayLike( x, y );
* var out = stdev( arr, 1 );
* // returns ~2.568
*/
function stdev( arr, j ) {
	var delta;
	var mean;
	var M2;
	var i;
	var x;
	delta = 0.0;
	mean = 0.0;
	M2 = 0.0;

	for ( i = 0; i < arr.shape[0]; i++ ) {
		x = arr.get( i, j );
		delta = x - mean;
		mean += delta / ( i+1 );
		M2 += delta * ( x - mean );
	}
	return sqrt( M2 / ( i - 1 ) );
}


// EXPORTS //

module.exports = stdev;
