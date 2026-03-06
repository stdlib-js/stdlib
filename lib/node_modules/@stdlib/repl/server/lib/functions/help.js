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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var NAMESPACE = require( './../namespace.js' );
var DOCS = require( './../docs.js' );
var logger = require( './../console.js' );


// VARIABLES //

var NO_HELP_TEXT = 'No help information available.';


// MAIN //

/**
* Prints help information.
*
* @private
* @param {*} alias - variable alias or value
*/
function help( alias ) {
	var txt;
	var i;

	// First check if provided an alias...
	if ( hasOwnProp( DOCS, alias ) ) {
		txt = DOCS[ alias ];
	} else {
		// Search through namespace values to see if provided a known value reference...
		for ( i = 0; i < NAMESPACE.length; i++ ) {
			if ( alias === NAMESPACE[ i ].value ) {
				if ( hasOwnProp( DOCS, NAMESPACE[ i ].alias ) ) {
					txt = DOCS[ NAMESPACE[ i ].alias ];
				}
				break;
			}
		}
		// If still unable to resolve help info, inform the user that no info is available...
		if ( txt === void 0 ) {
			txt = NO_HELP_TEXT;
		}
	}
	logger.log( txt );
}


// EXPORTS //

module.exports = help;
