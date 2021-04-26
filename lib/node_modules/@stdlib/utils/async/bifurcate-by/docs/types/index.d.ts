/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
	* Execution context.
	*/
	thisArg?: any;

	/**
	* The maximum number of pending invocations at any one time.
	*/
	limit?: number;

	/**
	* Boolean indicating whether to sequentially invoke the `predicate` function for each `collection` element. If `true`, the function sets `options.limit=1`.
	*/
	series?: boolean;

	/**
	* If `'values'`, values are returned; if `'indices'`, indices are returned; if `'*'`, both indices and values are returned.
	*/
	returns?: 'values' | 'indices' | '*';
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
* @param result - bifurcation result
*/
type Binary = ( error: Error | null, result: Array<Array<any>> ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param result - bifurcation result
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
* Tests whether at least one element in a collection passes a test implemented by a predicate function, iterating from right to left.
*
* @param collection - input collection
* @param done - function to invoke upon completion
*/
type FactoryFunction = ( collection: Collection, done: Callback ) => void;

/**
* Interface for `bifurcateByAsync`.
*/
interface BifurcateByAsync {
	/**
	* Splits values into two groups according to a predicate function.
	*
	* ## Notes
	*
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param collection - input collection
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param options.returns - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned (default: 'values')
	* @param predicate - predicate function specifying which group an element in the input collection belongs to
	* @param done - function to invoke upon completion
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function done( error, result ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( result );
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
	* bifurcateByAsync( files, predicate, done );
	*/
	( collection: Collection, options: Options, predicate: Predicate, done: Callback ): void; // tslint-disable-line max-line-length

	/**
	* Splits values into two groups according to a predicate function.
	*
	* ## Notes
	*
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param collection - input collection
	* @param predicate - predicate function specifying which group an element in the input collection belongs to
	* @param done - function to invoke upon completion
	* @throws must provide valid options
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function done( error, result ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( result );
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
	* bifurcateByAsync( files, predicate, done );
	*/
	( collection: Collection, predicate: Predicate, done: Callback ): void;

	/**
	* Returns a function which splits values into two groups according to a predicate function.
	*
	* ## Notes
	*
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param options.returns - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned (default: 'values')
	* @param predicate - predicate function specifying which group an element in the input collection belongs to
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
	* // Create a `bifurcateByAsync` function which invokes the predicate function for each collection element sequentially:
	* var bifurcateByAsync = factory( opts, predicate );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles results:
	* function done( error, result ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( result );
	* }
	*
	* // Try to read each element in `files`:
	* bifurcateByAsync( files, done );
	*/
	factory( options: Options, predicate: Predicate ): FactoryFunction;

	/**
	* Returns a function which splits values into two groups according to a predicate function.
	*
	* ## Notes
	*
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	*
	* @param predicate - predicate function specifying which group an element in the input collection belongs to
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
	* // Create a `bifurcateByAsync` function which invokes the predicate function for each collection element sequentially:
	* var bifurcateByAsync = factory( opts, predicate );
	*
	* // Create a collection over which to iterate:
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* // Define a callback which handles results:
	* function done( error, result ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( result );
	* }
	*
	* // Try to read each element in `files`:
	* bifurcateByAsync( files, done );
	*/
	factory( predicate: Predicate ): FactoryFunction;
}

/**
* Splits values into two groups according to a predicate function.
*
* ## Notes
*
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
*
* @param collection - input collection
* @param options - function options
* @param options.thisArg - execution context
* @param options.limit - maximum number of pending invocations at any one time
* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
* @param options.returns - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned (default: 'values')
* @param predicate - predicate function specifying which group an element in the input collection belongs to
* @param done - function to invoke upon completion
* @throws must provide valid options
*
* @example
* var readFile = require( `@stdlib/fs/read-file` );
*
* function done( error, result ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( result );
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
* bifurcateByAsync( files, predicate, done );
*/
declare var bifurcateByAsync: BifurcateByAsync;


// EXPORTS //

export = bifurcateByAsync;
