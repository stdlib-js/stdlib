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

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Interface defining function options.
*/
interface Options<T, U, V> {
	/**
	* Execution context.
	*/
	thisArg?: ThisParameterType<Reducer<T, U, V>>;

	/**
	* The maximum number of pending invocations at any one time.
	*/
	limit?: number;

	/**
	* Boolean indicating whether to sequentially invoke the reducer function for each `collection` element. If `true`, the function sets `options.limit=1`. Default: true.
	*/
	series?: boolean;
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
* @param accumulator - accumulated value
*/
type Binary<U> = ( error: Error | null, accumulator: U ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param accumulator - accumulated value
*/
type Callback<U> = Nullary | Unary | Binary<U>;

/**
* Reducer function invoked for each element in a collection.
*
* @param accumulator - accumulated value
* @param value - collection value
* @param next - a callback to be invoked after processing a collection `value`
*/
type TernaryReducer<T, U, V> = ( this: V, accumulator: U, value: T, next: Callback<U> ) => void;

/**
* Reducer function invoked for each element in a collection.
*
* @param accumulator - accumulated value
* @param value - collection value
* @param index - collection index
* @param next - a callback to be invoked after processing a collection `value`
*/
type QuaternaryReducer <T, U, V> = ( this: V, accumulator: U, value: T, index: number, next: Callback<U> ) => void;

/**
* Reducer function invoked for each element in a collection.
*
* @param accumulator - accumulated value
* @param value - collection value
* @param index - collection index
* @param collection - the input collection
* @param next - a callback to be invoked after processing a collection `value`
*/
type QuinaryReducer<T, U, V> = ( this: V, accumulator: U, value: T, index: number, collection: Collection<T>, next: Callback<U> ) => void;

/**
* Reducer function invoked for each element in a collection.
*
* @param accumulator - accumulated value
* @param value - collection value
* @param index - collection index
* @param collection - the input collection
* @param next - a callback to be invoked after processing a collection `value`
*/
type Reducer<T, U, V> = TernaryReducer<T, U, V> | QuaternaryReducer<T, U, V> | QuinaryReducer<T, U, V>;

/**
*  Applies a function against an accumulator and each element in a collection and return the accumulated result.
*
* @param collection - input collection
* @param initial - initial value
* @param done - function to invoke upon completion
*/
type FactoryFunction<T, U> = ( collection: Collection<T>, initial: U, done: Callback<U> ) => void;

/**
* Interface for `reduceRightAsync`.
*/
interface ReduceRightAsync {
	/**
	* Applies a function against an accumulator and each element in a collection and return the accumulated result, iterating from right to left.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param collection - input collection
	* @param initial - initial value
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: true)
	* @param reducer - function to invoke for each element in a collection
	* @param done - function to invoke upon completion
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function done( error, acc ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( acc.count );
	* }
	*
	* function read( acc, file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, acc );
	*         }
	*         acc.count += 1;
	*         next( null, acc );
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	* var acc = {
	*     'count': 0
	* };
	* reduceRightAsync( files, acc, {}, read, done );
	*/
	<T = unknown, U = unknown, V = unknown>( collection: Collection<T>, initial: U, options: Options<T, U, V>, reducer: Reducer<T, U, V>, done: Callback<U> ): void;

	/**
	* Applies a function against an accumulator and each element in a collection and return the accumulated result, iterating from right to left.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param collection - input collection
	* @param initial - initial value
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: true)
	* @param reducer - function to invoke for each element in a collection
	* @param done - function to invoke upon completion
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function done( error, acc ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( acc.count );
	* }
	*
	* function read( acc, file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, acc );
	*         }
	*         acc.count += 1;
	*         next( null, acc );
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	* var acc = {
	*     'count': 0
	* };
	* reduceRightAsync( files, acc, read, done );
	*/
	<T = unknown, U = unknown, V = unknown>( collection: Collection<T>, initial: U, reducer: Reducer<T, U, V>, done: Callback<U> ): void; // tslint:disable-line:no-unnecessary-generics

	/**
	* Returns a function to apply a function against an accumulator and each element in a collection and return the accumulated result, iterating from right to left.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: true)
	* @param reducer - function to invoke for each element in a collection
	* @throws must provide valid options
	* @returns function which invokes the provided function once for each element in a collection
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function read( acc, file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error, data ) {
	*         if ( error ) {
	*             return next( null, acc );
	*         }
	*         acc.count += 1;
	*         next( null, acc );
	*     }
	* }
	*
	* var opts = {
	*     'series': false
	* };
	*
	* // Create a `reduceRightAsync` function which invokes `read` for each collection element concurrently:
	* var reduceRightAsync = factory( opts, read );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles errors:
	* function done( error, acc ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( acc.count );
	* }
	*
	* // Run `read` for each element in `files`:
	* var acc = {
	*     'count': 0
	* };
	* reduceRightAsync( files, acc, done );
	*/
	factory<T = unknown, U = unknown, V = unknown>( options: Options<T, U, V>, reducer: Reducer<T, U, V> ): FactoryFunction<T, U>;

	/**
	* Returns a function to apply a function against an accumulator and each element in a collection and return the accumulated result, iterating from right to left.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param reducer - function to invoke for each element in a collection
	* @returns function which invokes the provided function once for each element in a collection
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function read( acc, file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error, data ) {
	*         if ( error ) {
	*             return next( null, acc );
	*         }
	*         acc.count += 1;
	*         next( null, acc );
	*     }
	* }
	*
	* // Create a `reduceRightAsync` function which invokes `read` for each collection element concurrently:
	* var reduceRightAsync = factory( read );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles errors:
	* function done( error, acc ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( acc.count );
	* }
	*
	* // Run `read` for each element in `files`:
	* var acc = {
	*     'count': 0
	* };
	* reduceRightAsync( files, acc, done );
	*/
	factory<T = unknown, U = unknown, V = unknown>( reducer: Reducer<T, U, V> ): FactoryFunction<T, U>; // tslint:disable-line:no-unnecessary-generics
}

/**
* Applies a function against an accumulator and each element in a collection and return the accumulated result, iterating from right to left.
*
* ## Notes
*
* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
* @param collection - input collection
* @param initial - initial value
* @param options - function options
* @param options.thisArg - execution context
* @param options.limit - maximum number of pending invocations at any one time
* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: true)
* @param reducer - function to invoke for each element in a collection
* @param done - function to invoke upon completion
* @throws must provide valid options
*
* @example
* var readFile = require( `@stdlib/fs/read-file` );
*
* function done( error, acc ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( acc.count );
* }
*
* function read( acc, file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( null, acc );
*         }
*         acc.count += 1;
*         next( null, acc );
*     }
* }
*
* var files = [
*     './beep.js',
*     './boop.js'
* ];
* var acc = {
*     'count': 0
* };
* reduceRightAsync( files, acc, read, done );
*/
declare var reduceRightAsync: ReduceRightAsync;


// EXPORTS //

export = reduceRightAsync;
