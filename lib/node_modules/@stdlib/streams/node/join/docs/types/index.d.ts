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
	* Separator used to join streamed data (default: `'\n'`).
	*/
	sep?: string;

	/**
	* Specifies whether the stream should remain open even if one side ends (default: `false`).
	*/
	allowHalfOpen?: boolean;

	/**
	* Specifies whether the readable side should be in object mode (default: `false`).
	*/
	readableObjectMode?: boolean;
}

/**
* Interface defining a stream constructor which is both "newable" and "callable".
*/
interface Constructor {
	/**
	* Join stream constructor.
	*
	* @param options - stream options
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.allowHalfOpen - specifies whether the stream should remain open even if one side ends (default: false)
	* @param options.readableObjectMode - specifies whether the readable side should be in object mode (default: false)
	* @throws must provide valid options
	* @returns join stream
	*
	* @example
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	*
	* function log( chunk ) {
	*    console.log( chunk );
	* }
	*
	* var JoinStream = joinStream;
	* var stream = new JoinStream();
	*
	* stream.pipe( inspectStream( log )  );
	*
	* stream.write( '1' );
	* stream.write( '2' );
	* stream.write( '3' );
	*
	* stream.end();
	*
	* // prints: '1\n2\n3'
	*/
	new( options?: Options ): Transform; // newable

	/**
	* Join stream constructor.
	*
	* @param options - stream options
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.allowHalfOpen - specifies whether the stream should remain open even if one side ends (default: false)
	* @param options.readableObjectMode - specifies whether the readable side should be in object mode (default: false)
	* @throws must provide valid options
	* @returns join stream
	*
	* @example
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	*
	* function log( chunk ) {
	*    console.log( chunk );
	* }
	*
	* var stream = joinStream();
	*
	* stream.pipe( inspectStream( log )  );
	*
	* stream.write( '1' );
	* stream.write( '2' );
	* stream.write( '3' );
	*
	* stream.end();
	*
	* // prints: '1\n2\n3'
	*/
	( options?: Options ): Transform; // callable

	/**
	* Creates a reusable join stream factory.
	*
	* @param options - stream options
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.objectMode - specifies whether a stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.allowHalfOpen - specifies whether the stream should remain open even if one side ends (default: false)
	* @param options.readableObjectMode - specifies whether the readable side should be in object mode (default: false)
	* @returns join stream factory
	*
	* @example
	* var opts = {
	*     'sep': '\t',
	*     'objectMode': true,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var factory = joinStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory() );
	* }
	*/
	factory( options?: Options ): () => Transform;

	/**
	* Returns a join stream with `objectMode` set to `true`.
	*
	* @param options - stream options
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.allowHalfOpen - specifies whether the stream should remain open even if one side ends (default: false)
	* @param options.readableObjectMode - specifies whether the readable side should be in object mode (default: false)
	* @throws must provide valid options
	* @returns join stream
	*
	* @example
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	*
	* function log( chunk ) {
	*     console.log( chunk.toString() );
	* }
	*
	* var stream = joinStream.objectMode({
	*     'sep': ','
	* });
	*
	* stream.pipe( inspectStream( log ) );
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	*
	* stream.end();
	*
	* // prints: 'a,b,c'
	*/
	objectMode( options?: Options ): Transform;
}

/**
* Returns a join stream.
*
* @param options - stream options
* @throws must provide valid options
* @returns stream instance
*
* @example
* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
*
* function log( chunk ) {
*    console.log( chunk );
* }
*
* var JoinStream = joinStream;
* var stream = new JoinStream();
*
* stream.pipe( inspectStream( log )  );
*
* stream.write( '1' );
* stream.write( '2' );
* stream.write( '3' );
*
* stream.end();
*
* // prints: '1\n2\n3'
*
* @example
* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
*
* function log( chunk ) {
*    console.log( chunk );
* }
*
* var stream = joinStream();
*
* stream.pipe( inspectStream( log )  );
*
* stream.write( '1' );
* stream.write( '2' );
* stream.write( '3' );
*
* stream.end();
*
* // prints: '1\n2\n3';
*
* @example
* var opts = {
*     'sep': '\t',
*     'objectMode': true,
*     'encoding': 'utf8',
*     'highWaterMark': 64
* };
*
* var factory = joinStream.factory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( factory() );
* }
*
* @example
* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
*
* function log( chunk ) {
*     console.log( chunk.toString() );
* }
*
* var stream = joinStream.objectMode({
*     'sep': ','
* });
*
* stream.pipe( inspectStream( log ) );
*
* stream.write( 'a' );
* stream.write( 'b' );
* stream.write( 'c' );
*
* stream.end();
*
* // prints: 'a,b,c'
*/
declare var joinStream: Constructor;


// EXPORTS //

export = joinStream;
