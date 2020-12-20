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
var isFunction = require( '@stdlib/assert/is-function' );
var isArray = require( '@stdlib/assert/is-array' );
var copy = require( '@stdlib/utils/copy' );
var cwd = require( '@stdlib/process/cwd' );
var nextTick = require( '@stdlib/utils/next-tick' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var evaluate = require( './vm_evaluate.js' );
var transform = require( './transform.js' );


// VARIABLES //

var FILENAME = 'timeit.js';
var MIN_TIME = 0.1; // seconds
var ITERATIONS = 10; // 10^1
var MAX_ITERATIONS = 10000000000; // 10^10


// MAIN //

/**
* Times a snippet.
*
* @param {string} code - snippet to time
* @param {Options} [options] - function options
* @param {string} [options.before=""] - setup code
* @param {string} [options.after=""] - cleanup code
* @param {(PositiveInteger|null)} [options.iterations=1e6] - number of iterations
* @param {PositiveInteger} [options.repeats=3] - number of repeats
* @param {boolean} [options.asynchronous=false] - boolean indicating whether a snippet is asynchronous
* @param {Callback} clbk - callback to invoke upon completion
* @throws {TypeError} first argument must be a string
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
* @returns {void}
*
* @example
* var code = '';
* code += 'var x = Math.pow( Math.random(), 3 );';
* code += 'if ( x !== x ) {';
* code += 'throw new Error( \'Something went wrong.\' );';
* code += '}';
*
* timeit( code, done );
*
* function done( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( results );
* }
*/
function timeit( code, options, clbk ) {
	var results;
	var opts;
	var dir;
	var err;
	var idx;
	var cb;

	if ( !isString( code ) ) {
		throw new TypeError( 'invalid argument. First argument must be a primitive string. Value: `' + code + '`.' );
	}
	opts = copy( defaults );
	if ( arguments.length === 2 ) {
		cb = options;
	} else {
		cb = clbk;
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid argument. Callback argument must be a function. Value: `' + cb + '`.' );
	}
	results = new Array( opts.repeats );
	dir = cwd();
	idx = 0;

	// Pretest to check for early returns and/or errors...
	try {
		evaluate( code, opts, FILENAME, dir, onTest );
	} catch ( error ) {
		err = new Error( 'evaluation error. Encountered an error when evaluating snippet. '+error.message );
		return done( err );
	}

	/**
	* Evaluates a code snippet on the next turn of the event loop. Waiting until the next turn avoids the current turn being bogged down by a long running queue.
	*
	* @private
	* @param {Callback} clbk - callback
	*/
	function next( clbk ) {
		nextTick( onTick );

		/**
		* Callback invoked upon next turn of event loop.
		*
		* @private
		*/
		function onTick() {
			evaluate( code, opts, FILENAME, dir, clbk );
		}
	}

	/**
	* Callback invoked after completing pretest.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {NonNegativeIntegerArray} time - results
	* @returns {void}
	*/
	function onTest( error, time ) {
		if ( error ) {
			return done( error );
		}
		if ( !isArray( time ) || time.length !== 2 ) {
			// This should only happen if someone is a bad actor and attempts to call the `done` callback without providing timing results.
			error = new Error( 'evaluation error. Did not receive timing results.' );
			return done( error );
		}
		if ( opts.iterations === null ) {
			opts.iterations = ITERATIONS;
			return next( onRun );
		}
		// Begin timing the snippet...
		return next( onFinish );
	}

	/**
	* Callback invoked upon running a pre-run to determine the number of iterations.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {NonNegativeIntegerArray} time - results
	* @returns {void}
	*/
	function onRun( error, time ) {
		var t;
		if ( error ) {
			return done( error );
		}
		t = time[ 0 ] + ( time[ 1 ]/1e9 );
		if (
			t < MIN_TIME &&
			opts.iterations < MAX_ITERATIONS
		) {
			opts.iterations *= 10;
			return next( onRun );
		}
		// Begin timing the snippet...
		return next( onFinish );
	}

	/**
	* Callback invoked upon executing code.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {NonNegativeIntegerArray} time - results
	* @returns {void}
	*/
	function onFinish( error, time ) {
		if ( error ) {
			return done( error );
		}
		results[ idx ] = time;
		idx += 1;
		if ( idx < opts.repeats ) {
			return next( onFinish );
		}
		done( null, results );
	}

	/**
	* Callback invoked upon completion.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {ArrayArray} results - raw results
	*/
	function done( error, results ) {
		var out;
		if ( !error ) {
			out = transform( results, opts.iterations );
		}
		// Avoid releasing the zalgo:
		nextTick( onTick );

		/**
		* Callback invoked upon the next tick.
		*
		* @private
		* @returns {void}
		*/
		function onTick() {
			if ( error ) {
				return cb( error );
			}
			cb( null, out );
		}
	}
}


// EXPORTS //

module.exports = timeit;
