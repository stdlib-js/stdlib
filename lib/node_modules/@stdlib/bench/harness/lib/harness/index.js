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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var copy = require( '@stdlib/utils/copy' );
var Benchmark = require( './../benchmark-class' );
var Runner = require( './../runner' );
var nextTick = require( './../utils/next_tick.js' );
var DEFAULTS = require( './../defaults.json' );
var validate = require( './validate.js' );
var init = require( './init.js' );


// MAIN //

/**
* Creates a benchmark harness.
*
* @param {Options} [options] - function options
* @param {boolean} [options.autoclose] - boolean indicating whether to automatically close a harness after a harness finishes running all benchmarks
* @param {Callback} [clbk] - callback to invoke when a harness finishes running all benchmarks
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
* @returns {Function} benchmark harness
*
* @example
* var bench = createHarness( onFinish );
*
* function onFinish() {
*     bench.close();
*     console.log( 'Exit code: %d', bench.exitCode );
* }
*
* bench( 'beep', function benchmark( b ) {
*     var x;
*     var i;
*     b.tic();
*     for ( i = 0; i < b.iterations; i++ ) {
*         x = Math.sin( Math.random() );
*         if ( x !== x ) {
*             b.ok( false, 'should not return NaN' );
*         }
*     }
*     b.toc();
*     if ( x !== x ) {
*         b.ok( false, 'should not return NaN' );
*     }
*     b.end();
* });
*
* @example
* var stdout = require( '@stdlib/streams/node/stdout' );
*
* var stream = createHarness().createStream();
* stream.pipe( stdout );
*/
function createHarness( options, clbk ) {
	var exitCode;
	var runner;
	var queue;
	var opts;
	var cb;

	opts = {};
	if ( arguments.length === 1 ) {
		if ( isFunction( options ) ) {
			cb = options;
		} else if ( isObject( options ) ) {
			opts = options;
		} else {
			throw new TypeError( 'invalid argument. Must provide either an options object or a callback function. Value: `'+options+'`.' );
		}
	} else if ( arguments.length > 1 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid argument. First argument must be an object. Value: `'+options+'`.' );
		}
		if ( hasOwnProp( options, 'autoclose' ) ) {
			opts.autoclose = options.autoclose;
			if ( !isBoolean( opts.autoclose ) ) {
				throw new TypeError( 'invalid option. `autoclose` option must be a boolean primitive. Option: `'+opts.autoclose+'`.' );
			}
		}
		cb = clbk;
		if ( !isFunction( cb ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+cb+'`.' );
		}
	}
	runner = new Runner();
	if ( opts.autoclose ) {
		runner.once( 'done', close );
	}
	if ( cb ) {
		runner.once( 'done', cb );
	}
	exitCode = 0;
	queue = [];

	/**
	* Benchmark harness.
	*
	* @private
	* @param {string} name - benchmark name
	* @param {Options} [options] - benchmark options
	* @param {boolean} [options.skip=false] - boolean indicating whether to skip a benchmark
	* @param {(PositiveInteger|null)} [options.iterations=null] - number of iterations
	* @param {PositiveInteger} [options.repeats=3] - number of repeats
	* @param {PositiveInteger} [options.timeout=300000] - number of milliseconds before a benchmark automatically fails
	* @param {Function} [benchmark] - function containing benchmark code
	* @throws {TypeError} first argument must be a string
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {TypeError} benchmark argument must a function
	* @throws {Error} benchmark error
	* @returns {Function} benchmark harness
	*/
	function harness( name, options, benchmark ) {
		var opts;
		var err;
		var b;
		if ( !isString( name ) ) {
			throw new TypeError( 'invalid argument. First argument must be a string. Value: `'+name+'`.' );
		}
		opts = copy( DEFAULTS );
		if ( arguments.length === 2 ) {
			if ( isFunction( options ) ) {
				b = options;
			} else {
				err = validate( opts, options );
				if ( err ) {
					throw err;
				}
			}
		} else if ( arguments.length > 2 ) {
			err = validate( opts, options );
			if ( err ) {
				throw err;
			}
			b = benchmark;
			if ( !isFunction( b ) ) {
				throw new TypeError( 'invalid argument. Third argument must be a function. Value: `'+b+'`.' );
			}
		}
		// Add the benchmark to the initialization queue:
		queue.push( [ name, opts, b ] );

		// Perform initialization on the next turn of the event loop (note: this allows all benchmarks to be "registered" within the same turn of the loop; otherwise, we run the risk of registration-execution race conditions (i.e., a benchmark registers and executes before other benchmarks can register, depleting the benchmark queue and leading the harness to close)):
		if ( queue.length === 1 ) {
			nextTick( initialize );
		}
		return harness;
	}

	/**
	* Initializes each benchmark.
	*
	* @private
	* @returns {void}
	*/
	function initialize() {
		var idx = -1;
		return next();

		/**
		* Initialize the next benchmark.
		*
		* @private
		* @returns {void}
		*/
		function next() {
			var args;

			idx += 1;

			// If all benchmarks have been initialized, begin running the benchmarks:
			if ( idx === queue.length ) {
				queue.length = 0;
				return runner.run();
			}
			// Initialize the next benchmark:
			args = queue[ idx ];
			init( args[ 0 ], args[ 1 ], args[ 2 ], onInit );
		}

		/**
		* Callback invoked after performing initialization tasks.
		*
		* @private
		* @param {string} name - benchmark name
		* @param {Options} opts - benchmark options
		* @param {(Function|undefined)} benchmark - function containing benchmark code
		* @returns {void}
		*/
		function onInit( name, opts, benchmark ) {
			var b;
			var i;

			// Create a `Benchmark` instance for each repeat to ensure each benchmark has its own state...
			for ( i = 0; i < opts.repeats; i++ ) {
				b = new Benchmark( name, opts, benchmark );
				b.on( 'result', onResult );
				runner.push( b );
			}
			return next();
		}
	}

	/**
	* Callback invoked upon a `result` event.
	*
	* @private
	* @param {(string|Object)} result - result
	*/
	function onResult( result ) {
		if (
			!isString( result ) &&
			!result.ok &&
			!result.todo
		) {
			exitCode = 1;
		}
	}

	/**
	* Returns a results stream.
	*
	* @private
	* @param {Object} [options] - options
	* @returns {TransformStream} transform stream
	*/
	function createStream( options ) {
		if ( arguments.length ) {
			return runner.createStream( options );
		}
		return runner.createStream();
	}

	/**
	* Closes a benchmark harness.
	*
	* @private
	*/
	function close() {
		runner.close();
	}

	/**
	* Forcefully exits a benchmark harness.
	*
	* @private
	*/
	function exit() {
		runner.exit();
	}

	/**
	* Returns the harness exit code.
	*
	* @private
	* @returns {NonNegativeInteger} exit code
	*/
	function getExitCode() {
		return exitCode;
	}

	setReadOnly( harness, 'createStream', createStream );
	setReadOnly( harness, 'close', close );
	setReadOnly( harness, 'exit', exit );
	setReadOnlyAccessor( harness, 'exitCode', getExitCode );

	return harness;
}


// EXPORTS //

module.exports = createHarness;
