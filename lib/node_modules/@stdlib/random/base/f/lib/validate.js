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
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Validates parameters.
*
* @private
* @param {PositiveNumber} d1 - degrees of freedom
* @param {PositiveNumber} d2 - degrees of freedom
* @returns {(Error|null)} error or null
*
* @example
* var err = validate( 1.0, 2.0 );
* if ( err ) {
*     throw err;
* }
*/
function validate( d1, d2 ) {
	if ( !isPositive( d1 ) ) {
		return new TypeError( format( 'invalid argument. First argument must be a positive number. Value: `%s`.', d1 ) );
	}
	if ( !isPositive( d2 ) ) {
		return new TypeError( format( 'invalid argument. Second argument must be a positive number. Value: `%s`.', d2 ) );
	}
	return null;
}


// EXPORTS //

module.exports = validate;
