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
* Callback invoked either upon processing all collection elements or upon encountering an error.
*/
type DoneNullary = () => void;

/**
* Callback invoked either upon processing all collection elements or upon encountering an error.
*
* @param error - error argument
*/
type DoneUnary = ( error: Error ) => void;

/**
* Callback invoked either upon processing all collection elements or upon encountering an error.
*
* @param error - error argument
* @param collection - updated input collection
*/
type DoneBinary = ( error: Error, collection: Collection ) => void;

/**
* Callback invoked either upon processing all collection elements or upon encountering an error.
*
* @param error - error argument
* @param collection - updated input collection
*/
type DoneCallback = DoneNullary | DoneUnary | DoneBinary;

/**
* Callback function.
*
* @param error - error argument
* @param result - value used to update the collection
*/
type Unary = ( error: Error ) => void;

/**
* Callback function.
*
* @param error - error argument
* @param result - value used to update the collection
*/
type Binary = ( error: Error | null, result: any ) => void;

/**
* Callback function.
*
* @param error - error argument
* @param result - value used to update the collection
*/
type Callback = Unary | Binary;

/**
* Function invoked for each element in a collection.
*
* @param value - collection value
* @param next - a callback to be invoked after processing a collection `value`
*/
type BinaryFcn = ( value: any, next: Callback ) => void;

/**
* Function invoked for each element in a collection.
*
* @param value - collection value
* @param index - collection index
* @param next - a callback to be invoked after processing a collection `value`
*/
type TertiaryFcn = ( value: any, index: number, next: Callback ) => void;

/**
* Function invoked for each element in a collection.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @param next - a callback to be invoked after processing a collection `value`
*/
type QuaternaryFcn = ( value: any, index: number, collection: Collection, next: Callback ) => void; // tslint-disable-line max-line-length

/**
* Function invoked for each element in a collection.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @param next - a callback to be invoked after processing a collection `value`
*/
type Fcn = BinaryFcn | TertiaryFcn | QuaternaryFcn;

/**
* Invokes the provided function for each element in a collection and updates a collection in-place.
*
* @param collection - input collection
* @param done - function to invoke upon completion
*/
type FactoryFunction = ( collection: Collection, done: DoneCallback ) => void;

/**
* Interface for `inmapAsync`.
*/
interface InMapAsync {
	/**
	* Invokes a function once for each element in a collection and updates a collection in-place.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling. Note, however, that the function may have mutated an input collection during prior invocations, resulting in a partially mutated collection.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param collection - input collection
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param fcn - function to invoke for each element in a collection
	* @param done - function to invoke upon completion
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function done( error, results ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( results );
	* }
	*
	* function read( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error, data ) {
	*         if ( error ) {
	*             return next( error );
	*         }
	*         next( null, data );
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* inmapAsync( files, {}, read, done );
	*/
	( collection: Collection, options: Options, fcn: Fcn, done: DoneCallback ): void; // tslint-disable-line max-line-length

	/**
	* Invokes a function once for each element in a collection and updates a collection in-place.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling. Note, however, that the function may have mutated an input collection during prior invocations, resulting in a partially mutated collection.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param collection - input collection
	* @param fcn - function to invoke for each element in a collection
	* @param done - function to invoke upon completion
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function done( error, results ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( results );
	* }
	*
	* function read( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error, data ) {
	*         if ( error ) {
	*             return next( error );
	*         }
	*         next( null, data );
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* inmapAsync( files, read, done );
	*/
	( collection: Collection, fcn: Fcn, done: DoneCallback ): void;

	/**
	* Returns a function to invoke a function once for each element in a collection and to update the collection in-place.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling. Note, however, that the function may have mutated an input collection during prior invocations, resulting in a partially mutated collection.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param fcn - function to invoke for each element in a collection
	* @throws must provide valid options
	* @returns function which invokes the provided function once for each element in a collection
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function read( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error, data ) {
	*         if ( error ) {
	*             return next( error );
	*         }
	*         next( null, data );
	*     }
	* }
	*
	* var opts = {
	*     'series': true
	* };
	*
	* // Create a `inmapAsync` function which invokes `read` for each collection element sequentially:
	* var inmapAsync = factory( opts, read );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles errors:
	* function done( error, results ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( results );
	* }
	*
	* // Run `read` for each element in `files`:
	* inmapAsync( files, done );
	*/
	factory( options: Options, fcn: Fcn ): FactoryFunction;

	/**
	* Returns a function to invoke a function once for each element in a collection and to update the collection in-place.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling. Note, however, that the function may have mutated an input collection during prior invocations, resulting in a partially mutated collection.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param fcn - function to invoke for each element in a collection
	* @throws must provide valid options
	* @returns function which invokes the provided function once for each element in a collection
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function read( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error, data ) {
	*         if ( error ) {
	*             return next( error );
	*         }
	*         next( null, data );
	*     }
	* }
	*
	* // Create a `inmapAsync` function which invokes `read` for each collection element sequentially:
	* var inmapAsync = factory( read );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles errors:
	* function done( error, results ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( results );
	* }
	*
	* // Run `read` for each element in `files`:
	* inmapAsync( files, done );
	*/
	factory( fcn: Fcn ): FactoryFunction;
}

/**
* Invokes a function once for each element in a collection and updates a collection in-place.
*
* ## Notes
*
* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling. Note, however, that the function may have mutated an input collection during prior invocations, resulting in a partially mutated collection.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
*
* @param collection - input collection
* @param options - function options
* @param options.thisArg - execution context
* @param options.limit - maximum number of pending invocations at any one time
* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
* @param fcn - function to invoke for each element in a collection
* @param done - function to invoke upon completion
* @throws must provide valid options
*
* @example
* var readFile = require( `@stdlib/fs/read-file` );
*
* function done( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( results );
* }
*
* function read( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error, data ) {
*         if ( error ) {
*             return next( error );
*         }
*         next( null, data );
*     }
* }
*
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* inmapAsync( files, read, done );
*/
declare var inmapAsync: InMapAsync;


// EXPORTS //

export = inmapAsync;
