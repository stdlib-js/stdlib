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

var isStructConstructorLike = require( '@stdlib/assert/is-struct-constructor-like' );
var contains = require( '@stdlib/array/base/assert/contains' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var DTYPES = require( './dtypes.js' );


// MAIN //

/**
* Tests whether a provided value is a valid `type` field.
*
* @private
* @param {*} value - input value
* @returns {(null|TypeError)} error object or null
*/
function isValidType( value ) {
	if ( contains( DTYPES, value ) || isStructConstructorLike( value ) ) {
		return null;
	}
	return new TypeError( format( 'invalid argument. `%s` field must be either a struct type or one of the following: "%s". Value: `%s`.', 'type', join( DTYPES, ', ' ), value ) );
}


// EXPORTS //

module.exports = isValidType;
