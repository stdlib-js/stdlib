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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// MAIN //

/**
* Validates parameters.
*
* @private
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {(Error|null)} error or null
*
* @example
* var err = validate( 1, 2, 3 );
* if ( err ) {
*     throw err;
* }
*/
function validate( N, K, n ) {
	if ( !isNonNegativeInteger( N ) ) {
		return new TypeError( 'invalid argument. `N` must be a nonnegative integer. Value: `' + N + '`.' );
	}
	if ( !isNonNegativeInteger( K ) ) {
		return new TypeError( 'invalid argument. `K` must be a nonnegative integer. Value: `' + K + '`.' );
	}
	if ( !isNonNegativeInteger( n ) ) {
		return new TypeError( 'invalid argument. `n` must be a nonnegative integer. Value: `' + n + '`.' );
	}
	if ( n > N ) {
		return new RangeError( 'invalid argument. `n` must be less than or equal to `N`. Value: `' + n + '`.' );
	}
	if ( K > N ) {
		return new RangeError( 'invalid argument. `K` must be less than or equal to `N`. Value: `' + K + '`.' );
	}
	return null;
}


// EXPORTS //

module.exports = validate;
