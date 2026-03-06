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

// TypeScript Version: 4.1

/// <reference types="node"/>

import { Buffer } from 'buffer';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Encoding. If the encoding option is set to `utf8` and the file has a UTF-8 byte order mark (BOM), the byte order mark is *removed* before attempting to parse as JSON (default: null).
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
type Callback<T> = ( err: Error | null, data: T ) => void;

/**
* Interface for reading a file as JSON.
*/
interface ReadJSON {
	/**
	* Asynchronously reads a file as JSON.
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
	* readJSON( resolve( __dirname, '..', 'package.json' ), 'utf-8', onJSON );
	*
	* function onJSON( error, data ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.dir( data );
	* }
	*/
	<T = unknown>( file: string | Buffer | number, options: Options | string, clbk: Callback<T> ): void;

	/**
	* Asynchronously reads a file as JSON.
	*
	* @param file - file path or file descriptor
	* @param clbk - callback
	*
	* @example
	* var resolve = require( 'path' ).resolve;
	*
	* readJSON( resolve( __dirname, '..', 'package.json' ), onJSON );
	*
	* function onJSON( error, data ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.dir( data );
	* }
	*/
	<T = unknown>( file: string | Buffer | number, clbk: Callback<T> ): void;

	/**
	* Synchronously reads a file as JSON.
	*
	* @param file - file path or file descriptor
	* @param options - options
	* @param options.encoding - file encoding
	* @param options.flag - file status flag
	* @param options.reviver - JSON reviver
	* @returns JSON or an error
	*
	* @example
	* var resolve = require( 'path' ).resolve;
	* var instanceOf = require( '@stdlib/assert/instance-of' );
	*
	* var out = readJSON.sync( resolve( __dirname, '..', 'package.json' ) );
	* if ( instanceOf( out, Error ) ) {
	*     throw out;
	* }
	* console.dir( out );
	*/
	sync<T = unknown>( file: string | Buffer | number, options?: Options | string ): T | Error;
}

/**
* Asynchronously reads a file as JSON.
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
* readJSON( resolve( __dirname, '..', 'package.json' ), 'utf-8', onJSON );
*
* function onJSON( error, data ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( data );
* }
*
* @example
* var resolve = require( 'path' ).resolve;
* var instanceOf = require( '@stdlib/assert/instance-of' );
*
* var out = readJSON.sync( resolve( __dirname, '..', 'package.json' ) );
* if ( instanceOf( out, Error ) ) {
*     throw out;
* }
* console.dir( out );
*/
declare var readJSON: ReadJSON;


// EXPORTS //

export = readJSON;
