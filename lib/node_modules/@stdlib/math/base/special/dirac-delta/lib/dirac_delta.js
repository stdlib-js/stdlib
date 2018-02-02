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
var PINF = require( '@stdlib/constants/math/float64-pinf' );


// MAIN //

/**
* Evaluates the Dirac delta function.
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = diracDelta( 0.0 );
* // returns Infinity
*
* @example
* var v = diracDelta( 3.14 );
* // returns 0.0
*
* @example
* var v = diracDelta( NaN );
* // returns NaN
*/
function diracDelta( x ) {
	if ( isnan( x ) ) {
		return NaN;
	}
	if ( x === 0.0 ) {
		return PINF;
	}
	return 0.0;
}


// EXPORTS //

module.exports = diracDelta;
