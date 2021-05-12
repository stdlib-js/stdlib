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

var pow = require( '@stdlib/math/base/special/pow' );
var min = require( '@stdlib/math/base/special/min' );
var EPSILON = require( '@stdlib/constants/float64/eps' );
var stdev = require( './stdev.js' );
var iqr = require( './iqr.js' );


// MAIN //

/**
* Computes the rule-of-thumb bandwidth for the values in a column of `x`.
*
* @private
* @param {ndarrayLike} arr - input ndarray
* @param {number} j - index of the column from which to obtain the values
* @returns {NumericArray} array with bandwidth values
*
* @example
* var ndarrayLike = require( './ndarray_like.js' );
*
* var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
* var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
* var arr = ndarrayLike( x, y );
* var out = pickBandwidth( arr, 1 );
* // returns ~1.717
*/
function pickBandwidth( arr, j ) {
	var minElement;
	var sigmaHat;
	var powTerm;
	var iqrVal;
	var out;

	iqrVal = iqr( arr, j ) / 1.34;
	sigmaHat = stdev( arr, j );
	minElement = min( iqrVal, sigmaHat );
	powTerm = pow( arr.shape[ 0 ], -1/5 );
	out = 1.06 * powTerm * minElement;
	if ( out === 0 ) {
		out = EPSILON;
	}
	return out;
}


// EXPORTS //

module.exports = pickBandwidth;
