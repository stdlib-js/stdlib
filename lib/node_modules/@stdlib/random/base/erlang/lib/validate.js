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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;


// MAIN //

/**
* Validates parameters.
*
* @private
* @param {PositiveInteger} k - shape parameter
* @param {PositiveNumber} lambda - rate parameter
* @returns {(Error|null)} error or null
*
* @example
* var err = validate( 1, 2.5 );
* if ( err ) {
*     throw err;
* }
*/
function validate( k, lambda ) {
	if ( !isPositiveInteger( k ) ) {
		return new TypeError( 'invalid argument. First argument must be a positive integer. Value: `' + k + '`.' );
	}
	if ( !isPositive( lambda ) ) {
		return new TypeError( 'invalid argument. Second argument must be a positive number. Value: `' + lambda + '`.' );
	}
	return null;
}


// EXPORTS //

module.exports = validate;
