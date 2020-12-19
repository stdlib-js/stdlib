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
* Interface defining function options.
*/
interface Options {
	/**
	* Encoding (default: null).
	*/
	encoding?: string | null;

	/**
	* Flag (default: 'r').
	*/
	flag?: string;
}

/**
* Interface defining a file.
*/
interface File {
	/**
	* File path.
	*/
	file: string;

	/**
	* File contents.
	*/
	data: Buffer | string;
}

/**
* Callback invoked upon reading files.
*
* @param err - error object
* @param files - file objects
*/
type Callback = ( err: Error | null, files: Array<File> ) => void;

/**
* Interface for reading the entire contents of each file in a file list.
*/
interface ReadFileList {
	/**
	* Asynchronously reads the entire contents of each file in a file list.
	*
	* @param list - list of file paths
	* @param options - options
	* @param options.encoding - file encoding
	* @param options.flag - file status flag
	* @param clbk - callback to invoke after reading file contents
	*
	* @example
	* var list = [ __filename ];
	*
	* readFileList( list, onFiles );
	*
	* function onFiles( error, files ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.dir( files );
	* }
	*/
	( list: Array<string>, options: Options | string, clbk: Callback ): void;

	/**
	* Asynchronously reads the entire contents of each file in a file list.
	*
	* @param list - list of file paths
	* @param clbk - callback to invoke after reading file contents
	*
	* @example
	* var list = [ __filename ];
	*
	* readFileList( list, onFiles );
	*
	* function onFiles( error, files ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.dir( files );
	* }
	*/
	( list: Array<string>, clbk: Callback ): void;

	/**
	* Synchronously reads the entire contents of each file in a file list.
	*
	* @param list - list of file paths
	* @param options - options
	* @param options.encoding - file encoding
	* @param options.flag - file status flag
	* @returns file contents
	*
	* @example
	* var list = [ __filename ];
	* var files = readFileList.sync( list );
	*
	* if ( files instanceof Error ) {
	*     throw files;
	* }
	* console.dir( files );
	*/
	sync( list: Array<string>, options?: Options | string ): Array<File> | Error; // tslint-disable-line max-line-length
}

/**
* Asynchronously reads the entire contents of each file in a file list.
*
* @param list - list of file paths
* @param options - options
* @param options.encoding - file encoding
* @param options.flag - file status flag
* @param clbk - callback to invoke after reading file contents
*
* @example
* var list = [ __filename ];
*
* readFileList( list, onFiles );
*
* function onFiles( error, files ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( files );
* }
*
* @example
* var list = [ __filename ];
* var files = readFileList.sync( list );
*
* if ( files instanceof Error ) {
*     throw files;
* }
* console.dir( files );
*/
declare var readFileList: ReadFileList;


// EXPORTS //

export = readFileList;
