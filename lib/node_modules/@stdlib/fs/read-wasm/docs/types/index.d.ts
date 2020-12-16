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
	* Flag (default: 'r').
	*/
	flag?: string;
}

/**
* Callback invoked upon reading a file.
*
* @param err - error object
* @param file - file contents
*/
type Callback = ( err: Error | null, file: Uint8Array ) => void;

/**
* Interface for reading a file as WebAssembly.
*/
interface ReadWASM {
	/**
	* Reads the entire contents of a WebAssembly file.
	*
	* @param file - file path or file descriptor
	* @param options - options
	* @param options.flag - file status flag
	* @param clbk - callback to invoke after reading a file
	*
	* @example
	* var join = require( `path` ).join;
	* var instanceOf = require( `@stdlib/assert/instance-of` );
	*
	* var fpath = join( __dirname, 'foo.wasm' );
	* readWASM( fpath, onRead );
	*
	* function onRead( error, buf ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( buf );
	* }
	*/
	( file: string | Buffer | number, options: Options, clbk: Callback ): void;

	/**
	* Reads the entire contents of a WebAssembly file.
	*
	* @param file - file path or file descriptor
	* @param clbk - callback to invoke after reading a file
	*
	* @example
	* var join = require( `path` ).join;
	* var instanceOf = require( `@stdlib/assert/instance-of` );
	*
	* var fpath = join( __dirname, 'foo.wasm' );
	* readWASM( fpath, onRead );
	*
	* function onRead( error, buf ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( buf );
	* }
	*/
	( file: string | Buffer | number, clbk: Callback ): void;

	/**
	* Synchronously reads the entire contents of a WebAssembly file.
	*
	* @param file - file path or file descriptor
	* @param options - options
	* @param options.flag - file status flag
	* @returns file contents or an error
	*
	* @example
	* var join = require( `path` ).join;
	* var instanceOf = require( `@stdlib/assert/instance-of` );
	*
	* var fpath = join( __dirname, 'foo.wasm' );
	* var out = readWASM.sync( fpath );
	* if ( instanceOf( out, Error ) ) {
	*     throw out;
	* }
	* console.log( out );
	*/
	sync( file: string | Buffer | number, options?: Options ): Uint8Array | Error; // tslint-disable-line max-line-length
}

/**
* Reads the entire contents of a WebAssembly file.
*
* @param file - file path or file descriptor
* @param options - options
* @param options.flag - file status flag
* @param clbk - callback to invoke after reading a file
*
* @example
* var join = require( `path` ).join;
* var instanceOf = require( `@stdlib/assert/instance-of` );
*
* var fpath = join( __dirname, 'foo.wasm' );
* readWASM( fpath, onRead );
*
* function onRead( error, buf ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( buf );
* }
*
* @example
* var join = require( `path` ).join;
* var instanceOf = require( `@stdlib/assert/instance-of` );
*
* var fpath = join( __dirname, 'foo.wasm' );
* var out = readWASM.sync( fpath );
* if ( instanceOf( out, Error ) ) {
*     throw out;
* }
* console.log( out );
*/
declare var readWASM: ReadWASM;


// EXPORTS //

export = readWASM;
