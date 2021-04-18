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

import InspectSinkStream = require( './index' );

/**
* Callback function invoked upon receiving data.
*
* @param chunk - data chunk
* @param idx - chunk index
*/
function clbk( chunk: any, idx: number ) {
	if ( !chunk || !idx ) {
		throw new Error( 'no arguments' );
	}
}


// TESTS //

// The constructor returns a stream...
{
	new InspectSinkStream( clbk ); // $ExpectType Writable
	new InspectSinkStream( { 'objectMode': true }, clbk ); // $ExpectType Writable
}

// The constructor is callable...
{
	const inspectSinkStream = InspectSinkStream;
	inspectSinkStream( clbk ); // $ExpectType Writable
	inspectSinkStream( { 'objectMode': true }, clbk ); // $ExpectType Writable
}

// The constructor has an `objectMode` method which returns a stream...
{
	InspectSinkStream.objectMode( clbk ); // $ExpectType Writable
	InspectSinkStream.objectMode( { 'decodeStrings': true }, clbk ); // $ExpectType Writable
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = InspectSinkStream.factory();
	f( clbk ); // $ExpectType Writable

	f = InspectSinkStream.factory( {} );
	f( clbk ); // $ExpectType Writable

	f = InspectSinkStream.factory( { 'objectMode': true } );
	f( clbk ); // $ExpectType Writable
}

// The compiler throws an error if the constructor is provided a first argument which is not an options object or callback function...
{
	new InspectSinkStream( 'abc', clbk ); // $ExpectError
	new InspectSinkStream( 123, clbk ); // $ExpectError
	new InspectSinkStream( true, clbk ); // $ExpectError
	new InspectSinkStream( false, clbk ); // $ExpectError
	new InspectSinkStream( [], clbk ); // $ExpectError
	new InspectSinkStream( null, clbk ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a last argument which is not a callback function...
{
	new InspectSinkStream( {}, 'abc' ); // $ExpectError
	new InspectSinkStream( {}, 123 ); // $ExpectError
	new InspectSinkStream( {}, true ); // $ExpectError
	new InspectSinkStream( {}, false ); // $ExpectError
	new InspectSinkStream( {}, [] ); // $ExpectError
	new InspectSinkStream( {}, {} ); // $ExpectError
	new InspectSinkStream( {}, null ); // $ExpectError

	new InspectSinkStream( 'abc' ); // $ExpectError
	new InspectSinkStream( 123 ); // $ExpectError
	new InspectSinkStream( true ); // $ExpectError
	new InspectSinkStream( false ); // $ExpectError
	new InspectSinkStream( [] ); // $ExpectError
	new InspectSinkStream( {} ); // $ExpectError
	new InspectSinkStream( null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a first argument which is not an options object or callback function...
{
	InspectSinkStream.objectMode( 'abc', clbk ); // $ExpectError
	InspectSinkStream.objectMode( 123, clbk ); // $ExpectError
	InspectSinkStream.objectMode( true, clbk ); // $ExpectError
	InspectSinkStream.objectMode( false, clbk ); // $ExpectError
	InspectSinkStream.objectMode( [], clbk ); // $ExpectError
	InspectSinkStream.objectMode( null, clbk ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a last argument which is not a callback function...
{
	InspectSinkStream.objectMode( {}, 'abc' ); // $ExpectError
	InspectSinkStream.objectMode( {}, 123 ); // $ExpectError
	InspectSinkStream.objectMode( {}, true ); // $ExpectError
	InspectSinkStream.objectMode( {}, false ); // $ExpectError
	InspectSinkStream.objectMode( {}, [] ); // $ExpectError
	InspectSinkStream.objectMode( {}, {} ); // $ExpectError
	InspectSinkStream.objectMode( {}, null ); // $ExpectError

	InspectSinkStream.objectMode( 'abc' ); // $ExpectError
	InspectSinkStream.objectMode( 123 ); // $ExpectError
	InspectSinkStream.objectMode( true ); // $ExpectError
	InspectSinkStream.objectMode( false ); // $ExpectError
	InspectSinkStream.objectMode( [] ); // $ExpectError
	InspectSinkStream.objectMode( {} ); // $ExpectError
	InspectSinkStream.objectMode( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	InspectSinkStream.factory( 'abc' ); // $ExpectError
	InspectSinkStream.factory( 123 ); // $ExpectError
	InspectSinkStream.factory( true ); // $ExpectError
	InspectSinkStream.factory( false ); // $ExpectError
	InspectSinkStream.factory( [] ); // $ExpectError
	InspectSinkStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid number of arguments...
{
	let f = InspectSinkStream.factory();
	f(); // $ExpectError
	f( clbk, clbk ); // $ExpectError

	f = InspectSinkStream.factory( {} );
	f(); // $ExpectError
	f( clbk, clbk ); // $ExpectError

	f = InspectSinkStream.factory( { 'objectMode': true } );
	f(); // $ExpectError
	f( clbk, clbk ); // $ExpectError
}
