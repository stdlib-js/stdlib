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

import { Transform } from 'stream';

/**
* Interface defining stream options.
*/
interface Options {
	/**
	* Callback to invoke upon receiving a new chunk.
	*/
	transform?: Function;

	/**
	* Callback to invoke after receiving all chunks and prior to the stream closing.
	*/
	flush?: Function;

	/**
	* Specifies whether a stream should operate in object mode (default: `false`).
	*/
	objectMode?: boolean;

	/**
	* Specifies how `Buffer` objects should be decoded to strings (default: `null`).
	*/
	encoding?: string | null;

	/**
	* Specifies the `Buffer` level for when `write()` starts returning `false`.
	*/
	highWaterMark?: number;

	/**
	* Specifies whether the stream should remain open even if one side ends (default: `false`).
	*/
	allowHalfOpen?: boolean;

	/**
	* Specifies whether to decode `strings` into `Buffer` objects when writing (default: `true`).
	*/
	decodeStrings?: boolean;
}

/**
* Interface defining a stream constructor which is both "newable" and "callable".
*/
interface Constructor {
	/**
	* Transform stream constructor.
	*
	* @param options - stream options
	* @param options.transform - callback to invoke upon receiving a new chunk
	* @param options.flush - callback to invoke after receiving all chunks and prior to the stream closing
	* @param options.objectMode - specifies whether stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.allowHalfOpen - specifies whether the stream should remain open even if one side ends (default: false)
	* @param options.decodeStrings - specifies whether to decode `strings` into `Buffer` objects when writing (default: true)
	* @throws must provide valid options
	* @returns transform stream
	*
	* @example
	* var stdout = require( `@stdlib/streams/node/stdout` );
	*
	* function transform( chunk, enc, clbk ) {
	*     clbk( null, chunk.toString()+'\n' );
	* }
	*
	* var opts = {
	*     'transform': transform
	* };
	* var TransformStream = transformStream;
	* var stream = new TransformStream( opts );
	*
	* stream.pipe( stdout );
	*
	* stream.write( '1' );
	* stream.write( '2' );
	* stream.write( '3' );
	*
	* stream.end();
	*
	* // prints: '1\n2\n3\n'
	*/
	new( options?: Options ): Transform; // newable

	/**
	* Transform stream constructor.
	*
	* @param options - stream options
	* @param options.transform - callback to invoke upon receiving a new chunk
	* @param options.flush - callback to invoke after receiving all chunks and prior to the stream closing
	* @param options.objectMode - specifies whether stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.allowHalfOpen - specifies whether the stream should remain open even if one side ends (default: false)
	* @param options.decodeStrings - specifies whether to decode `strings` into `Buffer` objects when writing (default: true)
	* @throws must provide valid options
	* @returns transform stream
	*
	* @example
	* var stdout = require( `@stdlib/streams/node/stdout` );
	*
	* function transform( chunk, enc, clbk ) {
	*     clbk( null, chunk.toString()+'\n' );
	* }
	*
	* var opts = {
	*     'transform': transform
	* };
	* var stream = transformStream( opts );
	*
	* stream.pipe( stdout );
	*
	* stream.write( '1' );
	* stream.write( '2' );
	* stream.write( '3' );
	*
	* stream.end();
	*
	* // prints: '1\n2\n3\n'
	*/
	( options?: Options ): Transform; // callable

	/**
	* Creates a reusable transform stream factory.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether a stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.allowHalfOpen - specifies whether the stream should remain open even if one side ends (default: false)
	* @param options.decodeStrings - specifies whether to decode `strings` into `Buffer` objects when writing (default: true)
	* @returns transform stream factory
	*
	* @example
	* function transform( chunk, enc, clbk ) {
	*     clbk( null, chunk.toString()+'\n' );
	* }
	*
	* var opts = {
	*     'objectMode': true,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64,
	*     'decodeStrings': false
	* };
	*
	* var factory = transformStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory( transform ) );
	* }
	*/
	factory( options?: Options ): () => Transform;

	/**
	* Returns a transform stream with `objectMode` set to `true`.
	*
	* @param options - stream options
	* @param options.transform - callback to invoke upon receiving a new chunk
	* @param options.flush - callback to invoke after receiving all chunks and prior to the stream closing
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.allowHalfOpen - specifies whether the stream should remain open even if one side ends (default: false)
	* @param options.decodeStrings - specifies whether to decode `strings` into `Buffer` objects when writing (default: true)
	* @throws must provide valid options
	* @returns transform stream
	*
	* @example
	* var stdout = require( `@stdlib/streams/node/stdout` );
	*
	* function stringify( chunk, enc, clbk ) {
	*     clbk( null, JSON.stringify( chunk ) );
	* }
	*
	* function newline( chunk, enc, clbk ) {
	*     clbk( null, chunk+'\n' );
	* }
	*
	* var s1 = transformStream.objectMode({
	*     'transform': stringify
	* });
	*
	* var s2 = transformStream.objectMode({
	*     'transform': newline
	* });
	*
	* s1.pipe( s2 ).pipe( stdout );
	*
	* s1.write( {'value': 'a'} );
	* s1.write( {'value': 'b'} );
	* s1.write( {'value': 'c'} );
	*
	* s1.end();
	*
	* // prints: '{"value":"a"}\n{"value":"b"}\n{"value":"c"}\n'
	*/
	objectMode( options?: Options ): Transform;
}

/**
* Returns a transform stream.
*
* @param options - stream options
* @throws must provide valid options
* @returns stream instance
*
* @example
* var stdout = require( `@stdlib/streams/node/stdout` );
*
* function transform( chunk, enc, clbk ) {
*     clbk( null, chunk.toString()+'\n' );
* }
*
* var opts = {
*     'transform': transform
* };
* var TransformStream = transformStream;
* var stream = new TransformStream( opts );
*
* stream.pipe( stdout );
*
* stream.write( '1' );
* stream.write( '2' );
* stream.write( '3' );
*
* stream.end();
*
* // prints: '1\n2\n3\n'
*
* @example
* var stdout = require( `@stdlib/streams/node/stdout` );
*
* function transform( chunk, enc, clbk ) {
*     clbk( null, chunk.toString()+'\n' );
* }
*
* var opts = {
*     'transform': transform
* };
* var stream = transformStream( opts );
*
* stream.pipe( stdout );
*
* stream.write( '1' );
* stream.write( '2' );
* stream.write( '3' );
*
* stream.end();
*
* // prints: '1\n2\n3\n'
*
* @example
* function transform( chunk, enc, clbk ) {
*     clbk( null, chunk.toString()+'\n' );
* }
*
* var opts = {
*     'objectMode': true,
*     'encoding': 'utf8',
*     'highWaterMark': 64,
*     'decodeStrings': false
* };
*
* var factory = transformStream.factory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( factory( transform ) );
* }
*
* @example
* var stdout = require( `@stdlib/streams/node/stdout` );
*
* function stringify( chunk, enc, clbk ) {
*     clbk( null, JSON.stringify( chunk ) );
* }
*
* function newline( chunk, enc, clbk ) {
*     clbk( null, chunk+'\n' );
* }
*
* var s1 = transformStream.objectMode({
*     'transform': stringify
* });
*
* var s2 = transformStream.objectMode({
*     'transform': newline
* });
*
* s1.pipe( s2 ).pipe( stdout );
*
* s1.write( {'value': 'a'} );
* s1.write( {'value': 'b'} );
* s1.write( {'value': 'c'} );
*
* s1.end();
*
* // prints: '{"value":"a"}\n{"value":"b"}\n{"value":"c"}\n'
*/
declare var transformStream: Constructor;


// EXPORTS //

export = transformStream;
