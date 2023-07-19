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
var max = require( '@stdlib/math/base/special/max' );
var Float64Array = require( '@stdlib/array/float64' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var order = require( './order.js' );


// VARIABLES //

var slice = Array.prototype.slice;


// MAIN //

/**
* Adjusts the p-values via Hommel's method.
*
* @private
* @param {ProbabilityArray} pvalues - p-values to be adjusted
* @param {PositiveInteger} comparisons - number of comparisons
* @returns {ProbabilityArray} adjusted p-values
*/
function hommel( pvalues, comparisons ) {
	var indices;
	var diff;
	var adj;
	var idx;
	var len;
	var out;
	var mq;
	var m;
	var i;
	var j;
	var k;
	var q;
	var v;

	len = pvalues.length;
	diff = comparisons - len;
	if ( diff > 0 ) {
		pvalues = slice.call( pvalues );
		while ( diff > 0 ) {
			pvalues.push( 1.0 );
			diff -= 1;
		}
	}
	indices = order( pvalues );
	m = PINF;
	for ( i = 0; i < comparisons; i++ ) {
		v = comparisons * pvalues[ i ] / ( i+1 );
		if ( v < m ) {
			m = v;
		}
	}
	q = new Float64Array( comparisons );
	adj = new Float64Array( comparisons );
	for ( i = comparisons - 1; i > 1; i-- ) {
		mq = PINF;
		for ( k = comparisons - i + 1; k <= comparisons; k++ ) {
			v = i * pvalues[ indices[ k ] ] / ( 2 + k - comparisons + i - 1 );
			if ( v < mq ) {
				mq = v;
			}
		}
		for ( j = 0; j < comparisons - i + 1; j++ ) {
			q[ j ] = min( i * pvalues[ indices[ j ] ], mq );
		}
		for ( k = comparisons - i + 1; k <= comparisons; k++ ) {
			q[ k ] = q[ comparisons - i ];
		}
		for ( j = 0; j < adj.length; j++ ) {
			adj[ j ] = max( q[ j ], adj[ j ] );
		}
	}
	out = new Array( len );
	for ( i = 0; i < len; i++ ) {
		idx = indices[ i ];
		v = max( adj[ i ], pvalues[ idx ] );
		out[ idx ] = v;
	}
	return out;
}


// EXPORTS //

module.exports = hommel;
