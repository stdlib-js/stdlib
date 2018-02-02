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

var NAMESPACE = require( './../namespace.js' );
var logger = require( './../console.js' );


// VARIABLES //

var NO_PKG_TEXT = 'Unrecognized alias.';


// MAIN //

/**
* Prints the package name corresponding to a provided alias.
*
* @private
* @param {*} alias - variable alias or value
*/
function alias2pkg( alias ) {
	var txt;
	var i;

	// Check if provided an alias or a known value reference...
	for ( i = 0; i < NAMESPACE.length; i++ ) {
		if (
			alias === NAMESPACE[ i ].alias ||
			alias === NAMESPACE[ i ].value
		) {
			txt = NAMESPACE[ i ].path;
			break;
		}
	}
	if ( txt === void 0 ) {
		txt = NO_PKG_TEXT;
	}
	logger.log( txt );
}


// EXPORTS //

module.exports = alias2pkg;
