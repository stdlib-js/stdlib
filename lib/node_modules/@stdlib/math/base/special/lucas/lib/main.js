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
var MAX_LUCAS = require( '@stdlib/constants/math/float64-max-safe-nth-lucas' );
var LUCAS = require( './lucas.json' );


// MAIN //

/**
* Computes the nth Lucas number.
*
* @param {NonNegativeInteger} n - the Lucas number to compute
* @returns {NonNegativeInteger} Lucas number
*
* @example
* var y = lucas( 0 );
* // returns 2
*
* @example
* var y = lucas( 1 );
* // returns 1
*
* @example
* var y = lucas( 2 );
* // returns 3
*
* @example
* var y = lucas( 3 );
* // returns 4
*
* @example
* var y = lucas( 4 );
* // returns 7
*
* @example
* var y = lucas( 5 );
* // returns 11
*
* @example
* var y = lucas( 6 );
* // returns 18
*
* @example
* var y = lucas( NaN );
* // returns NaN
*
* @example
* var y = lucas( 3.14 );
* // returns NaN
*
* @example
* var y = lucas( -1.0 );
* // returns NaN
*/
function lucas( n ) {
	if (
		isnan( n ) ||
		isInteger( n ) === false ||
		n < 0 ||
		n > MAX_LUCAS
	) {
		return NaN;
	}
	return LUCAS[ n ];
}


// EXPORTS //

module.exports = lucas;
