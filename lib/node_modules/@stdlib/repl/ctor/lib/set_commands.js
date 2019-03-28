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

var logger = require( 'debug' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-read-only-accessor' );


// VARIABLES //

var debug = logger( 'repl:set_commands' );


// MAIN //

/**
* Sets commands on a sandboxed `context` object.
*
* @private
* @param {Object} context - context object
* @param {ArrayArray} commands - commands
* @returns {Object} context object
*/
function setCommands( context, commands ) {
	var cmd;
	var i;

	for ( i = 0; i < commands.length; i++ ) {
		cmd = commands[ i ];
		if ( hasOwnProp( context, cmd[ 0 ] ) ) {
			debug( 'Skipping command as global context property `'+cmd[0]+'` is already assigned.' );
		} else if ( cmd[ 2 ] ) {
			setReadOnlyAccessor( context, cmd[ 0 ], cmd[ 1 ] );
		} else {
			setReadOnly( context, cmd[ 0 ], cmd[ 1 ] );
		}
	}
	return context;
}


// EXPORTS //

module.exports = setCommands;
