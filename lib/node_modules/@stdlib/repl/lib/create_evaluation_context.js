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

var Module = require( 'module' );
var vm = require( 'vm' );
var Console = require( 'console' ).Console;
var getGlobal = require( '@stdlib/utils/global' );
var objectKeys = require( '@stdlib/utils/keys' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var setConfigurableReadOnly = require( '@stdlib/utils/define-configurable-read-only-property' );
var GLOBALS = require( './globals.js' );
var createRequire = require( './create_require.js' );


// VARIABLES //

// Cache references to module methods (WARNING: use of *private* methods exposed on the `Module` object; thus, breakage is possible!):
var resolveLookupPaths = Module._resolveLookupPaths; // eslint-disable-line no-underscore-dangle


// MAIN //

/**
* Creates a REPL evaluation context.
*
* @private
* @param {Array} out - strided output array for storing variables added to the evaluation context
* @param {Stream} ostream - output stream
* @param {boolean} sandbox - boolean indicating whether the evaluation context should be "sandboxed"
* @returns {Object} context
*/
function createContext( out, ostream, sandbox ) {
	var context;
	var keys;
	var i;

	// Create the REPL context...
	if ( sandbox ) {
		// Create a sandboxed context:
		context = vm.createContext();

		// Assign globals from the current global context to the sandboxed context (note: shallow copy!)...
		keys = objectKeys( GLOBALS );
		for ( i = 0; i < keys.length; i++ ) {
			setReadOnly( context, keys[ i ], GLOBALS[ keys[ i ] ] );
		}
		// Create a circular reference as in Node.js:
		setReadOnly( context, 'global', context );

		// Create a new `console` interface:
		setReadOnly( context, 'console', new Console( ostream ) );

		// Create a new `module` object:
		setReadOnly( context, 'module', new Module( '<repl>' ) );

		// Create a new `require` function:
		setReadOnly( context, 'require', createRequire( context.module ) );
	} else {
		context = getGlobal(); // current global variable

		// Create a new `module` object:
		setConfigurableReadOnly( context, 'module', new Module( '<repl>' ) );

		// Create a new `require` function:
		setConfigurableReadOnly( context, 'require', createRequire( context.module ) );
	}
	context.module.paths = resolveLookupPaths( '<repl>', module, true ) || [];

	out.push( 'global', context.global );
	out.push( 'require', context.require );

	return context;
}


// EXPORTS //

module.exports = createContext;
