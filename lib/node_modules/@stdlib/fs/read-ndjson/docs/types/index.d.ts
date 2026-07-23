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

/// <reference types="node"/>

import { Buffer } from 'buffer';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Encoding. If the encoding option is set to `utf8` and the file has a UTF-8 byte order mark (BOM), the byte order mark is *removed* before attempting to parse as newline-delimited JSON (default: null).
	*/
	encoding?: string | null;

	/**
	* Flag (default: 'r').
	*/
	flag?: string;

	/**
	* JSON transformation function.
	*/
	reviver?: Reviver;
}

/**
* JSON transformation function.
*
* @param key - key name
* @param value - corresponding value
* @returns updated value
*/
type Reviver = ( key: string, value: any ) => any;

/**
* Callback invoked upon reading a file.
*
* @param err - error object
* @param data - file contents
*/
type Callback<T> = ( err: Error | null, data: Array<T> ) => void;

/**
* Interface for reading a file as newline-delimited JSON.
*/
interface ReadNDJSON {
	/**
	* Asynchronously reads a file as newline-delimited JSON.
	*
	* @param file - file path or file descriptor
	* @param options - options
	* @param options.encoding - file encoding
	* @param options.flag - file status flag
	* @param options.reviver - JSON reviver
	* @param clbk - callback
	*
	* @example
	* var resolve = require( 'path' ).resolve;
	*
	* readNDJSON( resolve( __dirname, '..', 'examples', 'fixtures', 'file.ndjson' ), 'utf-8', clbk );
	*
	* function clbk( error, data ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( data );
	* }
	*/
	<T = unknown>( file: string | Buffer | number, options: Options | string, clbk: Callback<T> ): void;

	/**
	* Asynchronously reads a file as newline-delimited newline-delimited JSON.
	*
	* @param file - file path or file descriptor
	* @param clbk - callback
	*
	* @example
	* var resolve = require( 'path' ).resolve;
	*
	* readNDJSON( resolve( __dirname, '..', 'examples', 'fixtures', 'file.ndjson' ), clbk );
	*
	* function clbk( error, data ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( data );
	* }
	*/
	<T = unknown>( file: string | Buffer | number, clbk: Callback<T> ): void;

	/**
	* Synchronously reads a file as newline-delimited JSON.
	*
	* @param file - file path or file descriptor
	* @param options - options
	* @param options.encoding - file encoding
	* @param options.flag - file status flag
	* @param options.reviver - JSON reviver
	* @returns an array of results or an error
	*
	* @example
	* var resolve = require( 'path' ).resolve;
	* var instanceOf = require( '@stdlib/assert/instance-of' );
	*
	* var out = readNDJSON.sync( resolve( __dirname, '..', 'examples', 'fixtures', 'file.ndjson' ) );
	* if ( instanceOf( out, Error ) ) {
	*     throw out;
	* }
	* console.log( out );
	*/
	sync<T = unknown>( file: string | Buffer | number, options?: Options | string ): Array<T> | Error;
}

/**
* Asynchronously reads a file as newline-delimited JSON.
*
* @param file - file path or file descriptor
* @param options - options
* @param options.encoding - file encoding
* @param options.flag - file status flag
* @param options.reviver - JSON reviver
* @param clbk - callback
*
* @example
* var resolve = require( 'path' ).resolve;
*
* readNDJSON( resolve( __dirname, '..', 'examples', 'fixtures', 'file.ndjson' ), 'utf-8', clbk );
*
* function clbk( error, data ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( data );
* }
*
* @example
* var resolve = require( 'path' ).resolve;
* var instanceOf = require( '@stdlib/assert/instance-of' );
*
* var out = readNDJSON.sync( resolve( __dirname, '..', 'examples', 'fixtures', 'file.ndjson' ) );
* if ( instanceOf( out, Error ) ) {
*     throw out;
* }
* console.log( out );
*/
declare var readNDJSON: ReadNDJSON;


// EXPORTS //

export = readNDJSON;
