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

var isPositive = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/assert/is-nan' );


// MAIN //

/**
* Validates parameters.
*
* @private
* @param {PositiveNumber} r - number of successes until experiment is stopped
* @param {number} p - success probability
* @returns {(Error|null)} error or null
*
* @example
* var err = validate( 10, 0.5 );
* if ( err ) {
*     throw err;
* }
*/
function validate( r, p ) {
	if ( !isPositive( r ) ) {
		return new TypeError( 'invalid argument. First argument must be a positive number. Value: `' + r + '`.' );
	}
	if ( !isNumber( p ) || isnan( p ) ) {
		return new TypeError( 'invalid argument. Second argument must be a number primitive and not `NaN`. Value: `' + p + '`.' );
	}
	if ( p <= 0.0 || p >= 1.0 ) {
		return new RangeError( 'invalid argument. Second argument must be on the interval `(0,1)`. Value: `' + p + '`.' );
	}
	return null;
}


// EXPORTS //

module.exports = validate;
