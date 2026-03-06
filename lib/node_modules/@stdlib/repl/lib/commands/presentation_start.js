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

/* eslint-disable no-underscore-dangle */

'use strict';

// MODULES //

var logger = require( 'debug' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var propertyDescriptor = require( '@stdlib/utils/property-descriptor' );
var properties = require( '@stdlib/utils/properties' );
var Presentation = require( '@stdlib/repl/presentation' ); // eslint-disable-line stdlib/no-redeclare
var format = require( '@stdlib/string/format' );
var setdiff = require( './../setdiff.js' );
var propertyComparator = require( './../property_comparator.js' );


// VARIABLES //

var debug = logger( 'repl:command:presentation_start' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `presentationStart` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Starts a REPL presentation.
	*
	* @private
	* @param {string} [text] - presentation text
	* @param {Options} [options] - options
	* @param {boolean} [options.watch=false] - boolean indicating whether to watch a presentation source file for changes (note: only applicable if not provided presentation text and the options object specifies a presentation file to load)
	* @returns {(NonNegativeInteger|void)} presentation identifier
	*/
	function onCommand( text, options ) {
		var opts;
		var FLG;
		var err;
		var ctx;
		var ws;
		var cs;
		var id;
		var t;
		var p;

		if ( arguments.length === 0 ) {
			err = new TypeError( 'invalid invocation. Must provide either a string containing presentation text or an options object specifying a presentation file to load.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( arguments.length === 1 ) {
			if ( isString( text ) ) {
				t = text;
				opts = {};
			} else if ( isPlainObject( text ) ) {
				opts = text;
			} else {
				err = new TypeError( format( 'invalid argument. First argument must be either a string containing presentation text or an options object specifying a presentation file to load. Value: `%s`.', text ) );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
		} else {
			if ( !isString( text ) ) {
				err = new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', text ) );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
			t = text;
			if ( !isPlainObject( options ) ) {
				err = new TypeError( format( 'invalid argument. Second argument must be an options object. Value: `%s`.', options ) );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
			opts = options;
		}
		if ( hasOwnProp( opts, 'watch' ) && !isBoolean( opts.watch ) ) {
			err = new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'watch', opts.watch ) );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( t === void 0 && !hasOwnProp( opts, 'load' ) ) {
			err = new TypeError( 'invalid argument. When not provided presentation text, an options argument must specify a presentation file to load.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		// Generate a presentation identifier:
		id = repl._internal.presentation.counter + 1;
		debug( 'Presentation identifier: %d', id );

		// Determine the destination workspace name:
		if ( hasOwnProp( opts, 'workspace' ) ) {
			ws = opts.workspace;
		} else {
			ws = 'presentation-' + id;
			opts.workspace = ws;
		}
		debug( 'Presentation workspace: %s', ws );

		// Cache a reference to the current evaluation context:
		ctx = repl._context;

		// Cache the current workspace name:
		cs = repl._currentWorkspace;

		// If the destination workspace already exists, we need to delete that workspace in order to allow presentation commands to be properly bound...
		if ( ws !== 'base' && repl._context.isWorkspace( ws ) ) {
			debug( 'Deleting workspace: %s', ws );
			FLG = repl._quiet;
			repl._quiet = true; // temporarily silence logging
			repl._context.deleteWorkspace( ws );
			repl._quiet = FLG;
		}
		// Create a new presentation...
		debug( 'Creating presentation...' );
		if ( t === void 0 ) {
			p = new Presentation( repl, opts );
			if ( opts.watch ) {
				// Start watching before the invoking command finishes in order to catch any source file changes which happen between now and then...
				p.watch();
			}
		} else {
			p = new Presentation( t, repl, opts );
		}
		// Update the internal resource cache for tracking presentations:
		repl._internal.presentation.counter += 1;
		repl._internal.presentation.cache[ id ] = {
			'i': id,
			'w': ws,
			'p': p
		};

		// Allow the command to finish before showing the presentation:
		repl.once( 'drain', onFinish );

		// Return the presentation identifier:
		return id;

		/**
		* Callback invoked once the `presentationStart()` command finishes.
		*
		* @private
		* @param {string} cmd - command
		* @param {boolean} success - boolean indicating whether the command successfully executed
		* @returns {void}
		*/
		function onFinish( cmd, success ) {
			var desc;
			var vars;
			var FLG;
			var ws;
			var v;
			var i;
			var j;

			// NOTE: the following is a bit of a hack. Because creating a presentation instance automatically switches the workspace (and thus creates a **new** evaluation context), we need to manually assign the returned identifier (if assigned) and any other declared variables (!) in the invoking workspace to allow the presentation identifier and other variables to be correctly tracked...

			// Get the list of variables in the invoking evaluation context AFTER having run the command:
			vars = properties( ctx ).sort( propertyComparator );

			// Get the list of user-defined workspace variables in the invoking evaluation context:
			vars = setdiff( repl._workspace, vars );

			// Manually append the variables to the workspace which were assigned but not captured upon creating a presentation instance...
			ws = repl._workspaces[ cs ];
			for ( i = 0; i < vars.length; i++ ) {
				FLG = false;
				v = vars[ i ];
				desc = propertyDescriptor( ctx, v );

				// Search for an existing workspace variable to overwrite...
				for ( j = 0; j < ws.length; j += 2 ) {
					if ( ws[ j ] === v ) {
						ws[ j+1 ] = desc;
						FLG = true;
						break;
					}
				}
				// Create a new workspace variable:
				if ( FLG === false ) {
					ws.push( v, desc );
				}
			}

			// Only show the presentation if the command successfully executed...
			if ( success === false ) {
				return;
			}
			debug( 'Showing presentation...' );
			p.show();
		}
	}
}


// EXPORTS //

module.exports = command;
