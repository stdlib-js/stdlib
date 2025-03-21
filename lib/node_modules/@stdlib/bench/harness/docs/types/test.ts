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

/* eslint-disable no-empty */

import bench = require( './index' );


// FUNCTIONS //

const benchmark = () => {};


// TESTS //

// The function returns a function...
{
	bench( 'beep', benchmark ); // $ExpectType Function
	bench( 'beep', { 'repeats': 5 }, benchmark ); // $ExpectType Function
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	bench( 123, benchmark ); // $ExpectError
	bench( true, benchmark ); // $ExpectError
	bench( false, benchmark ); // $ExpectError
	bench( null, benchmark ); // $ExpectError
	bench( [], benchmark ); // $ExpectError
	bench( {}, benchmark ); // $ExpectError
	bench( ( x: number ): number => x, benchmark ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not an options object or benchmark function with the expected signature...
{
	bench( 'beep', 123 ); // $ExpectError
	bench( 'beep', true ); // $ExpectError
	bench( 'beep', false ); // $ExpectError
	bench( 'beep', null ); // $ExpectError
	bench( 'beep', [] ); // $ExpectError
	bench( 'beep', ( x: number ): number => x ); // $ExpectError

	bench( 'beep', {}, 123 ); // $ExpectError
	bench( 'beep', {}, true ); // $ExpectError
	bench( 'beep', {}, false ); // $ExpectError
	bench( 'beep', {}, null ); // $ExpectError
	bench( 'beep', {}, [] ); // $ExpectError
	bench( 'beep', {}, {} ); // $ExpectError
	bench( 'beep', {}, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `skip` option which is not a boolean...
{
	bench( 'beep', { 'skip': 123 } ); // $ExpectError
	bench( 'beep', { 'skip': 'abc' } ); // $ExpectError
	bench( 'beep', { 'skip': null } ); // $ExpectError
	bench( 'beep', { 'skip': [] } ); // $ExpectError
	bench( 'beep', { 'skip': {} } ); // $ExpectError
	bench( 'beep', { 'skip': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `repeats` option which is not a number...
{
	bench( 'beep', { 'repeats': true } ); // $ExpectError
	bench( 'beep', { 'repeats': false } ); // $ExpectError
	bench( 'beep', { 'repeats': 'abc' } ); // $ExpectError
	bench( 'beep', { 'repeats': null } ); // $ExpectError
	bench( 'beep', { 'repeats': [] } ); // $ExpectError
	bench( 'beep', { 'repeats': {} } ); // $ExpectError
	bench( 'beep', { 'repeats': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `repeats` option which is not a number or null...
{
	bench( 'beep', { 'iterations': true } ); // $ExpectError
	bench( 'beep', { 'iterations': false } ); // $ExpectError
	bench( 'beep', { 'iterations': 'abc' } ); // $ExpectError
	bench( 'beep', { 'iterations': [] } ); // $ExpectError
	bench( 'beep', { 'iterations': {} } ); // $ExpectError
	bench( 'beep', { 'iterations': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `timeout` option which is not a number...
{
	bench( 'beep', { 'timeout': true } ); // $ExpectError
	bench( 'beep', { 'timeout': false } ); // $ExpectError
	bench( 'beep', { 'timeout': 'abc' } ); // $ExpectError
	bench( 'beep', { 'timeout': null } ); // $ExpectError
	bench( 'beep', { 'timeout': [] } ); // $ExpectError
	bench( 'beep', { 'timeout': {} } ); // $ExpectError
	bench( 'beep', { 'timeout': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	bench(); // $ExpectError
	bench( 'beep', {}, benchmark, 2 ); // $ExpectError
}

// Attached to the main export is a `createHarness` method which returns a Harness..
{
	bench.createHarness(); // $ExpectType Harness
	bench.createHarness( (): void => {} ); // $ExpectType Harness
	bench.createHarness( { 'autoclose': true }, (): void => {} ); // $ExpectType Harness
}

// The compiler throws an error if the `createHarness` method is provided an `autoclose` option which is not a boolean...
{
	bench.createHarness( { 'autoclose': 123 } ); // $ExpectError
	bench.createHarness( { 'autoclose': 'abc' } ); // $ExpectError
	bench.createHarness( { 'autoclose': null } ); // $ExpectError
	bench.createHarness( { 'autoclose': [] } ); // $ExpectError
	bench.createHarness( { 'autoclose': {} } ); // $ExpectError
	bench.createHarness( { 'autoclose': ( x: number ): number => x } ); // $ExpectError

	bench.createHarness( { 'autoclose': 123 }, (): void => {} ); // $ExpectError
	bench.createHarness( { 'autoclose': 'abc' }, (): void => {} ); // $ExpectError
	bench.createHarness( { 'autoclose': null }, (): void => {} ); // $ExpectError
	bench.createHarness( { 'autoclose': [] }, (): void => {} ); // $ExpectError
	bench.createHarness( { 'autoclose': {} }, (): void => {} ); // $ExpectError
	bench.createHarness( { 'autoclose': ( x: number ): number => x }, (): void => {} ); // $ExpectError
}

// The compiler throws an error if the `createHarness` method is provided a `callback` argument which is not a function...
{
	bench.createHarness( {}, 123 ); // $ExpectError
	bench.createHarness( {}, true ); // $ExpectError
	bench.createHarness( {}, false ); // $ExpectError
	bench.createHarness( {}, null ); // $ExpectError
	bench.createHarness( {}, [] ); // $ExpectError
	bench.createHarness( {}, {} ); // $ExpectError
	bench.createHarness( {}, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `createHarness` method is provided an incorrect number of arguments...
{
	bench.createHarness( {}, (): void => {}, {} ); // $ExpectError
}

// Attached to the main export is a `createStream` method which returns a stream..
{
	bench.createStream(); // $ExpectType Transform
	bench.createStream( {} ); // $ExpectType Transform
}

// The compiler throws an error if the `createStream` method is provided a `transform` option which is not a function...
{
	bench.createStream( { 'transform': false } ); // $ExpectError
	bench.createStream( { 'transform': true } ); // $ExpectError
	bench.createStream( { 'transform': 123 } ); // $ExpectError
	bench.createStream( { 'transform': 'abc' } ); // $ExpectError
	bench.createStream( { 'transform': null } ); // $ExpectError
	bench.createStream( { 'transform': [] } ); // $ExpectError
	bench.createStream( { 'transform': {} } ); // $ExpectError
}

// The compiler throws an error if the `createStream` method is provided a `flush` option which is not a function...
{
	bench.createStream( { 'flush': false } ); // $ExpectError
	bench.createStream( { 'flush': true } ); // $ExpectError
	bench.createStream( { 'flush': 123 } ); // $ExpectError
	bench.createStream( { 'flush': 'abc' } ); // $ExpectError
	bench.createStream( { 'flush': null } ); // $ExpectError
	bench.createStream( { 'flush': [] } ); // $ExpectError
	bench.createStream( { 'flush': {} } ); // $ExpectError
}

// The compiler throws an error if the `createStream` method is provided an `objectMode` option which is not a boolean...
{
	bench.createStream( { 'objectMode': 123 } ); // $ExpectError
	bench.createStream( { 'objectMode': 'abc' } ); // $ExpectError
	bench.createStream( { 'objectMode': null } ); // $ExpectError
	bench.createStream( { 'objectMode': [] } ); // $ExpectError
	bench.createStream( { 'objectMode': {} } ); // $ExpectError
	bench.createStream( { 'objectMode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `createStream` method is provided an `encoding` option which is neither a string nor null...
{
	bench.createStream( { 'encoding': 123 } ); // $ExpectError
	bench.createStream( { 'encoding': false } ); // $ExpectError
	bench.createStream( { 'encoding': true } ); // $ExpectError
	bench.createStream( { 'encoding': [] } ); // $ExpectError
	bench.createStream( { 'encoding': {} } ); // $ExpectError
	bench.createStream( { 'encoding': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `createStream` method is provided a `highWaterMark` option which is not a number...
{
	bench.createStream( { 'highWaterMark': true } ); // $ExpectError
	bench.createStream( { 'highWaterMark': false } ); // $ExpectError
	bench.createStream( { 'highWaterMark': 'abc' } ); // $ExpectError
	bench.createStream( { 'highWaterMark': null } ); // $ExpectError
	bench.createStream( { 'highWaterMark': [] } ); // $ExpectError
	bench.createStream( { 'highWaterMark': {} } ); // $ExpectError
	bench.createStream( { 'highWaterMark': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `createStream` method is provided an `allowHalfOpen` option which is not a boolean...
{
	bench.createStream( { 'allowHalfOpen': 123 } ); // $ExpectError
	bench.createStream( { 'allowHalfOpen': 'abc' } ); // $ExpectError
	bench.createStream( { 'allowHalfOpen': null } ); // $ExpectError
	bench.createStream( { 'allowHalfOpen': [] } ); // $ExpectError
	bench.createStream( { 'allowHalfOpen': {} } ); // $ExpectError
	bench.createStream( { 'allowHalfOpen': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `createStream` method is provided a `decodeStrings` option which is not a boolean...
{
	bench.createStream( { 'decodeStrings': 123 } ); // $ExpectError
	bench.createStream( { 'decodeStrings': 'abc' } ); // $ExpectError
	bench.createStream( { 'decodeStrings': null } ); // $ExpectError
	bench.createStream( { 'decodeStrings': [] } ); // $ExpectError
	bench.createStream( { 'decodeStrings': {} } ); // $ExpectError
	bench.createStream( { 'decodeStrings': ( x: number ): number => x } ); // $ExpectError
}
