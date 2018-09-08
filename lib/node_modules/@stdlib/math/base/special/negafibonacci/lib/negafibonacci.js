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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var abs = require( '@stdlib/math/base/special/abs' );
var MAX_FIBONACCI = require( '@stdlib/constants/math/float64-max-safe-nth-fibonacci' );
var NEGAFIBONACCI = require( './negafibonacci.json' );


// MAIN //

/**
* Computes the nth negaFibonacci number.
*
* @param {NonPositiveInteger} n - the negaFibonacci number to compute
* @returns {integer} negaFibonacci number
*
* @example
* var y = negafibonacci( 0 );
* // returns 0
*
* @example
* var y = negafibonacci( -1 );
* // returns 1
*
* @example
* var y = negafibonacci( -2 );
* // returns -1
*
* @example
* var y = negafibonacci( -3 );
* // returns 2
*
* @example
* var y = negafibonacci( -4 );
* // returns -3
*
* @example
* var y = negafibonacci( -5 );
* // returns 5
*
* @example
* var y = negafibonacci( -6 );
* // returns -8
*
* @example
* var y = negafibonacci( NaN );
* // returns NaN
*
* @example
* var y = negafibonacci( -3.14 );
* // returns NaN
*/
function negafibonacci( n ) {
	var an;
	if (
		isnan( n ) ||
		isInteger( n ) === false ||
		n > 0
	) {
		return NaN;
	}
	an = abs( n );
	if ( an > MAX_FIBONACCI ) {
		return NaN;
	}
	return NEGAFIBONACCI[ an ];
}


// EXPORTS //

module.exports = negafibonacci;
