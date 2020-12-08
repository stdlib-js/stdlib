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

var EventEmitter = require( 'events' ).EventEmitter;
var inherit = require( '@stdlib/utils/inherit' );
var defineProperty = require( '@stdlib/utils/define-property' );
var TransformStream = require( '@stdlib/streams/node/transform' );
var push = require( './push.js' );
var createStream = require( './create_stream.js' );
var run = require( './run.js' );
var clear = require( './clear.js' );
var close = require( './close.js' ); // eslint-disable-line stdlib/no-redeclare
var exit = require( './exit.js' );


// MAIN //

/**
* Benchmark runner.
*
* @private
* @constructor
* @returns {Runner} Runner instance
*
* @example
* var runner = new Runner();
*/
function Runner() {
	if ( !( this instanceof Runner ) ) {
		return new Runner();
	}
	EventEmitter.call( this );

	// Private properties:
	defineProperty( this, '_benchmarks', {
		'value': [],
		'configurable': false,
		'writable': false,
		'enumerable': false
	});

	defineProperty( this, '_stream', {
		'value': new TransformStream(),
		'configurable': false,
		'writable': false,
		'enumerable': false
	});

	defineProperty( this, '_closed', {
		'value': false,
		'configurable': false,
		'writable': true,
		'enumerable': false
	});

	defineProperty( this, '_running', {
		'value': false,
		'configurable': false,
		'writable': true,
		'enumerable': false
	});

	// Public properties:
	defineProperty( this, 'total', {
		'value': 0,
		'configurable': false,
		'writable': true,
		'enumerable': true
	});

	defineProperty( this, 'fail', {
		'value': 0,
		'configurable': false,
		'writable': true,
		'enumerable': true
	});

	defineProperty( this, 'pass', {
		'value': 0,
		'configurable': false,
		'writable': true,
		'enumerable': true
	});

	defineProperty( this, 'skip', {
		'value': 0,
		'configurable': false,
		'writable': true,
		'enumerable': true
	});

	defineProperty( this, 'todo', {
		'value': 0,
		'configurable': false,
		'writable': true,
		'enumerable': true
	});

	return this;
}

/*
* Inherit from the `EventEmitter` prototype.
*/
inherit( Runner, EventEmitter );

/**
* Adds a new benchmark.
*
* @private
* @memberof Runner.prototype
* @function push
* @param {Benchmark} b - benchmark
*/
defineProperty( Runner.prototype, 'push', {
	'value': push,
	'configurable': false,
	'writable': false,
	'enumerable': false
});

/**
* Creates a results stream.
*
* @private
* @memberof Runner.prototype
* @function createStream
* @param {Options} [options] - stream options
* @returns {TransformStream} transform stream
*/
defineProperty( Runner.prototype, 'createStream', {
	'value': createStream,
	'configurable': false,
	'writable': false,
	'enumerable': false
});

/**
* Runs pending benchmarks.
*
* @private
* @memberof Runner.prototype
* @function run
*/
defineProperty( Runner.prototype, 'run', {
	'value': run,
	'configurable': false,
	'writable': false,
	'enumerable': false
});

/**
* Removes any pending benchmarks.
*
* @private
* @memberof Runner.prototype
* @function clear
*/
defineProperty( Runner.prototype, 'clear', {
	'value': clear,
	'configurable': false,
	'writable': false,
	'enumerable': false
});

/**
* Closes a benchmark runner.
*
* @private
* @memberof Runner.prototype
* @function close
*/
defineProperty( Runner.prototype, 'close', {
	'value': close,
	'configurable': false,
	'writable': false,
	'enumerable': false
});

/**
* Forcefully exits a benchmark runner.
*
* @private
* @memberof Runner.prototype
* @function exit
*/
defineProperty( Runner.prototype, 'exit', {
	'value': exit,
	'configurable': false,
	'writable': false,
	'enumerable': false
});


// EXPORTS //

module.exports = Runner;
