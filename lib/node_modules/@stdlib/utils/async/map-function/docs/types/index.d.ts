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

// TypeScript Version: 2.0

/**
* Interface defining function options.
*/
interface Options {
	/**
	* The maximum number of pending invocations at any one time.
	*/
	limit?: number;

	/**
	* Boolean indicating whether to wait for a previous invocation to complete before invoking a provided function again (default: false).
	*/
	series?: boolean;

	/**
	* Execution context.
	*/
	thisArg?: any;
}

/**
* Callback invoked upon completion.
*/
type DoneNullary = () => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error or null
*/
type DoneUnary = ( error: Error | null ) => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error or null
* @param results - results
*/
type DoneBinary = ( error: Error | null, results: Array<any> ) => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error or null
* @param results - results
*/
type DoneCallback = DoneNullary | DoneUnary | DoneBinary;

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
* @param result - result
*/
type Binary = ( error: Error | null, result: any ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param result - result
*/
type Callback = Nullary | Unary | Binary;

/**
* Function to invoke.
*
* @param index - invocation index (starting from zero)
* @param next - callback to be invoked upon function completion
*/
type Fcn = ( index: number, next: Callback ) => void;

/**
* Maps keys from one object to a new object having the same values.
*
* @param n - number of function invocations
* @param done - function to invoke upon completion
* @throws first argument must be a nonnegative integer
*/
type FactoryFunction = ( n: number, done: DoneCallback ) => void;

/**
* Interface for `mapFunAsync`.
*/
interface MapFunAsync {
	/**
	* Invokes a function `n` times and returns an array of accumulated function return values.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param fcn - function to invoke
	* @param n - number of function invocations
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function again (default: false)
	* @param done - callback to invoke upon invoking a function `n` times
	* @throws second argument must be a nonnegative integer
	* @throws must provide valid options
	*
	* @example
	* function fcn( i, next ) {
	*     setTimeout( onTimeout, i );
	*     function onTimeout() {
	*         next( null, i );
	*     }
	* }
	*
	* function done( error, out ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( JSON.stringify( out ) );
	*     // => [ 0, 1, 2, 3, 4 ]
	* }
	*
	* mapFunAsync( fcn, 5, done );
	*/
	( fcn: Fcn, n: number, options: Options, done: DoneCallback ): void;

	/**
	* Invokes a function `n` times and returns an array of accumulated function return values.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param fcn - function to invoke
	* @param n - number of function invocations
	* @param done - callback to invoke upon invoking a function `n` times
	* @throws second argument must be a nonnegative integer
	*
	* @example
	* function fcn( i, next ) {
	*     setTimeout( onTimeout, i );
	*     function onTimeout() {
	*         next( null, i );
	*     }
	* }
	*
	* function done( error, out ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( JSON.stringify( out ) );
	*     // => [ 0, 1, 2, 3, 4 ]
	* }
	*
	* mapFunAsync( fcn, 5, done );
	*/
	( fcn: Fcn, n: number, done: DoneCallback ): void;

	/**
	* Returns a function to invoke a function `n` times and return an array of accumulated function return values.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function again (default: false)
	* @param fcn - function to invoke
	* @throws must provide valid options
	* @returns function which invokes a function `n` times and returns an array of accumulated function return values
	*
	* @example
	* function fcn( i, next ) {
	*     setTimeout( onTimeout, 0 );
	*     function onTimeout() {
	*         next( null, i );
	*     }
	* }
	*
	* var opts = {
	*     'series': true
	* };
	*
	* var mapFunAsync = factory( opts, fcn );
	*
	* function done( error, results ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( results );
	* }
	*
	* mapFunAsync( 10, done );
	*/
	factory( options: Options, fcn: Fcn ): FactoryFunction;

	/**
	* Returns a function to invoke a function `n` times and return an array of accumulated function return values.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param fcn - function to invoke
	* @returns function which invokes a function `n` times and returns an array of accumulated function return values
	*
	* @example
	* function fcn( i, next ) {
	*     setTimeout( onTimeout, 0 );
	*     function onTimeout() {
	*         next( null, i );
	*     }
	* }
	*
	* var mapFunAsync = factory( fcn );
	*
	* function done( error, results ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( results );
	* }
	*
	* mapFunAsync( 10, done );
	*/
	factory( fcn: Fcn ): FactoryFunction;
}

/**
* Invokes a function `n` times and returns an array of accumulated function return values.
*
* ## Notes
*
* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
*
* @param fcn - function to invoke
* @param n - number of function invocations
* @param options - function options
* @param options.thisArg - execution context
* @param options.limit - maximum number of pending invocations at any one time
* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function again (default: false)
* @param done - callback to invoke upon invoking a function `n` times
* @throws second argument must be a nonnegative integer
* @throws must provide valid options
*
* @example
* function fcn( i, next ) {
*     setTimeout( onTimeout, i );
*     function onTimeout() {
*         next( null, i );
*     }
* }
*
* function done( error, out ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( JSON.stringify( out ) );
*     // => [ 0, 1, 2, 3, 4 ]
* }
*
* mapFunAsync( fcn, 5, done );
*/
declare var mapFunAsync: MapFunAsync;


// EXPORTS //

export = mapFunAsync;
