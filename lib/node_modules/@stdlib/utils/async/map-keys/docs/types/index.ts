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
	* Boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next own property (default: false).
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
* @param out - output object
*/
type DoneBinary = ( error: Error | null, out: any ) => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error or null
* @param out - output object
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
* @param group - value group
*/
type Binary = ( error: Error | null, group: string ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param group - value group
*/
type Callback = Nullary | Unary | Binary;

/**
* Transform function.
*
* @param key - object key
* @param next - a callback to be invoked after processing an object `value`
*/
type BinaryTransform = ( value: any, next: Callback ) => void;

/**
* Transform function.
*
* @param key - object key
* @param value - object value corresponding to `key`
* @param next - a callback to be invoked after processing an object `value`
*/
type TertiaryTransform = ( value: any, index: number, next: Callback ) => void;

/**
* Transform function.
*
* @param key - object key
* @param value - object value corresponding to `key`
* @param obj - the input object
* @param next - a callback to be invoked after processing an object `value`
*/
type QuaternaryTransform = ( value: any, index: number, obj: any, next: Callback ) => void; // tslint-disable-line max-line-length

/**
* Transform function.
*
* @param key - object key
* @param value - object value corresponding to `key`
* @param obj - the input object
* @param next - a callback to be invoked after processing an object `value`
*/
type Transform = Unary | BinaryTransform | TertiaryTransform | QuaternaryTransform; // tslint-disable-line max-line-length

/**
* Maps keys from one object to a new object having the same values.
*
* @param obj - the input object
* @param done - function to invoke upon completion
*/
type FactoryFunction = ( obj: any, done: DoneCallback ) => void;

/**
* Interface for `mapKeysAsync`.
*/
interface MapKeysAsync {
	/**
	* Maps keys from one object to a new object having the same values.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	* -   Iteration and insertion order are **not** guaranteed.
	* -   The function only operates on own properties, not inherited properties.
	*
	*
	* @param obj - source object
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next own property (default: false)
	* @param transform - transform function
	* @param done - function to invoke upon completion
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function read( key, value, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( value, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, key+':unreadable' );
	*         }
	*         next( null, key+':readable' );
	*     }
	* }
	*
	* // Define a callback which handles errors:
	* function done( error, out ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( out );
	* }
	*
	* // Create a dictionary of file names:
	* var files = {
	*     'file1': './beep.js',
	*     'file2': './boop.js'
	* };
	*
	* var opts = {
	*     'series': true
	* };
	*
	* // Process each file in `files`:
	* mapKeysAsync( files, opts, read, done );
	*/
	( obj: any, options: Options, transform: Transform, done: DoneCallback ): void; // tslint-disable-line max-line-length

	/**
	* Maps keys from one object to a new object having the same values.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	* -   Iteration and insertion order are **not** guaranteed.
	* -   The function only operates on own properties, not inherited properties.
	*
	*
	* @param obj - source object
	* @param transform - transform function
	* @param done - function to invoke upon completion
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function read( key, value, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( value, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, key+':unreadable' );
	*         }
	*         next( null, key+':readable' );
	*     }
	* }
	*
	* // Define a callback which handles errors:
	* function done( error, out ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( out );
	* }
	*
	* // Create a dictionary of file names:
	* var files = {
	*     'file1': './beep.js',
	*     'file2': './boop.js'
	* };
	*
	* // Process each file in `files`:
	* mapKeysAsync( files, read, done );
	*/
	( obj: any, transform: Transform, done: DoneCallback ): void;

	/**
	* Returns a function to map keys from one object to a new object having the same values.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	* -   Iteration and insertion order are **not** guaranteed.
	* -   The function only operates on own properties, not inherited properties.
	*
	*
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next own property (default: false)
	* @param transform - transform function
	* @throws must provide valid options
	* @returns function which maps keys from one object to a new object having the same values
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function read( key, value, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( value, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, key+':unreadable' );
	*         }
	*         next( null, key+':readable' );
	*     }
	* }
	*
	* var opts = {
	*     'series': true
	* };
	*
	* // Create a reusable function:
	* var mapKeysAsync = factory( opts, read );
	*
	* // Create a dictionary of file names:
	* var files = {
	*     'file1': './beep.js',
	*     'file2': './boop.js'
	* };
	*
	* // Define a callback which handles errors:
	* function done( error, out ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( out );
	* }
	*
	* // Process each file in `files`:
	* mapKeysAsync( files, done );
	*/
	factory( options: Options, transform: Transform ): FactoryFunction;

	/**
	* Returns a function to map keys from one object to a new object having the same values.
	*
	* ## Notes
	*
	* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	* -   Iteration and insertion order are **not** guaranteed.
	* -   The function only operates on own properties, not inherited properties.
	*
	*
	* @param transform - transform function
	* @returns function which maps keys from one object to a new object having the same values
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function read( key, value, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( value, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, key+':unreadable' );
	*         }
	*         next( null, key+':readable' );
	*     }
	* }
	*
	* // Create a reusable function:
	* var mapKeysAsync = factory( read );
	*
	* // Create a dictionary of file names:
	* var files = {
	*     'file1': './beep.js',
	*     'file2': './boop.js'
	* };
	*
	* // Define a callback which handles errors:
	* function done( error, out ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( out );
	* }
	*
	* // Process each file in `files`:
	* mapKeysAsync( files, done );
	*/
	factory( transform: Transform ): FactoryFunction;
}

/**
* Maps keys from one object to a new object having the same values.
*
* ## Notes
*
* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
* -   Iteration and insertion order are **not** guaranteed.
* -   The function only operates on own properties, not inherited properties.
*
*
* @param obj - source object
* @param options - function options
* @param options.thisArg - execution context
* @param options.limit - maximum number of pending invocations at any one time
* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next own property (default: false)
* @param transform - transform function
* @param done - function to invoke upon completion
* @throws must provide valid options
*
* @example
* var readFile = require( `@stdlib/fs/read-file` );
*
* function read( key, value, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( value, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( null, key+':unreadable' );
*         }
*         next( null, key+':readable' );
*     }
* }
*
* // Define a callback which handles errors:
* function done( error, out ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( out );
* }
*
* // Create a dictionary of file names:
* var files = {
*     'file1': './beep.js',
*     'file2': './boop.js'
* };
*
* var opts = {
*     'series': true
* };
*
* // Process each file in `files`:
* mapKeysAsync( files, opts, read, done );
*/
declare var mapKeysAsync: MapKeysAsync;


// EXPORTS //

export = mapKeysAsync;
