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
* Callback invoked after reading the contents of a directory.
*
* @param err - error argument
* @param data - directory contents
*/
type Callback = ( err: Error | null, data: Array<string> ) => void;

/**
* Interface for reading the contents of a directory.
*/
interface ReadDir {
	/**
	* Asynchronously reads the contents of a directory.
	*
	* @param path - directory path
	* @param clbk - callback to invoke after reading directory contents
	*
	* @example
	* function onRead( error, data ) {
	*     if ( error ) {
	*         console.error( error );
	*     } else {
	*         console.log( data );
	*     }
	* }
	* readDir( __dirname, onRead );
	*/
	( path: string | Buffer, clbk: Callback ): void;

	/**
	* Synchronously reads the contents of a directory.
	*
	* @param path - directory path
	* @returns directory contents or an error
	*
	* @example
	* var out = readDir.sync( __dirname );
	* if ( out instanceof Error ) {
	*     throw out;
	* }
	* console.log( out );
	*/
	sync( path: string | Buffer ): Array<string> | Error;
}

/**
* Asynchronously reads the contents of a directory.
*
* @param path - directory path
* @param clbk - callback to invoke after reading directory contents
*
* @example
* function onRead( error, data ) {
*     if ( error ) {
*         console.error( error );
*     } else {
*         console.log( data );
*     }
* }
* readDir( __dirname, onRead );
*
* @example
* var out = readDir.sync( __dirname );
* if ( out instanceof Error ) {
*     throw out;
* }
* console.log( out );
*/
declare var readDir: ReadDir;


// EXPORTS //

export = readDir;
