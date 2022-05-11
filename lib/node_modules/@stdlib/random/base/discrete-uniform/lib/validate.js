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

var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var format = require( '@stdlib/string/format' );
var isnan = require( '@stdlib/assert/is-nan' );


// MAIN //

/**
* Validates values provided for minimum and maximum support.
*
* @private
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {(Error|null)} error or null
*
* @example
* var err = validate( 1, 20 );
* if ( err ) {
*     throw err;
* }
*/
function validate( a, b ) {
	if ( !isInteger( a ) || isnan( a ) ) {
		return new TypeError( format( 'invalid argument. First argument must be an integer and not NaN. Value: `%s`.', a ) );
	}
	if ( !isInteger( b ) || isnan( b ) ) {
		return new TypeError( format( 'invalid argument. Second argument must be an integer and not NaN. Value: `%s`.', b ) );
	}
	if ( a > b ) {
		return new RangeError( format( 'invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.', a, b ) );
	}
	return null;
}


// EXPORTS //

module.exports = validate;
