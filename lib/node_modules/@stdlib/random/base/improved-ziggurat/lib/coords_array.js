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
var exp = require( '@stdlib/math/base/special/exp' );
var ln = require( '@stdlib/math/base/special/ln' );


// VARIABLES //

// (R*phi(R) + Pr(X>=R))*sqrt(2\pi)
var V = 9.91256303526217e-3;


// MAIN //

/**
* Returns an array containing coordinates such that each rectangle has the same area.
*
* @private
* @param {PositiveInteger} N - number of rectangles
* @param {number} rTail - start of right tail
* @returns {NumberArray} coordinate array
*
* @example
* var X = coordsArray( 128, 3.44 );
* // returns <Array>
*/
function coordsArray( N, rTail ) {
	var X;
	var f;
	var i;

	f = exp( -0.5 * rTail * rTail );

	X = [];
	X.push( V/f ); // bottom block: V / f(R)
	X.push( rTail );
	for ( i = 2; i < N; i++ ) {
		X[ i ] = sqrt( -2.0 * ln( ( V/X[i-1] ) + f ) );
		f = exp( -0.5 * X[ i ] * X[ i ] );
	}
	X.push( 0.0 );
	return X;
}


// EXPORTS //

module.exports = coordsArray;
