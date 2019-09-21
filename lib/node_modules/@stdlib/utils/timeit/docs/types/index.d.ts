/*
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

// TypeScript Version: 2.0

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Setup code.
	*/
	before?: string;

	/**
	* Cleanup code.
	*/
	after?: string;

	/**
	* Number of iterations.
	*/
	iterations?: number | null;

	/**
	* Number of repeats.
	*/
	repeats?: number;

	/**
	* Boolean indicating whether a snippet is asynchronous.
	*/
	asynchronous?: boolean;
}

/**
* Interface defining timing results.
*/
interface Results {
	/**
	* Number of iterations.
	*/
	iterations: number;

	/**
	* Number of repeats.
	*/
	repeats: number;

	/**
	* Minimum time in [seconds,nanoseconds].
	*/
	min: [ number, number ];

	/**
	* Elapsed time in seconds.
	*/
	elapsed: number;

	/**
	* Iterations per second.
	*/
	rate: number;

	/**
	* Raw timing results.
	*/
	times: Array<[ number, number ]>;
}

/**
* Callback function.
*/
type Nullary = () => void;

/**
* Callback function.
*
* @param error - encountered error or null
*/
type Unary = ( error: Error | null ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param results - timing results
*/
type Binary = ( error: Error | null, results: Results ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param results - timing results
*/
type Callback = Nullary | Unary | Binary;

/**
* Times a snippet.
*
* ## Notes
*
* -   The `state` parameter is simply an empty object which allows the `before`, `after`, and `code` snippets to share state.
* -   Snippets always run in strict mode.
* -   Always verify results. Doing so prevents the compiler from performing dead code elimination and other optimization techniques, which would render timing results meaningless.
* -   Executed code is not sandboxed and has access to the global state. You are strongly advised against timing untrusted code. To time untrusted code, do so in an isolated environment (e.g., a separate process with restricted access to both global state and the host environment).
* -   Wrapping asynchronous code does add overhead, but, in most cases, the overhead should be negligible compared to the execution cost of the timed snippet.
* -   While many benchmark frameworks calculate various statistics over raw timing results (e.g., mean and standard deviation), do not do this. Instead, consider the fastest time an approximate lower bound for how fast an environment can execute a snippet. Slower times are more likely attributable to other processes interfering with timing accuracy rather than attributable to variability in JavaScript's speed. In which case, the minimum time is most likely the only result of interest. When considering all raw timing results, apply common sense rather than statistics.
*
* @param code - snippet to time
* @param clbk - callback to invoke upon completion
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
declare function timeit( code: string, clbk: Callback ): void;

/**
* Times a snippet.
*
* ## Notes
*
* -   If the `asynchronous` option is set to `true`, the implementation assumes that `before`, `after`, and `code` snippets are all asynchronous. Accordingly, these snippets should invoke a `next( [error] )` callback once complete. The implementation wraps the snippet within a function accepting two arguments: `state` and `next`.
* -   The `state` parameter is simply an empty object which allows the `before`, `after`, and `code` snippets to share state.
* -   Snippets always run in strict mode.
* -   Always verify results. Doing so prevents the compiler from performing dead code elimination and other optimization techniques, which would render timing results meaningless.
* -   Executed code is not sandboxed and has access to the global state. You are strongly advised against timing untrusted code. To time untrusted code, do so in an isolated environment (e.g., a separate process with restricted access to both global state and the host environment).
* -   Wrapping asynchronous code does add overhead, but, in most cases, the overhead should be negligible compared to the execution cost of the timed snippet.
* -   When the `asynchronous` option is `true`, ensure that the main `code` snippet is actually asynchronous. If a snippet releases the zalgo, an error complaining about exceeding the maximum call stack size is highly likely.
* -   While many benchmark frameworks calculate various statistics over raw timing results (e.g., mean and standard deviation), do not do this. Instead, consider the fastest time an approximate lower bound for how fast an environment can execute a snippet. Slower times are more likely attributable to other processes interfering with timing accuracy rather than attributable to variability in JavaScript's speed. In which case, the minimum time is most likely the only result of interest. When considering all raw timing results, apply common sense rather than statistics.
*
* @param code - snippet to time
* @param options - function options
* @param options.before - setup code (default: '')
* @param options.after - cleanup code (default: '')
* @param options.iterations - number of iterations (default: 1e6)
* @param options.repeats - number of repeats (default: 3)
* @param options.asynchronous - boolean indicating whether a snippet is asynchronous (default: false)
* @param clbk - callback to invoke upon completion
*
* @example
* var code = 'var x = Math.pow( Math.random(), 3 );';
* code += 'if ( x !== x ) {';
* code += 'var err = new Error( \'Something went wrong.\' );';
* code += 'next( err );';
* code += '}';
* code += 'process.nextTick( next );';
*
* var opts = {
*     'iterations': 1e2,
*     'asynchronous': true
* };
*
* timeit( code, opts, done );
*
* function done( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( results );
* }
*/
declare function timeit( code: string, options: Options, clbk: Callback ): void;


// EXPORTS //

export = timeit;
