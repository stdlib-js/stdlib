/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="node"/>

import { Transform } from 'stream';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Boolean indicating whether to skip a benchmark (default: false).
	*/
	skip?: boolean;

	/**
	* Number of repeats (default: 3).
	*/
	repeats?: number;

	/**
	* Number of iterations (default: null).
	*/
	iterations?: number | null;

	/**
	* Number of milliseconds before a benchmark automatically fails (default: 300000).
	*/
	timeout?: number;
}

/**
* Harness options.
*/
interface HarnessOptions {
	/**
	* Indicating whether to automatically close a harness after running all benchmarks.
	*/
	autoclose: boolean;
}

/**
* Interface defining stream options.
*/
interface StreamOptions {
	/**
	* Callback to invoke upon receiving a new chunk.
	*/
	transform?: Function;

	/**
	* Callback to invoke after receiving all chunks and prior to the stream closing.
	*/
	flush?: Function;

	/**
	* Specifies whether a stream should operate in object mode (default: `false`).
	*/
	objectMode?: boolean;

	/**
	* Specifies how `Buffer` objects should be decoded to strings (default: `null`).
	*/
	encoding?: string | null;

	/**
	* Specifies the `Buffer` level for when `write()` starts returning `false`.
	*/
	highWaterMark?: number;

	/**
	* Specifies whether the stream should remain open even if one side ends (default: `false`).
	*/
	allowHalfOpen?: boolean;

	/**
	* Specifies whether to decode `strings` into `Buffer` objects when writing (default: `true`).
	*/
	decodeStrings?: boolean;
}

/**
* Callback invoked when a harness finishes running all benchmarks.
*/
type Callback = () => void;

/**
* Benchmark interface.
*/
interface Benchmark {
	/**
	* **Read-only** property whose value is the benchmark `name`.
	*
	* @example
	* var str = b.name;
	* // returns <string>
	*/
	readonly name: string;

	/**
	* **Read-only** property whose value is the number of iterations.
	*
	* @example
	* var iter = b.iterations;
	* // returns <number>
	*/
	readonly iterations: number;

	/**
	* Starts a benchmark timer. In order to benchmark code, this method **must always** be called within a `benchmark` function.
	*
	* @example
	* function benchmark( b ) {
	*     var x;
	*     var i;
	*
	*     // Start a timer:
	*     b.tic();
	*
	*     for ( i = 0; i < b.iterations; i++ ) {
	*         x = Math.sin( Math.random() );
	*         if ( x !== x ) {
	*             b.fail( 'should not return NaN' );
	*         }
	*     }
	*     b.toc();
	*     if ( x !== x ) {
	*         b.fail( 'should not return NaN' );
	*     }
	*     b.end();
	* }
	*/
	tic(): void;

	/**
	* Stops a benchmark timer. In order to benchmark code, this method **must always** be called within a `benchmark` function.
	*
	* @example
	* function benchmark( b ) {
	*     var x;
	*     var i;
	*
	*     b.tic();
	*     for ( i = 0; i < b.iterations; i++ ) {
	*         x = Math.sin( Math.random() );
	*         if ( x !== x ) {
	*             b.fail( 'should not return NaN' );
	*         }
	*     }
	*     // Stop a timer:
	*     b.toc();
	*
	*     if ( x !== x ) {
	*         b.fail( 'should not return NaN' );
	*     }
	*     b.end();
	* }
	*/
	toc(): void;

	/**
	* Explicitly ends a benchmark. In order to benchmark code, this method **must always** be called within a `benchmark` function.
	*
	* ## Notes
	*
	* -   **Warning**: no assertions should follow a call to `b.end()`. Including assertions after `b.end()` may result in interleaved [TAP][tap] output or an output stream closing before a benchmark executes pending assertions.
	*
	* @example
	* function benchmark( b ) {
	*     var x;
	*     var i;
	*
	*     b.tic();
	*     for ( i = 0; i < b.iterations; i++ ) {
	*         x = Math.sin( Math.random() );
	*         if ( x !== x ) {
	*             b.fail( 'should not return NaN' );
	*         }
	*     }
	*     b.toc();
	*
	*     if ( x !== x ) {
	*         b.fail( 'should not return NaN' );
	*     }
	*
	*     // Explicitly end the benchmark:
	*     b.end();
	* }
	*/
	end(): void;

	/**
	* Writes a message without breaking [TAP][tap] output.
	*
	* ## Notes
	*
	* -   To prevent confusing results parsers, **avoid** using comments. Comments are frequently used for demarcating the beginning of a new benchmark run and/or providing diagnostic information. Both of the aforementioned use cases typically fall under the domain of the harness, not the user.
	*
	* @param msg - message
	*
	* @example
	* b.comment( 'This is a comment.' );
	*/
	comment( msg: string ): void;

	/**
	* Generates an assertion which will be skipped.
	*
	* @param value - value
	* @param msg - message
	*
	* @example
	* b.skip( false, 'This is skipped.' );
	* b.skip( true, 'This is skipped.' );
	*/
	skip( value: any, msg: string ): void;

	/**
	* Generates an assertion which should be implemented.
	*
	* ## Notes
	*
	* -   While `b.todo()` assertions typically fail, they do **not** contribute to the failed assertion count. If a benchmark includes `b.todo()` assertions and no other failing assertions, the benchmark is considered successful.
	*
	* @param value - value
	* @param msg - message
	*
	* @example
	* b.todo( false, 'This is a todo.' );
	* b.todo( true, 'This is a todo.' );
	*/
	todo( value: any, msg: string ): void;

	/**
	* Generates a failing assertion.
	*
	* @param msg - message
	*
	* @example
	* b.fail( 'This is a failing assertion.' );
	*/
	fail( msg: string ): void;

	/**
	* Generates a passing assertion.
	*
	* @param msg - message
	*
	* @example
	* b.fail( 'This is a passing assertion.' );
	*/
	pass( msg: string ): void;

	/**
	* Asserts that a `value` is truthy.
	*
	* @param value - value
	* @param msg - message
	*
	* @example
	* b.ok( [] );
	*
	* @example
	* b.ok( true, 'This asserts a value is truthy.' );
	* b.ok( false, 'This asserts a value is truthy.' );
	*/
	ok( value: any, msg?: string ): void;

	/**
	* Asserts that a `value` is falsy.
	*
	* @param value - value
	* @param msg - message
	*
	* @example
	* b.notOk( null );
	*
	* @example
	* b.notOk( false, 'This asserts a value is falsy.' );
	* b.notOk( true, 'This asserts a value is falsy.' );
	*/
	notOk( value: any, msg?: string ): void;

	/**
	* Asserts that `actual` is **strictly** equal to `expected`.
	*
	* @param actual - actual value
	* @param expected - expected value
	* @param msg - message
	*
	* @example
	* var expected = [];
	* var actual = expected;
	*
	* b.equal( actual, expected );
	*
	* @example
	* var expected = [];
	* var actual = expected;
	*
	* b.equal( actual, expected, 'This asserts two values are strictly equal.' );
	* b.equal( 1.0, 2.0, 'This asserts two values are strictly equal.' );
	*/
	equal( actual: any, expected: any, msg?: string ): void;

	/**
	* Asserts that `actual` is not **strictly** equal to `expected`.
	*
	* @param actual - actual value
	* @param expected - expected value
	* @param msg - message
	*
	* @example
	* var expected = [];
	* var actual = [];
	*
	* b.notEqual( actual, expected );
	*
	* @example
	* var expected = [];
	* var actual = [];
	*
	* b.notEqual( 1.0, 2.0, 'This asserts two values are not equal.' );
	* b.notEqual( actual, expected, 'This asserts two values are not equal.' );
	*/
	notEqual( actual: any, expected: any, msg?: string ): void;

	/**
	* Asserts that `actual` is **deeply** equal to `expected`.
	*
	* @param actual - actual value
	* @param expected - expected value
	* @param msg - message
	*
	* @example
	* var expected = {
	*     'a': 'b'
	* };
	* var actual = {
	*     'a': 'b'
	* };
	*
	* b.deepEqual( actual, expected );
	*
	* @example
	* var expected = {
	*     'a': 'b'
	* };
	* var actual = {
	*     'a': 'b'
	* };
	*
	* b.deepEqual( actual, expected, 'This asserts two values are deeply equal.' );
	*
	* actual.a = 'c';
	* b.deepEqual( actual, expected, 'This asserts two values are deeply equal.' );
	*/
	deepEqual( actual: any, expected: any, msg?: string ): void;

	/**
	* Asserts that `actual` is not **deeply** equal to `expected`.
	*
	* @param actual - actual value
	* @param expected - expected value
	* @param msg - message
	*
	* @example
	* var expected = {
	*     'a': 'b'
	* };
	* var actual = {
	*     'a': 'c'
	* };
	*
	* b.notDeepEqual( actual, expected );
	*
	* @example
	* var expected = {
	*     'a': 'b'
	* };
	* var actual = {
	*     'a': 'c'
	* };
	*
	* b.notDeepEqual( actual, expected, 'This asserts two values are not deeply equal.' );
	*
	* actual.a = 'b';
	* b.notDeepEqual( actual, expected, 'This asserts two values are not deeply equal.' );
	*/
	notDeepEqual( actual: any, expected: any, msg?: string ): void;
}

/**
* Benchmark function.
*/
type BenchmarkFunction = ( b: Benchmark ) => void;

/**
* Harness interface.
*/
interface Harness {
	/**
	* Returns a results [stream][nodejs-stream].
	*
	* ## Notes
	*
	* -   Benchmarks will **not** run until a destination stream has been created.
	*
	* @param options - stream options
	*
	* @example
	* var stdout = require( '@stdlib/streams/node/stdout' );
	*
	* var harness = bench.createHarness();
	* var stream = harness.createStream();
	*
	* // Direct all results to `stdout`:
	* stream.pipe( stdout );
	*
	* var opts = {
	*     'iterations': 1,
	*     'repeats': 1
	* };
	*
	* harness( 'beep', opts, function benchmark( b ) {
	*     var i;
	*     b.tic();
	*     for ( i = 0; i < b.iterations; i++ ) {
	*         b.equal( 'beep', 'beep', 'should be equal' );
	*     }
	*     b.toc();
	*     b.end();
	* });
	*/
	createStream( options?: StreamOptions ): Transform;

	/**
	* Closes a benchmark harness. Any pending benchmarks are cleared from the harness stack.
	*
	* ## Notes
	*
	* -   **Warning**: a running benchmark may finish **after** closing a harness.
	*
	* @example
	* var stdout = require( '@stdlib/streams/node/stdout' );
	*
	* var harness = bench.createHarness();
	*
	* var stream = harness.createStream();
	* stream.pipe( stdout );
	*
	* var opts = {
	*     'iterations': 5,
	*     'repeats': 5
	* };
	*
	* harness( 'early close', opts, function benchmark( b ) {
	*     var i = 0;
	*     b.tic();
	*     setTimeout( next, 0 );
	*     function next() {
	*         i += 1;
	*         if ( i <= b.iterations ) {
	*             b.ok( true, 'should be truthy' );
	*             return setTimeout( next, 10 );
	*         }
	*         b.toc();
	*         b.end();
	*     }
	* });
	*
	* // Early close:
	* setTimeout( onTimeout, 50 );
	*
	* function onTimeout() {
	*     harness.close();
	* }
	*/
	close(): void;

	/**
	* Forcefully exits a benchmark harness. All pending benchmarks will generate **failing** assertions.
	*
	* ## Notes
	*
	* -   **Warning**: a running benchmark may finish **after** exiting a harness.
	*
	* @example
	* var stdout = require( '@stdlib/streams/node/stdout' );
	*
	* var harness = bench.createHarness();
	*
	* var stream = harness.createStream();
	* stream.pipe( stdout );
	*
	* var opts = {
	*     'iterations': 5
	* };
	*
	* harness( 'force exit', opts, function benchmark( b ) {
	*     var i = 0;
	*     b.tic();
	*     return next();
	*     function next() {
	*         i += 1;
	*         if ( i <= b.iterations ) {
	*             b.ok( true, 'should be truthy' );
	*             return setTimeout( next, 10 );
	*         }
	*         b.toc();
	*         b.end();
	*     }
	* });
	*
	* // Forcefully exit:
	* setTimeout( onTimeout, 20 );
	*
	* function onTimeout() {
	*     harness.exit();
	* }
	*/
	exit(): void;

	/**
	* **Read-only** property whose value is the harness exit code. If all benchmarks run successfully (i.e., no failing assertions), the exit code is `0`; otherwise, the exit code is `1`.
	*
	* @example
	* var harness = bench.createHarness();
	*
	* // Benchmarks only start running when results have a destination:
	* var stream = harness.createStream();
	*
	* function onFinish() {
	*     console.log( harness.exitCode );
	*     // => 1
	* }
	*
	* var opts = {
	*     'iterations': 1,
	*     'repeats': 1
	* };
	*
	* harness( 'exit code', opts, function benchmark( b ) {
	*     var i;
	*     b.tic();
	*     for ( i = 0; i < b.iterations; i++ ) {
	*         b.fail( 'failing assertion' );
	*     }
	*     b.toc();
	*     b.end();
	* });
	*/
	readonly exitCode: number;
}

/**
* Interface for the benchmark harness.
*/
interface Main {
	/**
	* Runs a benchmark.
	*
	* @param name - benchmark name
	* @param benchmark - function containing benchmark code
	* @returns benchmark harness
	*
	* @example
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
	*/
	( name: string, benchmark?: BenchmarkFunction ): Function;

	/**
	* Runs a benchmark.
	*
	* @param name - benchmark name
	* @param options - benchmark options
	* @param options.skip - boolean indicating whether to skip a benchmark (default: false)
	* @param options.iterations - number of iterations (default: null)
	* @param options.repeats - number of repeats (default: 3)
	* @param options.timeout - number of milliseconds before a benchmark automatically fails (default: 300000)
	* @param benchmark - function containing benchmark code
	* @throws must provide valid options
	* @returns benchmark harness
	*
	* @example
	* var opts = {
	*     'repeats': 5
	* };
	*
	* bench( 'beep', opts, function benchmark( b ) {
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
	*/
	( name: string, options: Options, benchmark?: BenchmarkFunction ): Function;

	/**
	* Creates a benchmark harness with a new pending stack and state.
	*
	* @param clbk - callback to invoke when a harness finishes running all benchmarks
	* @returns benchmark harness
	*/
	createHarness( clbk?: Callback ): Harness;

	/**
	* Creates a benchmark harness with a new pending stack and state.
	*
	* @param options - harness options
	* @param options.autoclose - indicating whether to automatically close a harness after running all benchmarks
	* @param clbk - callback to invoke when a harness finishes running all benchmarks
	* @throws must provide valid options
	*/
	createHarness( options: HarnessOptions, clbk?: Callback ): Harness;

	/**
	* Creates a results stream.
	*
	* @param options - stream options
	* @param options.transform - callback to invoke upon receiving a new chunk
	* @param options.flush - callback to invoke after receiving all chunks and prior to the stream closing
	* @param options.objectMode - specifies whether stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.allowHalfOpen - specifies whether the stream should remain open even if one side ends (default: false)
	* @param options.decodeStrings - specifies whether to decode `strings` into `Buffer` objects when writing (default: true)
	* @throws must provide valid stream options
	*/
	createStream( options?: StreamOptions ): Transform;

	/**
	* Sets a listener which is invoked once the harness **finishes** running all benchmarks.
	*
	* @param clbk - listener
	* @throws must provide a listener only once
	*/
	onFinish( clbk: Function ): void;
}

/**
* Runs a benchmark.
*
* @param name - benchmark name
* @param benchmark - function containing benchmark code
* @returns benchmark harness
*
* @example
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
* var opts = {
*     'repeats': 5
* };
*
* bench( 'beep', opts, function benchmark( b ) {
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
*/
declare var main: Main;


// EXPORTS //

export = main;
