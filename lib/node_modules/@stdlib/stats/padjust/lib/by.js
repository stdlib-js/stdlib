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

// MODULES //

var min = require( '@stdlib/math/base/special/min' );
var cumin = require( '@stdlib/stats/base/cumin' );
var Float64Array = require( '@stdlib/array/float64' );
var order = require( './order.js' );


// MAIN //

/**
* Adjusts the p-values via the Benjamini & Yekutieli method.
*
* @private
* @param {ProbabilityArray} pvalues - p-values to be adjusted
* @param {PositiveInteger} comparisons - number of comparisons
* @returns {ProbabilityArray} adjusted p-values
*/
function by( pvalues, comparisons ) {
	var indices;
	var sorted;
	var len;
	var out;
	var i;
	var q;

	len = pvalues.length;
	indices = order( pvalues, true );
	q = 0;
	for ( i = 0; i < comparisons; i++ ) {
		q += 1 / ( 1 + i );
	}
	sorted = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		sorted[ i ] = q * comparisons / ( len - i ) * pvalues[ indices[ i ] ];
	}
	sorted = cumin( len, sorted, 1, sorted, 1 );
	out = new Array( len );
	for ( i = 0; i < len; i++ ) {
		out[ indices[ i ] ] = min( sorted[ i ], 1.0 );
	}
	return out;
}


// EXPORTS //

module.exports = by;
