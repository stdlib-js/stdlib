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

/**
* Callback invoked after closing a file descriptor.
*/
type Nullary = () => void;

/**
* Callback invoked after closing a file descriptor.
*
* @param err - error argument
*/
type Unary = ( err: Error ) => void;

/**
* Callback invoked after closing a file descriptor.
*
* @param err - error argument
*/
type Callback = Nullary | Unary;

/**
* Interface for closing a file descriptor.
*/
interface Close {
	/**
	* Asynchronously closes a file descriptor.
	*
	* @param fd - file descriptor
	* @param clbk - callback to invoke after closing a file descriptor
	* @throws first argument must be a valid file descriptor (nonnegative integer)
	*
	* @example
	* var openSync = require( `@stdlib/fs/open` ).sync;
	*
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	* }
	*
	* var fd = openSync( __filename, 'r+' );
	* if ( fd instanceof Error ) {
	*     throw fd;
	* }
	*
	* close( fd, done );
	*/
	( fd: number, clbk: Callback ): void;

	/**
	* Synchronously closes a file descriptor.
	*
	* @param fd - file descriptor
	* @throws first argument must be a valid file descriptor (nonnegative integer)
	* @returns an error object or `undefined`
	*
	* @example
	* var openSync = require( `@stdlib/fs/open` ).sync;
	*
	* var fd = openSync( __filename, 'r+' );
	*
	* if ( fd instanceof Error ) {
	*     throw fd;
	* }
	*
	* var err = close.sync( fd );
	* if ( err instanceof Error ) {
	*     throw err;
	* }
	*/
	sync( fd: number ): Error | void;
}

/**
* Asynchronously closes a file descriptor.
*
* @param fd - file descriptor
* @param clbk - callback to invoke after closing a file descriptor
* @throws first argument must be a valid file descriptor (nonnegative integer)
*
* @example
* var openSync = require( `@stdlib/fs/open` ).sync;
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* var fd = openSync( __filename, 'r+' );
* if ( fd instanceof Error ) {
*     throw fd;
* }
*
* close( fd, done );
*
* @example
* var openSync = require( `@stdlib/fs/open` ).sync;
*
* var fd = openSync( __filename, 'r+' );
*
* if ( fd instanceof Error ) {
*     throw fd;
* }
*
* var err = close.sync( fd );
* if ( err instanceof Error ) {
*     throw err;
* }
*/
declare var close: Close;


// EXPORTS //

export = close;
