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
import { Collection } from '@stdlib/types/object';

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
	* Stream constructor for generating a readable stream from an array-like object.
	*
	* @param N - number of values to stream
	* @param buffer - source value
	* @param stride - stride length
	* @param offset - starting index
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to strings (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before pausing streaming
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.serialize - custom serialization function
	* @throws first argument must be a nonnegative integer
	* @throws third argument must be an integer
	* @throws fourth argument must be a nonnegative integer
	* @throws linear index cannot exceed array bounds
	* @throws options argument must be an object
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var randu = require( `@stdlib/random/base/randu` );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var StridedArrayStream = stridedArrayStream;
	* var stream = new StridedArrayStream( arr.length, arr, 1, 0 );
	*
	* stream.pipe( inspectStream( log ) );
	*/
	new( N: number, buffer: Collection, stride: number, offset: number, options?: Options ): Readable; // newable

	/**
	* Stream constructor for generating a readable stream from an array-like object.
	*
	* @param N - number of values to stream
	* @param buffer - source value
	* @param stride - stride length
	* @param offset - starting index
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to strings (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before pausing streaming
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.serialize - custom serialization function
	* @throws first argument must be a nonnegative integer
	* @throws second argument must be an array-like object
	* @throws third argument must be an integer
	* @throws fourth argument must be a nonnegative integer
	* @throws linear index cannot exceed array bounds
	* @throws options argument must be an object
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var randu = require( `@stdlib/random/base/randu` );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var stream = stridedArrayStream( arr.length, arr, 1, 0 );
	*
	* stream.pipe( inspectStream( log ) );
	*/
	( N: number, buffer: Collection, stride: number, offset: number, options?: Options ): Readable; // callable

	/**
	* Returns a function for creating readable streams from strided array-like values.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether a stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before pausing streaming
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.serialize - custom serialization function
	* @returns stream factory
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var randu = require( `@stdlib/random/base/randu` );
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = stridedArrayStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( arr.length, arr, 1, 0 ) );
	* }
	*/
	factory( options?: Options ): ( N: number, buffer: Collection, stride: number, offset: number ) => Readable; // tslint-disable-line max-line-length

	/**
	* Returns an "objectMode" readable stream from an array-like value.
	*
	* @param N - number of values to stream
	* @param buffer - source value
	* @param stride - stride length
	* @param offset - starting index
	* @param options - stream options
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the maximum number of objects to store in an internal buffer before pausing streaming
	* @throws first argument must be a nonnegative integer
	* @throws second argument must be an array-like object
	* @throws third argument must be an integer
	* @throws fourth argument must be a nonnegative integer
	* @throws options argument must be an object
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var randu = require( `@stdlib/random/base/randu` );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var stream = stridedArrayStream.objectMode( arr.length, arr, 1, 0 );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	objectMode( N: number, buffer: Collection, stride: number, offset: number, options?: Options ): Readable; // tslint-disable-line max-line-length
}

/**
* Creates a readable stream from a strided array-like object.
*
* @param N - number of values to stream
* @param buffer - source value
* @param stride - stride length
* @param offset - starting index
* @param options - stream options
* @throws must provide valid options
* @returns stream instance
*
* @example
* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
* var Float64Array = require( `@stdlib/array/float64` );
* var randu = require( `@stdlib/random/base/randu` );
*
* function log( chunk ) {
*    console.log( chunk.toString() );
* }
*
* var arr = new Float64Array( 10 );
* var i;
* for ( i = 0; i < arr.length; i++ ) {
*     arr[ i ] = randu();
* }
*
* var StridedArrayStream = stridedArrayStream;
* var stream = new StridedArrayStream( arr.length, arr, 1, 0 );
*
* stream.pipe( inspectStream( log ) );
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var randu = require( `@stdlib/random/base/randu` );
*
* var arr = new Float64Array( 10 );
* var i;
* for ( i = 0; i < arr.length; i++ ) {
*     arr[ i ] = randu();
* }
*
* var opts = {
*     'sep': ',',
*     'objectMode': false,
*     'encoding': 'utf8',
*     'highWaterMark': 64
* };
*
* var createStream = stridedArrayStream.factory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* for ( i = 0; i < 10; i++ ) {
*     streams.push( createStream( arr.length, arr, 1, 0 ) );
* }
*
* @example
* var inspectStream = require( `@stdlib/streams/node/inspect-sink` );
* var Float64Array = require( `@stdlib/array/float64` );
* var randu = require( `@stdlib/random/base/randu` );
*
* function log( v ) {
*    console.log( v );
* }
*
* var arr = new Float64Array( 10 );
* var i;
* for ( i = 0; i < arr.length; i++ ) {
*     arr[ i ] = randu();
* }
*
* var stream = stridedArrayStream.objectMode( arr.length, arr, 1, 0 );
*
* stream.pipe( inspectStream.objectMode( log ) );
*/
declare var stridedArrayStream: Constructor;


// EXPORTS //

export = stridedArrayStream;
