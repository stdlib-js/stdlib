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

var objectKeys = require( '@stdlib/utils/keys' );
var copy = require( '@stdlib/utils/copy' );
var isError = require( '@stdlib/assert/is-error' );
var typeName = require( './type.js' );


// MAIN //

/**
* Returns a JSON representation of an error object.
*
* @param {(Error|TypeError|SyntaxError|URIError|ReferenceError|RangeError|EvalError)} err - error to serialize
* @throws {TypeError} first argument must be an error object
* @returns {Object} JSON representation
*
* @example
* var err = new Error( 'beep' );
* var json = toJSON( err );
* // returns {...}
*/
function toJSON( err ) {
	var keys;
	var out;
	var i;
	if ( !isError( err ) ) {
		throw new TypeError( 'invalid argument. Must provide an error object. Value: `' + err + '`.' );
	}
	out = {};

	// Guaranteed properties:
	out.type = typeName( err );
	out.message = err.message;

	// Possible general error properties...
	if ( err.name ) {
		out.name = err.name;
	}
	if ( err.stack ) {
		out.stack = err.stack;
	}
	// Possible Node.js (system error) properties...
	if ( err.code ) {
		out.code = err.code;
	}
	if ( err.errno ) {
		out.errno = err.errno;
	}
	if ( err.syscall ) {
		out.syscall = err.syscall;
	}
	// Any enumerable properties...
	keys = objectKeys( err );
	for ( i = 0; i < keys.length; i++ ) {
		out[ keys[i] ] = copy( err[ keys[i] ] );
	}
	return out;
}


// EXPORTS //

module.exports = toJSON;
