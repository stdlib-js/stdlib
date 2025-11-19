/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the variance for a negative binomial distribution with number of successes `r` and success probability `p`.
*
* @private
* @param {number} r - number of successes
* @param {number} p - success probability
* @returns {number} variance
*
* @example
* var v = variance( 10.0, 0.5 );
* // returns 20.0
*
* @example
* var v = variance( 5.0, 0.2 );
* // returns 100.0
*
* @example
* var v = variance( NaN, 0.5 );
* // returns NaN
*
* @example
* var v = variance( 10.0, NaN );
* // returns NaN
*
* @example
* var v = variance( -1.0, 0.5 );
* // returns NaN
*
* @example
* var v = variance( 10.0, 1.5 );
* // returns NaN
*/
function variance( r, p ) {
	return addon( r, p );
}


// EXPORTS //

module.exports = variance;
