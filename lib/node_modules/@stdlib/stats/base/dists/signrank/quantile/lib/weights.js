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

var memoize = require( '@stdlib/utils/memoize' );


// VARIABLES //

var memoized;


// FUNCTIONS //

/**
* Calculates the weight for the `(x,n)` pair and memoizes the result.
*
* @private
* @param {number} x - input value
* @param {NonNegativeInteger} n - number of observations
* @returns {number} weight
*/
function weights( x, n ) {
	var mlim;

	if ( n === 0 ) {
		return ( x === 0 ) ? 1 : 0;
	}
	mlim = n * ( n + 1 ) / 2;
	if ( x < 0 || x > mlim ) {
		return 0;
	}
	if ( x > mlim / 2 ) {
		x = mlim - x;
	}
	return memoized( x - n, n - 1 ) + memoized( x, n - 1 );
}


// MAIN //

memoized = memoize( weights );


// EXPORTS //

module.exports = memoized;
