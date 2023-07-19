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
import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

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
	* Specifies the maximum number of bytes to store in an internal buffer before pausing streaming.
	*/
	highWaterMark?: number;

	/**
	* Separator used to join streamed data (default: `'\n'`).
	*/
	sep?: string;

	/**
	* Custom serialization function.
	*/
	serialize?: Function;
}

/**
* Interface defining a stream constructor which is both "newable" and "callable".
*/
interface Constructor {
	/**
	* Stream constructor for generating a readable stream from an iterator.
	*
	* @param iterator - source iterator
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to strings (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before pausing iteration
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.serialize - custom serialization function
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	* var randu = require( `@stdlib/random/iter/randu` );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var IteratorStream = iteratorStream;
	* var stream = new IteratorStream( randu( opts ) );
	*
	* stream.pipe( inspectStream( log ) );
	*/
	new( iterator: Iterator, options?: Options ): Readable; // newable

	/**
	* Stream constructor for generating a readable stream from an iterator.
	*
	* @param iterator - source iterator
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to strings (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before pausing iteration
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.serialize - custom serialization function
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	* var randu = require( `@stdlib/random/iter/randu` );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = iteratorStream( randu( opts ) );
	*
	* stream.pipe( inspectStream( log )  );
	*/
	( iterator: Iterator, options?: Options ): Readable; // callable

	/**
	* Returns a function for creating readable streams from iterators.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether a stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before pausing iteration
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.serialize - custom serialization function
	* @returns stream factory
	*
	* @example
	* var randu = require( `@stdlib/random/iter/randu` );
	*
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = iteratorStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( randu() ) );
	* }
	*/
	factory( options?: Options ): ( iterator: Iterator ) => Readable;

	/**
	* Returns an "objectMode" readable stream from an iterator.
	*
	* @param iterator - source iterator
	* @param options - stream options
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the maximum number of objects to store in an internal buffer before pausing iteration
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var randu = require( `@stdlib/random/iter/randu` );
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = iteratorStream.objectMode( randu( opts ) );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	objectMode( iterator: Iterator, options?: Options ): Readable;
}

/**
* Creates a readable stream from an iterator.
*
* @param iterator - source iterator
* @param options - stream options
* @throws must provide valid options
* @returns stream instance
*
* @example
* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
* var randu = require( `@stdlib/random/iter/randu` );
*
* function log( chunk ) {
*    console.log( chunk.toString() );
* }
*
* var opts = {
*     'iter': 10
* };
*
* var IteratorStream = iteratorStream;
* var stream = new IteratorStream( randu( opts ) );
*
* stream.pipe( inspectStream( log ) );
*
* @example
* var randu = require( `@stdlib/random/iter/randu` );
*
* var opts = {
*     'sep': ',',
*     'objectMode': false,
*     'encoding': 'utf8',
*     'highWaterMark': 64
* };
*
* var createStream = iteratorStream.factory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( createStream( randu() ) );
* }
*
* @example
* var randu = require( `@stdlib/random/iter/randu` );
* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
*
* function log( v ) {
*    console.log( v );
* }
*
* var opts = {
*     'iter': 10
* };
*
* var stream = iteratorStream.objectMode( randu( opts ) );
*
* stream.pipe( inspectStream.objectMode( log ) );
*/
declare var iteratorStream: Constructor;


// EXPORTS //

export = iteratorStream;
