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

/// <reference types="node"/>

import { Buffer } from 'buffer';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Encoding; ignored if the data argument is a buffer (default: null).
	*/
	encoding?: string | null;

	/**
	* Flag (default: 'r').
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
* Interface for writing a file.
*/
interface WriteFile {
	/**
	* Asynchronously writes data to a file.
	*
	* @param file - file path or file descriptor
	* @param data - data to write
	* @param options - options; if a string, the value is the encoding
	* @param clbk - callback to invoke after writing data to a file
	*
	* @example
	* function onWrite( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	* }
	*
	* var opts = { 'flag': 'r' };
	* writeFile( './beep/boop.txt', 'beep boop\n', opts, onWrite );
	*/
	( file: string | Buffer | number, data: string | Buffer, options: Options | string, clbk: Callback ): void;

	/**
	* Asynchronously writes data to a file.
	*
	* @param file - file path or file descriptor
	* @param data - data to write
	* @param clbk - callback to invoke after writing data to a file
	*
	* @example
	* function onWrite( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	* }
	*
	* writeFile( './beep/boop.txt', 'beep boop\n', onWrite );
	*/
	( file: string | Buffer | number, data: string | Buffer, clbk: Callback ): void;

	/**
	* Synchronously writes data to a file.
	*
	* @param file - file path or file descriptor
	* @param data - data to write
	* @param options - options; if a string, the value is the encoding
	* @returns error object or null
	*
	* @example
	* var err = writeFileSync( './beep/boop.txt', 'beep boop\n' );
	* if ( err instanceof Error ) {
	*     throw err;
	* }
	*/
	sync( file: string | Buffer | number, data: string | Buffer, options?: Options | string ): Error | null;
}

/**
* Asynchronously writes data to a file.
*
* @param file - file path or file descriptor
* @param data - data to write
* @param options - options; if a string, the value is the encoding
* @param clbk - callback to invoke after writing data to a file
*
* @example
* function onWrite( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* writeFile( './beep/boop.txt', 'beep boop\n', onWrite );
*/
declare var writeFile: WriteFile;


// EXPORTS //

export = writeFile;
