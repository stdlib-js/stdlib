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

var max = require( '@stdlib/math/base/special/max' );
var min = require( '@stdlib/math/base/special/min' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var variance = require( '@stdlib/stats/base/variance' );
var mean = require( '@stdlib/stats/base/mean' );


// MAIN //

/**
* Computes the Pearson product-moment correlation coefficient between `x` and `y`.
*
* @private
* @param {NumericArray} x - first data array
* @param {NumericArray} y - second data array
* @returns {number} correlation coefficient
*
* @example
* var x = [ 1.0, 2.0, 2.0, 1.0 ];
* var y = [ 1.8, 2.2, 2.5, 1.4 ];
* var r = pcorr( x, y );
* // returns ~0.905
*/
function pcorr( x, y ) {
	var denom;
	var num;
	var out;
	var xy;
	var xm;
	var ym;
	var i;
	var n;

	n = x.length;
	xm = mean( n, x, 1 );
	ym = mean( n, y, 1 );
	xy = 0.0;
	for ( i = 0; i < n; i++ ) {
		xy += x[ i ] * y[ i ];
	}
	num = xy - ( n * xm * ym );
	denom = ( n-1 ) * sqrt(variance(n, 1, x, 1)) * sqrt(variance(n, 1, y, 1) );
	out = num / denom;

	// Handle rounding errors:
	return max( min( out, 1.0 ), -1.0 );
}


// EXPORTS //

module.exports = pcorr;
