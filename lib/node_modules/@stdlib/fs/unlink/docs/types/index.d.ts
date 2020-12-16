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
* Callback invoked upon removing an entry.
*/
type Nullary = () => void;

/**
* Callback invoked upon removing an entry.
*
* @param err - error argument
*/
type Unary = ( err: Error | null ) => void;

/**
* Callback invoked upon removing an entry.
*
* @param err - error argument
*/
type Callback = Nullary | Unary;

/**
* Interface for removing a directory entry.
*/
interface Unlink {
	/**
	* Asynchronously removes a directory entry.
	*
	* @param path - entry path
	* @param clbk - callback to invoke after removing a directory entry
	*
	* @example
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	* }
	*
	* unlink( './beep/boop.txt', done );
	*/
	( path: string | Buffer | number, clbk: Callback ): void;

	/**
	* Synchronously removes a directory entry.
	*
	* @param path - path
	* @returns error object or null
	*
	* @example
	* var err = unlink.sync( './beep/boop.txt' );
	* if ( err instanceof Error ) {
	*     throw err;
	* }
	*/
	sync( path: string | Buffer | number ): Error | null;
}

/**
* Asynchronously removes a directory entry.
*
* @param path - entry path
* @param clbk - callback to invoke after removing a directory entry
*
* @example
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
* unlink( './beep/boop.txt', done );
*
* @example
* var err = unlink.sync( './beep/boop.txt' );
* if ( err instanceof Error ) {
*     throw err;
* }
*/
declare var unlink: Unlink;


// EXPORTS //

export = unlink;
