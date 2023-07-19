/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );
var ID_TO_PKG = require( './../data/data.json' );


// MAIN //

/**
* Returns a package name associated with a specified error code identifier prefix.
*
* @param {string} id - identifier prefix
* @throws {TypeError} must provide a string
* @returns {(string|null)} package name
*
* @example
* var v = id2pkg( '0YK' );
* // returns '@stdlib/math/base/special/sin'
*/
function id2pkg( id ) {
	if ( !isString( id ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', id ) );
	}
	if ( hasOwnProp( ID_TO_PKG, id ) ) {
		return ID_TO_PKG[ id ];
	}
	return null;
}


// EXPORTS //

module.exports = id2pkg;
