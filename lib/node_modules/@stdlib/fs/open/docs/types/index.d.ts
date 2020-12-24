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

/// <reference types="node"/>

import { Buffer } from 'buffer';

/**
* Callback invoked after opening a file.
*
* @param err - error argument
* @param fd - file descriptor
*/
type Callback = ( err: Error, fd: number ) => void;

/**
* Interface for opening a file.
*/
interface Open {
	/**
	* Asynchronously opens a file.
	*
	* @param path - file path
	* @param flags - file system flags (default: 'r')
	* @param mode - file mode (default: 0o666)
	* @param clbk - callback to invoke after opening a file
	*
	* @example
	* var closeSync = require( `@stdlib/fs/close` ).sync;
	*
	* function onOpen( error, fd ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     closeSync( fd );
	* }
	* open( __filename, 'r+', 438, onOpen );
	*/
	( path: string | Buffer, flags: string | number, mode: number, clbk: Callback ): void; // tslint-disable-line max-line-length

	/**
	* Asynchronously opens a file.
	*
	* @param path - file path
	* @param flags - file system flags (default: 'r')
	* @param clbk - callback to invoke after opening a file
	*
	* @example
	* var closeSync = require( `@stdlib/fs/close` ).sync;
	*
	* function onOpen( error, fd ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     closeSync( fd );
	* }
	* open( __filename, 'r+', onOpen );
	*/
	( path: string | Buffer, flags: string | number, clbk: Callback ): void;

	/**
	* Asynchronously opens a file.
	*
	* @param path - file path
	* @param clbk - callback to invoke after opening a file
	*
	* @example
	* var closeSync = require( `@stdlib/fs/close` ).sync;
	*
	* function onOpen( error, fd ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     closeSync( fd );
	* }
	* open( __filename, onOpen );
	*/
	( path: string | Buffer, clbk: Callback ): void;

	/**
	* Synchronously opens a file.
	*
	* @param path - file path
	* @param flags - file system flags (default: 'r')
	* @param mode - file mode (default: 0o666)
	* @returns file descriptor or an error
	*
	* @example
	* var closeSync = require( `@stdlib/fs/close` ).sync;
	*
	* var fd = open.sync( __filename, 'r+' );
	* if ( fd instanceof Error ) {
	*     throw fd;
	* }
	* closeSync( fd );
	*/
	sync( path: string | Buffer, flags?: string | number, mode?: number ): number | Error; // tslint-disable-line max-line-length
}

/**
* Asynchronously opens a file.
*
* @param path - file path
* @param flags - file system flags (default: 'r')
* @param mode - file mode (default: 0o666)
* @param clbk - callback to invoke after opening a file
*
* @example
* var closeSync = require( `@stdlib/fs/close` ).sync;
*
* function onOpen( error, fd ) {
*     if ( error ) {
*         throw error;
*     }
*     closeSync( fd );
* }
* open( __filename, onOpen );
*
* @example
* var closeSync = require( `@stdlib/fs/close` ).sync;
*
* var fd = open.sync( __filename );
* if ( fd instanceof Error ) {
*     throw fd;
* }
* closeSync( fd );
*/
declare var open: Open;


// EXPORTS //

export = open;
