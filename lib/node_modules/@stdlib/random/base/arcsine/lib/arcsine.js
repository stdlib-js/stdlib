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
var sin = require( '@stdlib/math/base/special/sin' );
var HALF_PI = require( '@stdlib/constants/float64/half-pi' );


// MAIN //

/**
* Returns an arcsine distributed pseudorandom number with minimum support `a` and maximum support `b`.
*
* @private
* @param {PRNG} rand - pseudorandom number generator
* @param {number} a - minimum support
* @param {number} b - maximum support
* @returns {number} pseudorandom number
*/
function arcsine( rand, a, b ) {
	return a + ( pow( sin( HALF_PI*rand() ), 2.0 ) * ( b-a ) );
}


// EXPORTS //

module.exports = arcsine;
