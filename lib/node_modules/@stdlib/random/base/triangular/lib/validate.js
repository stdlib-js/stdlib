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

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var format = require( '@stdlib/string/format' );
var isnan = require( '@stdlib/assert/is-nan' );


// MAIN //

/**
* Validates parameters.
*
* @private
* @param {number} a - minimum support
* @param {number} b - maximum support
* @param {number} c - mode
* @returns {(Error|null)} error or null
*
* @example
* var err = validate( 1.0, 2.0, 1.3 );
* if ( err ) {
*     throw err;
* }
*/
function validate( a, b, c ) {
	if ( !isNumber( a ) || isnan( a ) ) {
		return new TypeError( format( 'invalid argument. First argument must be a number and not NaN. Value: `%s`.', a ) );
	}
	if ( !isNumber( b ) || isnan( b ) ) {
		return new TypeError( format( 'invalid argument. Second argument must be a number and not NaN. Value: `%s`.', b ) );
	}
	if ( !isNumber( c ) || isnan( c ) ) {
		return new TypeError( format( 'invalid argument. Third argument must be a number and not NaN. Value: `%s`.', c ) );
	}
	if ( !(a <= c && c <= b) ) {
		return new RangeError( format( 'invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.', 'a <= c <= b', a, b, c ) );
	}
	return null;
}


// EXPORTS //

module.exports = validate;
