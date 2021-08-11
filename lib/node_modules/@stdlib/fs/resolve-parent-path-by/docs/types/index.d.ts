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
	* Base directory from which to search (default: current working directory).
	*/
	dir?: string;
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
type NextCallback = Nullary | Unary | Binary;

/**
* Checks whether a resolved path passes a test.
*
* @param path - resolved path
* @returns test result
*/
type SyncPredicate = ( path: string ) => boolean;

/**
* Checks whether a resolved path passes a test.
*
* @param path - resolved path
* @param next - callback which should be called once the `predicate` function has finished processing a resolved path
*/
type AsyncPredicate = ( path: string, next: NextCallback ) => void;

/**
* Callback invoked after resolving a path according to a predicate function.
*
* @param error - error object
* @param path - resolved path
*/
type DoneCallback = ( error: Error | null, path: string | null ) => void;

/**
* Interface for resolving a path according to a predicate function by walking parent directories.
*/
interface ResolveParentPathBy {
	/**
	* Asynchronously resolves a path according to a predicate function by walking parent directories.
	*
	* @param path - path to resolve
	* @param options - function options
	* @param options.dir - base directory
	* @param predicate - predicate function
	* @param clbk - callback to invoke after resolving a path
	* @throws must provide valid options
	*
	* @example
	* resolveParentPathBy( 'package.json', { 'dir': __dirname }, predicate, onPath );
	*
	* function predicate( path, next ) {
	*     next( null, true );
	* }
	*
	* function onPath( error, path ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( path );
	* }
	*/
	( path: string, options: Options, predicate: AsyncPredicate, clbk: DoneCallback ): void; // tslint-disable-line max-line-length

	/**
	* Asynchronously resolves a path according to a predicate function by walking parent directories.
	*
	* @param path - path to resolve
	* @param predicate - predicate function
	* @param clbk - callback to invoke after resolving a path
	*
	* @example
	* resolveParentPathBy( 'package.json', predicate, onPath );
	*
	* function predicate( path, next ) {
	*     next( null, true );
	* }
	*
	* function onPath( error, path ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( path );
	* }
	*/
	( path: string, predicate: AsyncPredicate, clbk: DoneCallback ): void;

	/**
	* Synchronously resolves a path according to a predicate function by walking parent directories.
	*
	* ## Notes
	*
	* -   If unable to resolve a path, the function returns `null` as the path result.
	*
	* @param path - path to resolve
	* @param options - function options
	* @param options.dir - base directory
	* @param predicate - predicate function
	* @throws must provide valid options
	* @returns resolved path or null
	*
	* @example
	* function predicate() {
	*     return true;
	* }
	*
	* var path = resolveParentPathBy.sync( 'package.json', { 'dir': __dirname }, predicate );
	* // e.g., returns '...'
	*/
	sync( path: string, options: Options, predicate: SyncPredicate ): string | null; // tslint-disable-line max-line-length

	/**
	* Synchronously resolves a path according to a predicate function by walking parent directories.
	*
	* ## Notes
	*
	* -   If unable to resolve a path, the function returns `null` as the path result.
	*
	* @param path - path to resolve
	* @param predicate - predicate function
	* @throws must provide valid options
	* @returns resolved path or null
	*
	* @example
	* function predicate() {
	*     return true;
	* }
	*
	* var path = resolveParentPathBy.sync( 'package.json', predicate );
	* // e.g., returns '...'
	*/
	sync( path: string, predicate: SyncPredicate ): string | null;
}

/**
* Asynchronously resolves a path according to a predicate function by walking parent directories.
*
* @param path - path to resolve
* @param options - function options
* @param options.dir - base directory
* @param predicate - predicate function
* @param clbk - callback to invoke after resolving a path
* @throws must provide valid options
*
* @example
* resolveParentPathBy( 'package.json', predicate, onPath );
*
* function predicate( path, next ) {
*     next( null, true );
* }
*
* function onPath( error, path ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( path );
* }
*
* @example
* function predicate() {
*     return true;
* }
*
* var path = resolveParentPathBy.sync( 'package.json', predicate );
* // e.g., returns '...'
*/
declare var resolveParentPathBy: ResolveParentPathBy;


// EXPORTS //

export = resolveParentPathBy;
