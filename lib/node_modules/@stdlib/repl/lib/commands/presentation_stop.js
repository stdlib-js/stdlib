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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var objectKeys = require( '@stdlib/utils/keys' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// VARIABLES //

var debug = logger( 'repl:command:presentation_stop' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `presentationStop` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Stops a REPL presentation.
	*
	* @private
	* @param {(NonNegativeInteger|string)} [id] - presentation identifier
	* @returns {boolean} boolean indicating whether a REPL presentation is successfully stopped
	*/
	function onCommand( id ) {
		var cache;
		var keys;
		var FLG;
		var err;
		var key;
		var ws;
		var i;
		var o;

		cache = repl._internal.presentation.cache;
		if ( arguments.length ) {
			if ( !isString( id ) && !isNonNegativeInteger( id ) ) {
				err = new TypeError( 'invalid argument. Invalid presentation identifier. Must be either a string or nonnegative integer. Value: `' + id + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return false;
			}
			key = id;
		} else {
			ws = repl._currentWorkspace;
			keys = objectKeys( cache );
			for ( i = 0; i < keys.length; i++ ) {
				if ( cache[ keys[ i ] ].w === ws ) {
					key = cache[ keys[ i ] ].i;
					break;
				}
			}
			if ( key === void 0 ) {
				err = new Error( 'invalid invocation. Not currently in a presentation workspace. Must provide either a string or nonnegative integer which corresponds to the identifier of the presentation to be stopped.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return false;
			}
		}
		if ( !hasOwnProp( cache, key ) ) {
			debug( 'Unrecognized presentation identifier: %d', key );
			return false;
		}
		debug( 'Stopping presentation: %d', key );

		// Retrieve the presentation data:
		o = cache[ key ];

		// Delete the presentation workspace...
		if ( o.w !== 'base' ) {
			debug( 'Deleting workspace: %s', o.w );
			FLG = repl._quiet;
			repl._quiet = true; // temporarily silence logging
			repl._context.deleteWorkspace( o.w );
			repl._quiet = FLG;
		}
		// Ensure that we no longer watch presentation files (if enabled):
		o.p.unwatch();

		// Update the internal resource cache for tracking presentations:
		delete cache[ key ];

		return true;
	}
}


// EXPORTS //

module.exports = command;
