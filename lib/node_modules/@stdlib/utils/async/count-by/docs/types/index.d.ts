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
interface Options<T, V> {
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
	thisArg?: ThisParameterType<Indicator<T, V>>;
}

/**
* Interface defining a results object.
*/
interface Results {
	/**
	* Results for an individual group.
	*/
	[ key: string ]: number;
}

/**
* Callback invoked either upon processing all collection elements or upon encountering an error.
*/
type Nullary = () => void;

/**
* Callback invoked either upon processing all collection elements or upon encountering an error.
*
* @param error - encountered error or null
*/
type Unary = ( error: Error | null ) => void;

/**
* Callback invoked either upon processing all collection elements or upon encountering an error.
*
* @param error - encountered error or null
* @param result - counts
*/
type Binary = ( error: Error | null, result: Results ) => void;

/**
* Callback invoked either upon processing all collection elements or upon encountering an error.
*
* @param error - encountered error or null
* @param result - counts
*/
type Callback = Nullary | Unary | Binary;

/**
* Callback function to invoke once the predicate function has finished processing a collection value.
*/
type NullaryNext = () => void;

/**
* Callback function to invoke once the predicate function has finished processing a collection value.
*
* @param error - encountered error or null
*/
type UnaryNext = ( error: Error | null ) => void;

/**
* Callback function to invoke once the predicate function has finished processing a collection value.
*
* @param error - encountered error or null
* @param group - value group
*/
type BinaryNext = ( error: Error | null, group: string | Symbol | number ) => void;

/**
* Callback function to invoke once the predicate function has finished processing a collection value.
*
* @param error - encountered error or null
* @param group - value group
*/
type Next = NullaryNext | UnaryNext | BinaryNext;

/**
* Returns the group to which a collection element belongs.
*
* @param value - collection value
* @param next - a callback to be invoked after processing a collection `value`
*/
type BinaryIndicator<T, V> = ( this: V, value: T, next: Next ) => void;

/**
* Returns the group to which a collection element belongs.
*
* @param value - collection value
* @param index - collection index
* @param next - a callback to be invoked after processing a collection `value`
*/
type TernaryIndicator<T, V> = ( this: V, value: T, index: number, next: Next ) => void;

/**
* Returns the group to which a collection element belongs.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @param next - a callback to be invoked after processing a collection `value`
*/
type QuaternaryIndicator<T, V> = ( this: V, value: T, index: number, collection: Collection<T>, next: Next ) => void;

/**
* Returns the group to which a collection element belongs.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @param next - a callback to be invoked after processing a collection `value`
*/
type Indicator<T, V> = BinaryIndicator<T, V> | TernaryIndicator<T, V> | QuaternaryIndicator<T, V>;

/**
* Invokes an indicator function for each element in a collection.
*
* @param collection - input collection
* @param done - function to invoke upon completion
*/
type FactoryFunction<T> = ( collection: Collection<T>, done: Callback ) => void;

/**
* Interface for `countByAsync`.
*/
interface CountByAsync {
	/**
	* Groups values according to an indicator function and returns group counts.
	*
	* ## Notes
	*
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param collection - input collection
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param indicator - indicator function specifying which group an element in the input collection belongs to
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
	* function indicator( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, 'nonreadable' );
	*         }
	*         next( null, 'readable' );
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* countByAsync( files, indicator, done );
	*/
	<T = unknown, V = unknown>( collection: Collection<T>, options: Options<T, V>, indicator: Indicator<T, V>, done: Callback ): void;

	/**
	* Groups values according to an indicator function and returns group counts.
	*
	* ## Notes
	*
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param collection - input collection
	* @param indicator - indicator function specifying which group an element in the input collection belongs to
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
	* function indicator( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, 'nonreadable' );
	*         }
	*         next( null, 'readable' );
	*     }
	* }
	*
	* var files = [
	*     './beep.js',
	*     './boop.js'
	* ];
	*
	* countByAsync( files, indicator, done );
	*/
	<T = unknown, V = unknown>( collection: Collection<T>, indicator: Indicator<T, V>, done: Callback ): void; // tslint:disable-line:no-unnecessary-generics

	/**
	* Returns a function for grouping values according to an indicator function and returns group counts.
	*
	* ## Notes
	*
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param indicator - indicator function specifying which group an element in the input collection belongs to
	* @throws must provide valid options
	* @returns function which invokes the indicator function once for each element in a collection
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function indicator( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, 'nonreadable' );
	*         }
	*         next( null, 'readable' );
	*     }
	* }
	*
	* var opts = {
	*     'series': true
	* };
	*
	* // Create a `countByAsync` function which invokes the indicator function for each collection element sequentially:
	* var countByAsync = factory( opts, indicator );
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
	* countByAsync( files, done );
	*/
	factory<T = unknown, V = unknown>( options: Options<T, V>, indicator: Indicator<T, V> ): FactoryFunction<T>;

	/**
	* Returns a function for grouping values according to an indicator function and returns group counts.
	*
	* ## Notes
	*
	* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
	*
	* @param options - function options
	* @param options.thisArg - execution context
	* @param options.limit - maximum number of pending invocations at any one time
	* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
	* @param indicator - indicator function specifying which group an element in the input collection belongs to
	* @throws must provide valid options
	* @returns function which invokes the indicator function once for each element in a collection
	*
	* @example
	* var readFile = require( `@stdlib/fs/read-file` );
	*
	* function indicator( file, next ) {
	*     var opts = {
	*         'encoding': 'utf8'
	*     };
	*     readFile( file, opts, onFile );
	*
	*     function onFile( error ) {
	*         if ( error ) {
	*             return next( null, 'nonreadable' );
	*         }
	*         next( null, 'readable' );
	*     }
	* }
	*
	* // Create a `countByAsync` function which invokes the indicator function for each collection element sequentially:
	* var countByAsync = factory( indicator );
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
	* countByAsync( files, done );
	*/
	factory<T = unknown, V = unknown>( indicator: Indicator<T, V> ): FactoryFunction<T>; // tslint:disable-line:no-unnecessary-generics
}

/**
* Groups values according to an indicator function and returns group counts.
*
* ## Notes
*
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
* @param collection - input collection
* @param options - function options
* @param options.thisArg - execution context
* @param options.limit - maximum number of pending invocations at any one time
* @param options.series - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection (default: false)
* @param indicator - indicator function specifying which group an element in the input collection belongs to
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
* function indicator( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( null, 'nonreadable' );
*         }
*         next( null, 'readable' );
*     }
* }
*
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* countByAsync( files, indicator, done );
*/
declare var countByAsync: CountByAsync;


// EXPORTS //

export = countByAsync;
