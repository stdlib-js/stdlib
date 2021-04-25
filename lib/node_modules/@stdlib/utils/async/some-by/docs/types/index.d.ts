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
	* Boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false).
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
* @param result - test result
*/
type Binary = ( error: Error | null, result: boolean ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param result - test result
*/
type Callback = Nullary | Unary | Binary;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param next - callback which should be called once the predicate function has finished processing a collection value
*/
type BinaryPredicate = ( value: any, next: Callback ) => void;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param next - callback which should be called once the `predicate` function has finished processing a collection `value`
*/
type TertiaryPredicate = ( value: any, index: number, next: Callback ) => void;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @param next - callback which should be called once the `predicate` function has finished processing a collection `value`
*/
type QuaternaryPredicate = ( value: any, index: number, collection: Collection, next: Callback ) => void; // tslint-disable-line max-line-length

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @param next - callback which should be called once the `predicate` function has finished processing a collection `value`
*/
type Predicate = BinaryPredicate | TertiaryPredicate | QuaternaryPredicate;

/**
* Tests whether at least one element in a collection passes a test implemented by a predicate function.
*
* @param collection - input collection
* @param n - number of elements
* @param done - function to invoke upon completion
*/
type FactoryFunction = ( collection: Collection, n: number, done: Callback ) => void; // tslint-disable-line max-line-length

/**
* Interface for `someByAsync`.
*/
interface SomeByAsync {
	/**
	* Tests whether a collection contains at least `n` elements which pass a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If a predicate function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param collection - input collection
	* @param n - number of elements
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param predicate - predicate function to invoke for each element in a collection
	* @param done - function to invoke upon completion
	* @throws second argument must be a positive integer
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function done( error, bool ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     if ( bool ) {
	*         console.log( 'Successfully read some files.' );
	*     } else {
	*         console.log( 'Unable to read some files.' );
	*     }
	* }
	*
	* function predicate( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, false );
	*         }
	*         next( null, true );
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* someByAsync( files, 2, predicate, done );
	*/
	( collection: Collection, n: number, options: Options, predicate: Predicate, done: Callback ): void; // tslint-disable-line max-line-length

	/**
	* Tests whether a collection contains at least `n` elements which pass a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If a predicate function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param collection - input collection
	* @param n - number of elements
	* @param predicate - predicate function to invoke for each element in a collection
	* @param done - function to invoke upon completion
	* @throws second argument must be a positive integer
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function done( error, bool ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     if ( bool ) {
	*         console.log( 'Successfully read some files.' );
	*     } else {
	*         console.log( 'Unable to read some files.' );
	*     }
	* }
	*
	* function predicate( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, false );
	*         }
	*         next( null, true );
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* someByAsync( files, 2, predicate, done );
	*/
	( collection: Collection, n: number, predicate: Predicate, done: Callback ): void; // tslint-disable-line max-line-length

	/**
	* Returns a function for testing whether a collection contains at least `n` elements which pass a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If a predicate function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param predicate - predicate function to invoke for each element in a collection
	* @throws must provide valid options
	* @returns function which invokes the predicate function once for each element in a collection
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function predicate( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, false );
	*         }
	*         next( null, true );
	*     }
	* }
	*
	* var opts = {
	*     'series': true
	* };
	*
	* // Create a `someByAsync` function which invokes the predicate function for each collection element sequentially:
	* var someByAsync = factory( opts, predicate );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles results:
	* function done( error, bool ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     if ( bool ) {
	*         console.log( 'Successfully read some files.' );
	*     } else {
	*         console.log( 'Unable to read some files.' );
	*     }
	* }
	*
	* // Try to read each element in `files`:
	* someByAsync( files, 2, done );
	*/
	factory( options: Options, predicate: Predicate ): FactoryFunction;

	/**
	* Returns a function for testing whether a collection contains at least `n` elements which pass a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If a predicate function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param predicate - predicate function to invoke for each element in a collection
	* @returns function which invokes the predicate function once for each element in a collection
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function predicate( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, false );
	*         }
	*         next( null, true );
	*     }
	* }
	*
	* // Create a `someByAsync` function which invokes the predicate function for each collection element sequentially:
	* var someByAsync = factory( predicate );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles results:
	* function done( error, bool ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     if ( bool ) {
	*         console.log( 'Successfully read some files.' );
	*     } else {
	*         console.log( 'Unable to read some files.' );
	*     }
	* }
	*
	* // Try to read each element in `files`:
	* someByAsync( files, 2, done );
	*/
	factory( predicate: Predicate ): FactoryFunction;
}

/**
* Tests whether a collection contains at least `n` elements which pass a test implemented by a predicate function.
*
* ## Notes
*
* -   If a predicate function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
*
* @param collection - input collection
* @param n - number of elements
* @param options - function options
* @param options.thisArg - execution context
* @param options.limit - maximum number of pending invocations at any one time
* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
* @param predicate - predicate function to invoke for each element in a collection
* @param done - function to invoke upon completion
* @throws second argument must be a positive integer
* @throws must provide valid options
*
* @example
* var readFile = require( `@stdlib/fs/read-file` );
*
* function done( error, bool ) {
*     if ( error ) {
*         throw error;
*     }
*     if ( bool ) {
*         console.log( 'Successfully read some files.' );
*     } else {
*         console.log( 'Unable to read some files.' );
*     }
* }
*
* function predicate( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( null, false );
*         }
*         next( null, true );
*     }
* }
*
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* someByAsync( files, 2, predicate, done );
*/
declare var someByAsync: SomeByAsync;


// EXPORTS //

export = someByAsync;
