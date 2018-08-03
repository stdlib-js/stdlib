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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var NAMESPACE = require( './../namespace.js' );
var logger = require( './../console.js' );


// VARIABLES //

var NO_ALIAS_TEXT = 'Unrecognized package name.';


// MAIN //

/**
* Prints the alias corresponding to a provided package name.
*
* @private
* @param {string} pkg - package name
* @throws {TypeError} must provide a string
* @returns {void}
*/
function pkg2alias( pkg ) {
	var i;
	if ( !isString( pkg ) ) {
		throw new TypeError( 'invalid argument. Must provide a string. Value: `'+pkg+'`.' );
	}
	for ( i = 0; i < NAMESPACE.length; i++ ) {
		if ( pkg === NAMESPACE[ i ].path ) {
			return logger.log( NAMESPACE[ i ].alias );
		}
	}
	logger.log( NO_ALIAS_TEXT );
}


// EXPORTS //

module.exports = pkg2alias;
