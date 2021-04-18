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

// tslint:disable: no-unused-expression

import DebugStream = require( './index' );

/**
* Callback function invoked upon receiving data.
*
* @param debug - logging function
* @param chunk - data chunk
* @param idx - chunk index
*/
function clbk( debug: Function, chunk: any, idx: number ) {
	debug( 'Received a new chunk...' );
	debug( 'Chunk: %s', chunk );
	debug( 'Index: %s', idx );
}


// TESTS //

// The constructor returns a stream...
{
	new DebugStream(); // $ExpectType Transform
	new DebugStream( clbk ); // $ExpectType Transform
	new DebugStream( { 'objectMode': true } ); // $ExpectType Transform
	new DebugStream( { 'objectMode': true }, clbk ); // $ExpectType Transform
}

// The constructor is callable...
{
	const debugStream = DebugStream;
	debugStream(); // $ExpectType Transform
	debugStream( clbk ); // $ExpectType Transform
	debugStream( { 'objectMode': true } ); // $ExpectType Transform
	debugStream( { 'objectMode': true }, clbk ); // $ExpectType Transform
}

// The constructor has an `objectMode` method which returns a stream...
{
	DebugStream.objectMode(); // $ExpectType Transform
	DebugStream.objectMode( clbk ); // $ExpectType Transform
	DebugStream.objectMode( { 'allowHalfOpen': true } ); // $ExpectType Transform
	DebugStream.objectMode( { 'allowHalfOpen': true }, clbk ); // $ExpectType Transform
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = DebugStream.factory();
	f( 'my-stream', clbk ); // $ExpectType Transform

	f = DebugStream.factory( {} );
	f( 'my-stream', clbk ); // $ExpectType Transform

	f = DebugStream.factory( { 'objectMode': true } );
	f( 'my-stream', clbk ); // $ExpectType Transform
}

// The compiler throws an error if the constructor is provided a first argument which is not an options object or callback function...
{
	new DebugStream( 'abc', clbk ); // $ExpectError
	new DebugStream( 123, clbk ); // $ExpectError
	new DebugStream( true, clbk ); // $ExpectError
	new DebugStream( false, clbk ); // $ExpectError
	new DebugStream( [], clbk ); // $ExpectError
	new DebugStream( null, clbk ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a last argument which is not an options object or callback function...
{
	new DebugStream( {}, 'abc' ); // $ExpectError
	new DebugStream( {}, 123 ); // $ExpectError
	new DebugStream( {}, true ); // $ExpectError
	new DebugStream( {}, false ); // $ExpectError
	new DebugStream( {}, [] ); // $ExpectError
	new DebugStream( {}, {} ); // $ExpectError
	new DebugStream( {}, null ); // $ExpectError

	new DebugStream( 'abc' ); // $ExpectError
	new DebugStream( 123 ); // $ExpectError
	new DebugStream( true ); // $ExpectError
	new DebugStream( false ); // $ExpectError
	new DebugStream( [] ); // $ExpectError
	new DebugStream( null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a first argument which is not an options object or callback function...
{
	DebugStream.objectMode( 'abc', clbk ); // $ExpectError
	DebugStream.objectMode( 123, clbk ); // $ExpectError
	DebugStream.objectMode( true, clbk ); // $ExpectError
	DebugStream.objectMode( false, clbk ); // $ExpectError
	DebugStream.objectMode( [], clbk ); // $ExpectError
	DebugStream.objectMode( null, clbk ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a last argument which is not an options object or callback function...
{
	DebugStream.objectMode( {}, 'abc' ); // $ExpectError
	DebugStream.objectMode( {}, 123 ); // $ExpectError
	DebugStream.objectMode( {}, true ); // $ExpectError
	DebugStream.objectMode( {}, false ); // $ExpectError
	DebugStream.objectMode( {}, [] ); // $ExpectError
	DebugStream.objectMode( {}, {} ); // $ExpectError
	DebugStream.objectMode( {}, null ); // $ExpectError

	DebugStream.objectMode( 'abc' ); // $ExpectError
	DebugStream.objectMode( 123 ); // $ExpectError
	DebugStream.objectMode( true ); // $ExpectError
	DebugStream.objectMode( false ); // $ExpectError
	DebugStream.objectMode( [] ); // $ExpectError
	DebugStream.objectMode( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	DebugStream.factory( 'abc' ); // $ExpectError
	DebugStream.factory( 123 ); // $ExpectError
	DebugStream.factory( true ); // $ExpectError
	DebugStream.factory( false ); // $ExpectError
	DebugStream.factory( [] ); // $ExpectError
	DebugStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid number of arguments...
{
	let f = DebugStream.factory();
	f( 'my-stream', clbk, clbk ); // $ExpectError

	f = DebugStream.factory( {} );
	f( 'my-stream', clbk, clbk ); // $ExpectError

	f = DebugStream.factory( { 'objectMode': true } );
	f( 'my-stream', clbk, clbk ); // $ExpectError
}
