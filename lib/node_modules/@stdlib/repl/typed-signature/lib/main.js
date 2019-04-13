/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var ALIAS_TO_TYPED_SIGNATURE = require( './../data/data.json' );


// MAIN //

/**
* Returns the typed signature(s) associated with a specified alias.
*
* @param {string} alias - alias
* @throws {TypeError} must provide a string
* @returns {(StringArray|null)} typed signature(s)
*
* @example
* var out = typedSignature( 'base.sin' );
* // returns [ '...' ]
*/
function typedSignature( alias ) {
	var out;
	var i;
	if ( !isString( alias ) ) {
		throw new TypeError( 'invalid argument. Must provide a string. Value: `' + alias + '`.' );
	}
	out = [];
	for ( i = 0; i < ALIAS_TO_TYPED_SIGNATURE.length; i++ ) {
		if ( ALIAS_TO_TYPED_SIGNATURE[ i ][ 0 ] === alias ) {
			out.push( ALIAS_TO_TYPED_SIGNATURE[ i ][ 1 ] );
		}
	}
	return ( out.length ) ? out : null;
}


// EXPORTS //

module.exports = typedSignature;
