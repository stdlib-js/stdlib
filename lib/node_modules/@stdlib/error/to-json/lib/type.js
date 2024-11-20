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

var instanceOf = require( '@stdlib/assert/instance-of' );
var ctorName = require( '@stdlib/utils/constructor-name' );
var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
var CTORS = require( './ctors.js' );


// MAIN //

/**
* Returns the error type.
*
* @private
* @param {(Error|TypeError|SyntaxError|URIError|ReferenceError|RangeError|EvalError)} error - input error
* @returns {(string|void)} error type
*
* @example
* var err = new TypeError();
* var out = typeName( err );
* // returns 'TypeError'
*/
function typeName( error ) {
	var v;
	var i;

	// Check for error objects from the same realm (same Node.js `vm` or same `Window` object)...
	for ( i = 0; i < CTORS.length; i++ ) {
		if ( instanceOf( error, CTORS[ i ][ 0 ] ) ) {
			return CTORS[ i ][ 1 ];
		}
	}
	// Walk the prototype tree until we find an object having a desired native class...
	while ( error ) {
		v = ctorName( error );
		for ( i = 0; i < CTORS.length; i++ ) {
			if ( v === CTORS[ i ][ 1 ] ) {
				return CTORS[ i ][ 1 ];
			}
		}
		error = getPrototypeOf( error );
	}
}


// EXPORTS //

module.exports = typeName;
