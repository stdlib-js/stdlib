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

var isProbability = require( '@stdlib/math/base/assert/is-probability' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );


// MAIN //

/**
* Evaluates the logit function.
*
* @param {Probability} p - input value
* @returns {number} function value
*
* @example
* var y = logit( 0.2 );
* // returns ~-1.386
*
* @example
* var y = logit( 0.9 );
* // returns ~2.197
*
* @example
* var y = logit( -4.0 );
* // returns NaN
*
* @example
* var y = logit( 1.5 );
* // returns NaN
*
* @example
* var y = logit( NaN );
* // returns NaN
*/
function logit( p ) {
	if ( isnan( p ) ) {
		return p;
	}
	if ( !isProbability( p ) ) {
		return NaN;
	}
	if ( p === 0.0 ) {
		return NINF;
	}
	if ( p === 1.0 ) {
		return PINF;
	}
	return ln( p / ( 1.0-p ) );
}


// EXPORTS //

module.exports = logit;
