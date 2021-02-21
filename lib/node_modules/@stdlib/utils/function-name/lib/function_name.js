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

var isFunction = require( '@stdlib/assert/is-function' );
var hasFunctionNameSupport = require( '@stdlib/assert/has-function-name-support' );
var RE = require( '@stdlib/regexp/function-name' ).REGEXP;


// VARIABLES //

var isFunctionNameSupported = hasFunctionNameSupport();


// MAIN //

/**
* Returns the name of a function.
*
* @param {Function} fcn - input function
* @throws {TypeError} must provide a function
* @returns {string} function name
*
* @example
* var v = functionName( Math.sqrt );
* // returns 'sqrt'
*
* @example
* var v = functionName( function foo(){} );
* // returns 'foo'
*
* @example
* var v = functionName( function(){} );
* // returns '' || 'anonymous'
*
* @example
* var v = functionName( String );
* // returns 'String'
*/
function functionName( fcn ) {
	// TODO: add support for generator functions?
	if ( isFunction( fcn ) === false ) {
		throw new TypeError( 'invalid argument. Must provide a function. Value: `' + fcn + '`.' );
	}
	if ( isFunctionNameSupported ) {
		return fcn.name;
	}
	return RE.exec( fcn.toString() )[ 1 ];
}


// EXPORTS //

module.exports = functionName;
