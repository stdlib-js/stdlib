/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/// <reference types = 'node'/>

import { Buffer } from 'buffer';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Encoding (default: null).
	*/
	encoding?: string | null;

	/**
	* Flag (default: 'a').
	*/
	flag?: string;

	/**
	* Mode (default: 0o666)
	*/
	mode?: number;
}

/**
* Callback invoked upon writing data to a file.
*
* @param err - error object
*/
type Callback = ( err: Error | null ) => void;

/**
* Interface for appending a file.
*/
interface AppendFile {
	/**
	* Asynchronously appends data to a file.
	*
	* @param path - file path or file descriptor
	* @param data - data to append
	* @param options - options (if a string, the value is the encoding)
	* @param clbk - callback to invoke after appending data to a file
	*
	* @example
	* function onAppend( err ) {
	*     if ( err ) {
	*         console.log( err.message );
	*     }
	* }
	*
	* var opts = { 'flag': 'r' };
	* appendFile( './beep/boop.txt', 'beep boop\n', opts, onAppend );
	*/
	( path: string | Buffer | number, data: string | Buffer, options: Options | string, clbk: Callback ): void;

	/**
	* Asynchronously appends data to a file.
	*
	* @param path - file path or file descriptor
	* @param data - data to append
	* @param clbk - callback to invoke after appending data to a file
	*
	* @example
	* function onAppend( err ) {
	*     if ( err ) {
	*         console.log( err.message );
	*     }
	* }
	*
	* appendFile( './beep/boop.txt', 'beep boop\n', onAppend );
	*/
	( path: string | Buffer | number, data: string | Buffer, clbk: Callback ): void;

	/**
	* Synchronously appends data to a file.
	*
	* @param path - file path or file descriptor
	* @param data - data to append
	* @param options - options (if a string, the value is the encoding)
	* @returns error object or null
	*
	* @example
	* var err = appendFileSync( './beep/boop.txt', 'data to append\n' );
	* if ( err instanceof Error ) {
	*     throw err;
	* }
	*/
	sync( path: string | Buffer | number, data: string | Buffer, options?: Options | string ): Error | null;
}

/**
* Asynchronously appends data to a file.
*
* @param path - file path or file descriptor
* @param data - data to append
* @param options - options (if a string, the value is the encoding)
* @param clbk - callback to invoke after appending data to a file
*
* @example
* function onAppend( err ) {
*     if ( err ) {
*         console.log( err.message );
*     }
* }
*
* appendFile( './beep/boop.txt', 'beep boop\n', onAppend );
*/
declare var appendFile: AppendFile;


// EXPORTS //

export = appendFile;
