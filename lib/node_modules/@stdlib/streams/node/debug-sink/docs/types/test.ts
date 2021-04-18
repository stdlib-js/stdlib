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

import DebugSinkStream = require( './index' );

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
	new DebugSinkStream(); // $ExpectType Writable
	new DebugSinkStream( clbk ); // $ExpectType Writable
	new DebugSinkStream( { 'objectMode': true } ); // $ExpectType Writable
	new DebugSinkStream( { 'objectMode': true }, clbk ); // $ExpectType Writable
}

// The constructor is callable...
{
	const debugSinkStream = DebugSinkStream;
	debugSinkStream(); // $ExpectType Writable
	debugSinkStream( clbk ); // $ExpectType Writable
	debugSinkStream( { 'objectMode': true } ); // $ExpectType Writable
	debugSinkStream( { 'objectMode': true }, clbk ); // $ExpectType Writable
}

// The constructor has an `objectMode` method which returns a stream...
{
	DebugSinkStream.objectMode(); // $ExpectType Writable
	DebugSinkStream.objectMode( clbk ); // $ExpectType Writable
	DebugSinkStream.objectMode( { 'decodeStrings': true } ); // $ExpectType Writable
	DebugSinkStream.objectMode( { 'decodeStrings': true }, clbk ); // $ExpectType Writable
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = DebugSinkStream.factory();
	f( 'my-stream', clbk ); // $ExpectType Writable

	f = DebugSinkStream.factory( {} );
	f( 'my-stream', clbk ); // $ExpectType Writable

	f = DebugSinkStream.factory( { 'objectMode': true } );
	f( 'my-stream', clbk ); // $ExpectType Writable
}

// The compiler throws an error if the constructor is provided a first argument which is not an options object or callback function...
{
	new DebugSinkStream( 'abc', clbk ); // $ExpectError
	new DebugSinkStream( 123, clbk ); // $ExpectError
	new DebugSinkStream( true, clbk ); // $ExpectError
	new DebugSinkStream( false, clbk ); // $ExpectError
	new DebugSinkStream( [], clbk ); // $ExpectError
	new DebugSinkStream( null, clbk ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a last argument which is not an options object or callback function...
{
	new DebugSinkStream( {}, 'abc' ); // $ExpectError
	new DebugSinkStream( {}, 123 ); // $ExpectError
	new DebugSinkStream( {}, true ); // $ExpectError
	new DebugSinkStream( {}, false ); // $ExpectError
	new DebugSinkStream( {}, [] ); // $ExpectError
	new DebugSinkStream( {}, {} ); // $ExpectError
	new DebugSinkStream( {}, null ); // $ExpectError

	new DebugSinkStream( 'abc' ); // $ExpectError
	new DebugSinkStream( 123 ); // $ExpectError
	new DebugSinkStream( true ); // $ExpectError
	new DebugSinkStream( false ); // $ExpectError
	new DebugSinkStream( [] ); // $ExpectError
	new DebugSinkStream( null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a first argument which is not an options object or callback function...
{
	DebugSinkStream.objectMode( 'abc', clbk ); // $ExpectError
	DebugSinkStream.objectMode( 123, clbk ); // $ExpectError
	DebugSinkStream.objectMode( true, clbk ); // $ExpectError
	DebugSinkStream.objectMode( false, clbk ); // $ExpectError
	DebugSinkStream.objectMode( [], clbk ); // $ExpectError
	DebugSinkStream.objectMode( null, clbk ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a last argument which is not an options object or callback function...
{
	DebugSinkStream.objectMode( {}, 'abc' ); // $ExpectError
	DebugSinkStream.objectMode( {}, 123 ); // $ExpectError
	DebugSinkStream.objectMode( {}, true ); // $ExpectError
	DebugSinkStream.objectMode( {}, false ); // $ExpectError
	DebugSinkStream.objectMode( {}, [] ); // $ExpectError
	DebugSinkStream.objectMode( {}, {} ); // $ExpectError
	DebugSinkStream.objectMode( {}, null ); // $ExpectError

	DebugSinkStream.objectMode( 'abc' ); // $ExpectError
	DebugSinkStream.objectMode( 123 ); // $ExpectError
	DebugSinkStream.objectMode( true ); // $ExpectError
	DebugSinkStream.objectMode( false ); // $ExpectError
	DebugSinkStream.objectMode( [] ); // $ExpectError
	DebugSinkStream.objectMode( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	DebugSinkStream.factory( 'abc' ); // $ExpectError
	DebugSinkStream.factory( 123 ); // $ExpectError
	DebugSinkStream.factory( true ); // $ExpectError
	DebugSinkStream.factory( false ); // $ExpectError
	DebugSinkStream.factory( [] ); // $ExpectError
	DebugSinkStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid number of arguments...
{
	let f = DebugSinkStream.factory();
	f(); // $ExpectError
	f( 'my-stream', clbk, clbk ); // $ExpectError

	f = DebugSinkStream.factory( {} );
	f(); // $ExpectError
	f( 'my-stream', clbk, clbk ); // $ExpectError

	f = DebugSinkStream.factory( { 'objectMode': true } );
	f(); // $ExpectError
	f( 'my-stream', clbk, clbk ); // $ExpectError
}
