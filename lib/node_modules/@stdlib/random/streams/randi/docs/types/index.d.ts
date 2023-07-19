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
import * as random from '@stdlib/types/random';

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
	* Specifies the maximum number of bytes to store in an internal buffer before ceasing to generate additional pseudorandom numbers.
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

	/**
	* Name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers (default: 'mt19937').
	*/
	name?: 'mt19937' | 'minstd' | 'minstd-shuffle';

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMT19937;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMT19937;

	/**
	* Specifies whether to copy a provided pseudorandom number generator state (default: `true`).
	*/
	copy?: boolean;

	/**
	* Number of iterations after which to emit the PRNG state.
	*/
	siter?: number;
}

/**
* Class for creating readable streams which generate a stream of pseudorandom numbers having integer values.
*/
declare class RandomStream extends Readable {
	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers having integer values.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @throws must provide a valid state
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
	* var RandomStream = randomStream;
	* var stream = new RandomStream( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*/
	constructor( options?: Options );

	/**
	* Destruction state.
	*/
	private readonly _destroyed: boolean; // tslint:disable-line: variable-name

	/**
	* Flag indicating whether a stream is operating in object mode.
	*/
	private readonly _objectMode: boolean; // tslint:disable-line: variable-name

	/**
	* Data separator.
	*/
	private readonly _sep: string; // tslint:disable-line: variable-name

	/**
	* Total number of iterations.
	*/
	private readonly _iter: number; // tslint:disable-line: variable-name

	/**
	* Number of iterations after which to emit the underlying PRNG state.
	*/
	private readonly _siter: number; // tslint:disable-line: variable-name

	/**
	* Iteration counter.
	*/
	private _i: number; // tslint:disable-line: variable-name

	/**
	* Pseudorandom number generator for generating standard normally distributed pseudorandom numbers.
	*/
	private readonly _prng: random.PRNG; // tslint:disable-line: variable-name

	/**
	* Underlying PRNG.
	*/
	readonly PRNG: random.PRNG;

	/**
	* PRNG seed.
	*/
	readonly seed: random.PRNGSeedMT19937;

	/**
	* PRNG seed length.
	*/
	readonly seedLength: number;

	/**
	* PRNG state.
	*/
	state: random.PRNGStateMT19937;

	/**
	* PRNG state length.
	*/
	readonly stateLength: number;

	/**
	* PRNG state size (in bytes).
	*/
	readonly byteLength: number;

	/**
	* Implements the `_read` method.
	*
	* @param size - number (of bytes) to read
	*/
	_read( size: number ): void; // tslint:disable-line: variable-name

	/**
	* Gracefully destroys a stream, providing backward compatibility.
	*
	* @param error - error
	*
	* @example
	* var stream = new RandomStream();
	* stream.on( 'error', onError );
	*
	* function onError( err ) {
	*    stream.destroy( err );
	* }
	*/
	destroy( error?: Error ): void;
}

/**
* Interface defining a stream constructor which is both "newable" and "callable".
*/
interface Constructor {
	/**
	* Stream constructor for generating a stream of pseudorandom numbers having integer values.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to strings (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before ceasing to generate additional pseudorandom numbers
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.iter - number of iterations
	* @param options.name - name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers (default: 'mt19937')
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.siter - number of iterations after which to emit the PRNG state
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns Stream instance
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
	* var RandomStream = randomStream;
	* var stream = new RandomStream( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*/
	new( options?: Options ): RandomStream; // newable

	/**
	* Stream constructor for generating a stream of pseudorandom numbers having integer values.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to strings (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before ceasing to generate additional pseudorandom numbers
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.iter - number of iterations
	* @param options.name - name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers (default: 'mt19937')
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.siter - number of iterations after which to emit the PRNG state
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns Stream instance
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
	* var stream = randomStream( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*/
	( options?: Options ): RandomStream; // callable

	/**
	* Returns a function for creating readable streams which generate pseudorandom numbers having integer values.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether a stream should operate in object mode (default: false)
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the maximum number of bytes to store in an internal buffer before ceasing to generate additional pseudorandom numbers
	* @param options.sep - separator used to join streamed data (default: '\n')
	* @param options.iter - number of iterations
	* @param options.name - name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers (default: 'mt19937')
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.siter - number of iterations after which to emit the PRNG state
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
	* var createStream = randomStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*/
	factory( options?: Options ): () => RandomStream;

	/**
	* Returns an "objectMode" readable stream for generating pseudorandom numbers having integer values.
	*
	* @param options - stream options
	* @param options.encoding - specifies how `Buffer` objects should be decoded to `strings` (default: null)
	* @param options.highWaterMark - specifies the maximum number of objects to store in an internal buffer before ceasing to generate additional pseudorandom numbers
	* @param options.iter - number of iterations
	* @param options.name - name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers (default: 'mt19937')
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @param options.siter - number of iterations after which to emit the PRNG state
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns Stream instance
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
	* var stream = randomStream.objectMode( opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	objectMode( options?: Options ): RandomStream;
}

/**
* Returns a readable stream for generating a stream of pseudorandom numbers having integer values.
*
* @param options - stream options
* @throws must provide valid options
* @throws must provide a valid state
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
* var RandomStream = randomStream;
* var stream = new RandomStream( opts );
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
* var opts = {
*     'iter': 10
* };
*
* var stream = randomStream( opts );
*
* stream.pipe( inspectStream( log )  );
*
* @example
* var opts = {
*     'sep': ',',
*     'objectMode': false,
*     'encoding': 'utf8',
*     'highWaterMark': 64
* };
*
* var createStream = randomStream.factory( opts );
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
* var stream = randomStream.objectMode( opts );
*
* stream.pipe( inspectStream.objectMode( log ) );
*/
declare var randomStream: Constructor;


// EXPORTS //

export = randomStream;
