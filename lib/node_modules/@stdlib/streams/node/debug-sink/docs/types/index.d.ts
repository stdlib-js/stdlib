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

// TypeScript Version: 2.0

/// <reference types="node"/>

import { Writable } from 'stream';

/**
* Interface defining stream options.
*/
interface Options {
	/**
	* Debug namespace.
	*/
	name?: string;

	/**
	* Specifies whether a stream should operate in object mode (default: `false`).
	*/
	objectMode?: boolean;

	/**
	* Specifies the `Buffer` level for when `write()` starts returning `false`.
	*/
	highWaterMark?: number;

	/**
	* Specifies whether to encode strings as `Buffer` objects before writing data to a returned stream (default: true).
	*/
	decodeStrings?: boolean;

	/**
	* Default encoding when not explicitly specified when writing data (default: 'utf-8').
	*/
	defaultEncoding?: string;
}

/**
* Callback function invoked upon receiving data.
*/
type Nullary = () => void;

/**
* Callback function invoked upon receiving data.
*
* @param debug - logging function
* @param chunk - data chunk
*/
type Unary = ( debug: Function ) => void;

/**
* Callback function invoked upon receiving data.
*
* @param debug - logging function
* @param chunk - data chunk
* @param idx - chunk index
*/
type Binary = ( debug: Function, chunk: any ) => void;

/**
* Callback function invoked upon receiving data.
*
* @param debug - logging function
* @param chunk - data chunk
* @param idx - chunk index
*/
type Tertiary = ( debug: Function, chunk: any, idx: number ) => void;

/**
* Callback function invoked upon receiving data.
*
* @param debug - logging function
* @param chunk - data chunk
* @param idx - chunk index
*/
type Callback = Nullary | Unary | Binary | Tertiary;

/**
* Interface defining a stream constructor which is both "newable" and "callable".
*/
interface Constructor {
	/**
	* Debug stream constructor.
	*
	* @param options - stream options
	* @param options.name - debug namespace
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.decodeStrings=true - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream
	* @param options.defaultEncoding - default encoding when not explicitly specified when writing data (default: 'utf-8')
	* @param clbk - callback to invoke upon receiving data
	* @throws must provide valid options
	* @returns debug stream
	*
	* @example
	* var DebugSinkStream = debugSinkStream;
	* var stream = new DebugSinkStream({
	*     'name': 'my-stream'
	* });
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	* stream.end();
	*/
	new( options: Options, clbk?: Callback ): Writable; // newable

	/**
	* Debug stream constructor.
	*
	* @param clbk - callback to invoke upon receiving data
	* @returns debug stream
	*
	* @example
	* var DebugSinkStream = debugSinkStream;
	* var stream = new DebugSinkStream();
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	* stream.end();
	*/
	new( clbk?: Callback ): Writable; // newable

	/**
	* Debug stream constructor.
	*
	* @param options - stream options
	* @param options.name - debug namespace
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.decodeStrings - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream (default: true)
	* @param options.defaultEncoding - default encoding when not explicitly specified when writing data (default: 'utf-8')
	* @param clbk - callback to invoke upon receiving data
	* @throws must provide valid options
	* @returns debug stream
	*
	* @example
	* var stream = debugSinkStream({
	*     'name': 'my-stream'
	* });
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	* stream.end();
	*/
	( options: Options, clbk?: Callback ): Writable; // callable

	/**
	* Debug stream constructor.
	*
	* @param clbk - callback to invoke upon receiving data
	* @returns debug stream
	*
	* @example
	* var stream = debugSinkStream();
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	* stream.end();
	*/
	( clbk?: Callback ): Writable; // callable

	/**
	* Creates a reusable debug stream factory.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.decodeStrings - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream (default: true)
	* @param options.defaultEncoding - default encoding when not explicitly specified when writing data (default: 'utf-8')
	* @throws options argument must be an object
	* @returns debug stream factory
	*
	* @example
	* var opts = {
	*     'objectMode': true,
	*     'highWaterMark': 64
	* };
	*
	* var factory = debugSinkStream.factory( opts );
	*
	* // Assign each stream to a separate debug namespace...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory( 'stream '+i ) );
	* }
	*/
	factory( options?: Options ): ( name: string, clbk?: Callback ) => Writable;

	/**
	* Returns a debug stream with `objectMode` set to `true`.
	*
	* @param options - stream options
	* @param options.name - debug namespace
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.decodeStrings - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream (default: true)
	* @param options.defaultEncoding - default encoding when not explicitly specified when writing data (default: 'utf-8')
	* @param clbk - callback to invoke upon receiving data
	* @throws must provide valid options
	* @returns debug stream
	*
	* @example
	* var stream = debugSinkStream.objectMode({
	*     'name': 'my-stream'
	* });
	*
	* stream.write( {'value': 'a'} );
	* stream.write( {'value': 'b'} );
	* stream.write( {'value': 'c'} );
	* stream.end();
	*/
	objectMode( options: Options, clbk?: Callback ): Writable;

	/**
	* Returns a debug stream with `objectMode` set to `true`.
	*
	* @param clbk - callback to invoke upon receiving data
	* @returns debug stream
	*
	* @example
	* var stream = debugSinkStream.objectMode();
	*
	* stream.write( {'value': 'a'} );
	* stream.write( {'value': 'b'} );
	* stream.write( {'value': 'c'} );
	* stream.end();
	*/
	objectMode( clbk?: Callback ): Writable;
}

/**
* Returns an debug sink stream.
*
* @param options - stream options
* @throws must provide valid options
* @returns stream instance
*
* @example
* var DebugSinkStream = debugSinkStream;
* var stream = new DebugSinkStream({
*     'name': 'my-stream'
* });
*
* stream.write( 'a' );
* stream.write( 'b' );
* stream.write( 'c' );
* stream.end();
*
* @example
* var opts = {
*     'objectMode': true,
*     'highWaterMark': 64
* };
*
* var factory = debugSinkStream.factory( opts );
*
* // Assign each stream to a separate debug namespace...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( factory( 'stream '+i ) );
* }
* @example
* var stream = debugSinkStream.objectMode({
*     'name': 'my-stream'
* });
*
* stream.write( {'value': 'a'} );
* stream.write( {'value': 'b'} );
* stream.write( {'value': 'c'} );
* stream.end();
*/
declare var debugSinkStream: Constructor;


// EXPORTS //

export = debugSinkStream;
