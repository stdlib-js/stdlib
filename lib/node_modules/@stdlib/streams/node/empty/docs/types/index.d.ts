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
/// <reference types="@stdlib/types"/>

import { Readable } from 'stream';

/**
* Interface defining stream options.
*/
interface Options {
	/**
	* Specifies whether a stream should operate in object mode (default: `false`).
	*/
	objectMode?: boolean;
}

/**
* Interface defining a stream constructor which is both "newable" and "callable".
*/
interface Constructor {
	/**
	* Stream constructor for creating an "empty" stream.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @throws must provide valid options
	* @returns Stream instance
	*
	* @example
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var EmptyStream = emptyStream;
	* var stream = new EmptyStream();
	*
	* stream.pipe( inspectStream( log )  );
	*/
	new( options?: Options ): Readable; // newable

	/**
	* Stream constructor for creating an "empty" stream.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @throws must provide valid options
	* @returns Stream instance
	*
	* @example
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var stream = emptyStream();
	*
	* stream.pipe( inspectStream( log )  );
	*/
	( options?: Options ): Readable; // callable

	/**
	* Returns a function for creating "empty" readable streams.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether a stream should operate in object mode (default: false)
	* @returns stream factory
	*
	* @example
	* var opts = {
	*     'objectMode': false
	* };
	*
	* var createStream = emptyStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*/
	factory( options?: Options ): () => Readable;

	/**
	* Returns an "objectMode" empty readable stream.
	*
	* @returns Stream instance
	*
	* @example
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var stream = emptyStream.objectMode();
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	objectMode(): Readable;
}

/**
* Returns an "empty" stream.
*
* @param options - stream options
* @throws must provide valid options
* @returns stream instance
*
* @example
* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
*
* function log( chunk ) {
*    console.log( chunk.toString() );
* }
*
* var EmptyStream = emptyStream;
* var stream = new EmptyStream();
*
* stream.pipe( inspectStream( log )  );
*
* @example
* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
*
* function log( chunk ) {
*    console.log( chunk.toString() );
* }
*
* var stream = emptyStream();
*
* stream.pipe( inspectStream( log )  );
*
* @example
* var opts = {
*     'objectMode': false
* };
*
* var createStream = emptyStream.factory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( createStream() );
* }
*
* @example
* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
*
* function log( v ) {
*    console.log( v );
* }
*
* var stream = emptyStream.objectMode();
*
* stream.pipe( inspectStream.objectMode( log ) );
*/
declare var emptyStream: Constructor;


// EXPORTS //

export = emptyStream;
