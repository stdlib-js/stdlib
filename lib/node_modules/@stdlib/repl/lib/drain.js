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

var inspect = require( 'util' ).inspect;
var logger = require( 'debug' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isInt64Array = require( '@stdlib/assert/is-int64array' );
var isUint64Array = require( '@stdlib/assert/is-uint64array' );
var isBooleanArray = require( '@stdlib/assert/is-booleanarray' );
var isComplex128Array = require( '@stdlib/assert/is-complex128array' );
var isComplex64Array = require( '@stdlib/assert/is-complex64array' );
var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
var join = require( '@stdlib/array/base/join' );
var constructorName = require( '@stdlib/utils/constructor-name' );
var noop = require( '@stdlib/utils/noop' );
var nextTick = require( '@stdlib/utils/next-tick' );
var replace = require( '@stdlib/string/replace' );
var format = require( '@stdlib/string/format' );
var displayPrompt = require( './display_prompt.js' );
var updateRegExpCache = require( './update_regexp_cache.js' );
var restoreRegExpMatches = require( './restore_regexp_matches.js' );


// VARIABLES //

var debug = logger( 'repl:drain' );


// FUNCTIONS //

/**
* Converts an array to an array of primitive values.
*
* @private
* @param {Collection} arr - input array
* @returns {Array} array of primitive values
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new BooleanArray( [ true, false, true, false ] );
* // returns <BooleanArray>[ true, false, true, false ]
*
* var arr = copy2primitives( x );
* // returns [ true, false, true, false ]
*/
function copy2primitives( arr ) {
	var get;
	var out;
	var i;

	get = resolveGetter( arr );
	out = [];
	for ( i = 0; i < arr.length; i++ ) {
		out.push( get( arr, i ).valueOf() );
	}
	return out;
}

/**
* Converts an array of primitive values to an annotated string.
*
* @private
* @param {string} ctor - constructor name
* @param {Array} values - array of primitive values
* @returns {string} output string
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var ctorName = require( '@stdlib/utils/constructor-name' );
*
* var x = new BooleanArray( [ true, false, true, false ] );
* // returns <BooleanArray>[ true, false, true, false ]
*
* var str = array2string( ctorName( x ), [ true, false, true, false ] );
* // returns 'BooleanArray(4) [ true, false, true, false ]'
*
* @example
* var Int64Array = require( '@stdlib/array/int64' );
* var ctorName = require( '@stdlib/utils/constructor-name' );
*
* var x = new Int64Array( [ 1, 2, 1, 2 ] );
* // returns <Int64Array>[ 1n, 2n, 1n, 2n ]
*
* var str = array2string( ctorName( x ), [ 1, 2, 1, 2 ] );
* // returns 'Int64Array(4) [ 1n, 2n, 1n, 2n ]'
*/
function array2string( ctor, values ) {
	var str;
	if ( values.length === 0 ) {
		str = '';
	} else if ( ctor === 'Int64Array' || ctor === 'Uint64Array' ) {
		str = format( ' %sn ', join( values, 'n, ' ) );
	} else {
		str = format( ' %s ', join( values, ', ' ) );
	}
	return format( '%s(%d) [%s]', ctor, values.length, str );
}


// MAIN //

/**
* Drains a REPL's command queue.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {void}
*/
function drain( repl ) {
	var DONE;
	var SYNC;
	var opts;
	var code;
	var res;
	var pre;
	var tmp;

	if ( repl._busy ) {
		debug( 'Waiting on a command to finish...' );
		return;
	}
	if ( repl._queue.length === 0 ) {
		debug( 'Command queue is empty.' );
		if ( !repl._closed ) {
			displayPrompt( repl, false );
		}
		repl.emit( 'drain' );
		return;
	}
	debug( 'Evaluating next command...' );

	// Set a flag indicating that the REPL is busy:
	repl._busy = true;

	// Remove a command from the queue:
	code = repl._queue.pop();
	debug( 'Command: %s', code.raw );

	// Set an internal flag for determining whether a command executes synchronously:
	SYNC = true;

	// Set the REPL command callback:
	repl._done = ( code.async ) ? done : noop;

	// Set the (non-standard) properties on the `RegExp` expression object to the cached matches:
	restoreRegExpMatches( repl._regexp );

	// Evaluate command...
	opts = {
		'timeout': repl._timeout,
		'displayErrors': false,
		'breakOnSigint': true // Note: only applies for Node.js versions >=6.3.0
	};
	try {
		if ( repl._sandbox ) {
			res = code.compiled.runInContext( repl._context, opts );
		} else {
			res = code.compiled.runInThisContext( opts );
		}
	} catch ( error ) {
		debug( 'Error: %s', error.message );
		repl._ostream.write( format( 'Error: %s\n', error.message ) );
		repl.emit( 'command', code.raw, false ); // command failed

		updateRegExpCache( repl._regexp );
		repl._busy = false;
		displayPrompt( repl, false );

		// Clear the command queue, as an error may cause downstream "dependencies" to not be fulfilled, etc:
		repl._queue.clear();

		return;
	}
	// If an "asynchronous" command ran synchronously, then initial value of `SYNC` in the `done` callback below will be `true`; here, we reset the flag to ensure that, during the next turn of the event loop, the value is `false`:
	SYNC = false;

	// If we are running "asynchronous" code, wait until the `__done__` callback is invoked to continue processing...
	if ( code.async ) {
		return;
	}
	// Update the cache of saved regular expression substring matches:
	updateRegExpCache( repl._regexp );

	// Cache the result:
	repl._ans = res;

	if ( code.silent === false && res !== void 0 ) {
		pre = replace( repl._outputPrompt, '%d', (repl._count+1).toString() );

		// TODO: pretty printing (can defer to `util.inspect` for now, but will invariably want more control over this later, possibly including default configuration, etc, either at startup, during runtime, or according to an external configuration file)
		if ( isndarrayLike( res ) ) {
			tmp = res.toString(); // FIXME: this is a hack in order to avoid printing private ndarray properties in the REPL, as done by the built-in `util.inspect`. Ideally, we'd roll our own inspector which specifically accommodates stdlib's ndarray and other specialized classes.
		} else if (
			isBooleanArray( res ) ||
			isComplex128Array( res ) ||
			isComplex64Array( res ) ||
			isInt64Array( res ) ||
			isUint64Array( res )
		) {
			// FIXME: this is a hack in order to avoid things like `BooleanArray {}` which doesn't allow easy inspection of array contents. Ideally, we'd roll our own inspector to accommodate stdlib's specialized array classes.
			tmp = array2string( constructorName( res ), copy2primitives( res ) ); // eslint-disable-line max-len
		} else {
			tmp = inspect( repl._ans );
		}
		repl._ostream.write( format( '%s%s\n', pre, tmp ) );
	}
	// Finish processing:
	return beforeNextTick();

	/**
	* Callback invoked when a command finishes.
	*
	* @private
	* @param {(Error|null)} [error] - error
	* @param {*} [results] - results
	* @returns {void}
	*/
	function done( error, results ) {
		var args;
		var i;
		if ( DONE ) {
			debug( 'Command already finished. Command callback called more than once.' );
			if ( error ) {
				debug( 'Error: %s', error.message );
			}
			if ( arguments.length > 1 ) {
				debug( 'Results: %s', JSON.stringify( results ) );
			}
			return;
		}
		// Update the internal flag indicating whether a command has finished executing (which is important within the context of `SIGINT` event handling):
		DONE = true;

		// If the command ran synchronously, defer resolution of the results until the next tick of the event loop...
		if ( SYNC ) {
			debug( 'Asynchronous command executed synchronously.' );
			args = [];
			for ( i = 0; i < arguments.length; i++ ) {
				args.push( arguments[ i ] );
			}
			nextTick( defer );
			return;
		}
		// Update the cache of saved regular expression substring matches:
		updateRegExpCache( repl._regexp );

		if ( error ) {
			debug( 'Error: %s', error.message );
			repl._ostream.write( format( 'Error: %s\n', error.message ) );
			repl.emit( 'command', code.raw, false ); // command failed
			displayPrompt( repl, false );

			// Indicate that command execution has completed:
			repl._busy = false;

			// Clear the command queue, as an error may cause downstream "dependencies" to not be fulfilled, etc:
			repl._queue.clear();

			return;
		}
		// Cache the result:
		repl._ans = [ res, results ];

		if ( code.silent === false && ( res !== void 0 || results !== void 0 ) ) { // eslint-disable-line max-len
			pre = replace( repl._outputPrompt, '%d', (repl._count+1).toString() );

			// TODO: pretty printing (can defer to `util.inspect` for now, but will invariably want more control over this later, possibly including default configuration, etc, either at startup, during runtime, or according to an external configuration file)
			repl._ostream.write( pre+inspect( repl._ans )+'\n' );
		}
		// Finish processing:
		beforeNextTick();

		/**
		* Callback invoked upon the next tick of the event loop.
		*
		* @private
		*/
		function defer() {
			done.apply( null, args );
		}
	}

	/**
	* Initiates common processing steps before the next tick of the event loop.
	*
	* @private
	*/
	function beforeNextTick() {
		// Announce that the command succeeded:
		debug( 'Finished evaluating command.' );
		repl.emit( 'command', code.raw, true );
		nextTick( onTick );
	}

	/**
	* Callback invoked upon the next tick of the event loop.
	*
	* @private
	*/
	function onTick() {
		// Indicate that command execution has completed:
		repl._busy = false;

		drain( repl );
	}
}


// EXPORTS //

module.exports = drain;
