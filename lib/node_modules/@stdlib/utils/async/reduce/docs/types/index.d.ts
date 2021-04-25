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

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/object';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* The maximum number of pending invocations at any one time.
	*/
	limit?: number;

	/**
	* Boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: true).
	*/
	series?: boolean;

	/**
	* Execution context.
	*/
	thisArg?: any;
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
type Binary = ( error: Error | null, accumulator: any ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param accumulator - accumulated value
*/
type Callback = Nullary | Unary | Binary;

/**
* Reducer function invoked for each element in a collection.
*
* @param accumulator - accumulated value
* @param value - collection value
* @param next - a callback to be invoked after processing a collection `value`
*/
type TertiaryReducer = ( accumulator: any, value: any, next: Callback ) => void;

/**
* Reducer function invoked for each element in a collection.
*
* @param accumulator - accumulated value
* @param value - collection value
* @param index - collection index
* @param next - a callback to be invoked after processing a collection `value`
*/
type QuaternaryReducer = ( accumulator: any, value: any, index: number, next: Callback ) => void; // tslint-disable-line max-line-length

/**
* Reducer function invoked for each element in a collection.
*
* @param accumulator - accumulated value
* @param value - collection value
* @param index - collection index
* @param collection - the input collection
* @param next - a callback to be invoked after processing a collection `value`
*/
type QuinaryReducer = ( accumulator: any, value: any, index: number, collection: Collection, next: Callback ) => void; // tslint-disable-line max-line-length

/**
* Reducer function invoked for each element in a collection.
*
* @param accumulator - accumulated value
* @param value - collection value
* @param index - collection index
* @param collection - the input collection
* @param next - a callback to be invoked after processing a collection `value`
*/
type Reducer = TertiaryReducer | QuaternaryReducer | QuinaryReducer;

/**
*  Applies a function against an accumulator and each element in a collection and return the accumulated result.
*
* @param collection - input collection
* @param initial - initial value
* @param done - function to invoke upon completion
*/
type FactoryFunction = ( collection: Collection, initial: any, done: Callback ) => void; // tslint-disable-line max-line-length

/**
* Interface for `reduceAsync`.
*/
interface ReduceAsync {
	/**
	* Applies a function against an accumulator and each element in a collection and return the accumulated result.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
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
	* reduceAsync( files, acc, {}, read, done );
	*/
	( collection: Collection, initial: any, options: Options, reducer: Reducer, done: Callback ): void; // tslint-disable-line max-line-length

	/**
	* Applies a function against an accumulator and each element in a collection and return the accumulated result.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param collection - input collection
	* @param initial - initial value
	* @param reducer - function to invoke for each element in a collection
	* @param done - function to invoke upon completion
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
	* reduceAsync( files, acc, read, done );
	*/
	( collection: Collection, initial: any, reducer: Reducer, done: Callback ): void; // tslint-disable-line max-line-length

	/**
	* Returns a function to apply a function against an accumulator and each element in a collection and return the accumulated result.
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
	* // Create a `reduceAsync` function which invokes `read` for each collection element concurrently:
	* var reduceAsync = factory( opts, read );
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
	* reduceAsync( files, acc, done );
	*/
	factory( options: Options, reducer: Reducer ): FactoryFunction;

	/**
	* Returns a function to apply a function against an accumulator and each element in a collection and return the accumulated result.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
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
	* // Create a `reduceAsync` function which invokes `read` for each collection element concurrently:
	* var reduceAsync = factory( read );
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
	* reduceAsync( files, acc, done );
	*/
	factory( reducer: Reducer ): FactoryFunction;
}

/**
* Applies a function against an accumulator and each element in a collection and return the accumulated result.
*
* ## Notes
*
* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
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
* reduceAsync( files, acc, read, done );
*/
declare var reduceAsync: ReduceAsync;


// EXPORTS //

export = reduceAsync;
