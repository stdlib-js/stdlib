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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isProbability = require( '@stdlib/assert/is-probability' ).isPrimitive;


// MAIN //

/**
* Validates parameters.
*
* @private
* @param {PositiveInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {(Error|null)} error or null
*
* @example
* var err = validate( 10, 0.5 );
* if ( err ) {
*     throw err;
* }
*/
function validate( n, p ) {
	if ( !isPositiveInteger( n ) ) {
		return new TypeError( 'invalid argument. First argument must be a positive integer. Value: `' + p + '`.' );
	}
	if ( !isProbability( p ) ) {
		return new TypeError( 'invalid argument. Second argument must be a probability. Value: `' + p + '`.' );
	}
	return null;
}


// EXPORTS //

module.exports = validate;
