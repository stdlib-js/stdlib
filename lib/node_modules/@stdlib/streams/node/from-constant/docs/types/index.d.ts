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

import { Readable } from 'stream';

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
	* Number of iterations.
	*/
	iter?: number;
}

/**
* Interface defining a stream constructor which is both "newable" and "callable".
*/
interface Constructor {
	/**
	* Stream constructor for generating a stream which always streams the same value.
	*
	* @param value - value to stream
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to strings (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before pausing streaming
	* @param options.sep - separator used to join streamed data
	* @param options.iter - number of iterations
	* @throws in binary mode, value to stream must be a string, `Buffer`, or `Uint8Array`
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
	* var opts = {
	*     'iter': 10
	* };
	*
	* var ConstantStream = constantStream;
	* var stream = new ConstantStream( 'beep', opts );
	*
	* stream.pipe( inspectStream( log ) );
	*/
	new( value: any, options?: Options ): Readable; // newable

	/**
	* Stream constructor for generating a stream which always streams the same value.
	*
	* @param value - value to stream
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to strings (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before pausing streaming
	* @param options.sep - separator used to join streamed data
	* @param options.iter - number of iterations
	* @throws in binary mode, value to stream must be a string, `Buffer`, or `Uint8Array`
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
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = constantStream( 'beep', opts );
	*
	* stream.pipe( inspectStream( log )  );
	*/
	( value: any, options?: Options ): Readable; // callable

	/**
	* Returns a function for creating readable streams which always stream the same value.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether a stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before pausing streaming
	* @param options.sep - separator used to join streamed data
	* @param options.iter - number of iterations
	* @returns stream factory
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = constantStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( i.toString() ) );
	* }
	*/
	factory( options?: Options ): ( value: any ) => Readable;

	/**
	* Returns a function for creating readable streams which always stream the same value.
	*
	* @param value - value to stream
	* @param options - stream options
	* @param options.objectMode - specifies whether a stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before pausing streaming
	* @param options.sep - separator used to join streamed data
	* @param options.iter - number of iterations
	* @returns stream factory
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = constantStream.factory( 'beep', opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*/
	factory( value: any, options?: Options ): () => Readable;

	/**
	* Returns an "objectMode" readable stream which always streams the same value.
	*
	* @param value - value to stream
	* @param options - stream options
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the maximum number of objects to store in an internal buffer before pausing streaming
	* @param options.iter - number of iterations
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
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
	* var stream = constantStream.objectMode( 3.14, opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	objectMode( value: any, options?: Options ): Readable;
}

/**
* Returns a readable stream which always streams the same value.
*
* @param value - value to stream
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
* var opts = {
*     'iter': 10
* };
*
* var ConstantStream = constantStream;
* var stream = new ConstantStream( 'beep', opts );
*
* stream.pipe( inspectStream( log ) );
*
* @example
* var opts = {
*     'sep': ',',
*     'objectMode': false,
*     'encoding': 'utf8',
*     'highWaterMark': 64
* };
*
* var createStream = constantStream.factory( 'beep', opts );
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
* var opts = {
*     'iter': 10
* };
*
* var stream = constantStream.objectMode( 3.14, opts );
*
* stream.pipe( inspectStream.objectMode( log ) );
*/
declare var constantStream: Constructor;


// EXPORTS //

export = constantStream;
