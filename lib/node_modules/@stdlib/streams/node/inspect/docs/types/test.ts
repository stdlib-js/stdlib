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

import InspectStream = require( './index' );

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
	new InspectStream( clbk ); // $ExpectType Transform
	new InspectStream( { 'objectMode': true }, clbk ); // $ExpectType Transform
}

// The constructor is callable...
{
	const inspectStream = InspectStream;
	inspectStream( clbk ); // $ExpectType Transform
	inspectStream( { 'objectMode': true }, clbk ); // $ExpectType Transform
}

// The constructor has an `objectMode` method which returns a stream...
{
	InspectStream.objectMode( clbk ); // $ExpectType Transform
	InspectStream.objectMode( { 'allowHalfOpen': true }, clbk ); // $ExpectType Transform
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = InspectStream.factory();
	f( clbk ); // $ExpectType Transform

	f = InspectStream.factory( {} );
	f( clbk ); // $ExpectType Transform

	f = InspectStream.factory( { 'objectMode': true } );
	f( clbk ); // $ExpectType Transform
}

// The compiler throws an error if the constructor is provided a first argument which is not an options object or callback function...
{
	new InspectStream( 'abc', clbk ); // $ExpectError
	new InspectStream( 123, clbk ); // $ExpectError
	new InspectStream( true, clbk ); // $ExpectError
	new InspectStream( false, clbk ); // $ExpectError
	new InspectStream( [], clbk ); // $ExpectError
	new InspectStream( null, clbk ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a last argument which is not a callback function...
{
	new InspectStream( {}, 'abc' ); // $ExpectError
	new InspectStream( {}, 123 ); // $ExpectError
	new InspectStream( {}, true ); // $ExpectError
	new InspectStream( {}, false ); // $ExpectError
	new InspectStream( {}, [] ); // $ExpectError
	new InspectStream( {}, {} ); // $ExpectError
	new InspectStream( {}, null ); // $ExpectError

	new InspectStream( 'abc' ); // $ExpectError
	new InspectStream( 123 ); // $ExpectError
	new InspectStream( true ); // $ExpectError
	new InspectStream( false ); // $ExpectError
	new InspectStream( [] ); // $ExpectError
	new InspectStream( {} ); // $ExpectError
	new InspectStream( null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a first argument which is not an options object or callback function...
{
	InspectStream.objectMode( 'abc', clbk ); // $ExpectError
	InspectStream.objectMode( 123, clbk ); // $ExpectError
	InspectStream.objectMode( true, clbk ); // $ExpectError
	InspectStream.objectMode( false, clbk ); // $ExpectError
	InspectStream.objectMode( [], clbk ); // $ExpectError
	InspectStream.objectMode( null, clbk ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a last argument which is not a callback function...
{
	InspectStream.objectMode( {}, 'abc' ); // $ExpectError
	InspectStream.objectMode( {}, 123 ); // $ExpectError
	InspectStream.objectMode( {}, true ); // $ExpectError
	InspectStream.objectMode( {}, false ); // $ExpectError
	InspectStream.objectMode( {}, [] ); // $ExpectError
	InspectStream.objectMode( {}, {} ); // $ExpectError
	InspectStream.objectMode( {}, null ); // $ExpectError

	InspectStream.objectMode( 'abc' ); // $ExpectError
	InspectStream.objectMode( 123 ); // $ExpectError
	InspectStream.objectMode( true ); // $ExpectError
	InspectStream.objectMode( false ); // $ExpectError
	InspectStream.objectMode( [] ); // $ExpectError
	InspectStream.objectMode( {} ); // $ExpectError
	InspectStream.objectMode( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	InspectStream.factory( 'abc' ); // $ExpectError
	InspectStream.factory( 123 ); // $ExpectError
	InspectStream.factory( true ); // $ExpectError
	InspectStream.factory( false ); // $ExpectError
	InspectStream.factory( [] ); // $ExpectError
	InspectStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid number of arguments...
{
	let f = InspectStream.factory();
	f(); // $ExpectError
	f( clbk, clbk ); // $ExpectError

	f = InspectStream.factory( {} );
	f(); // $ExpectError
	f( clbk, clbk ); // $ExpectError

	f = InspectStream.factory( { 'objectMode': true } );
	f(); // $ExpectError
	f( clbk, clbk ); // $ExpectError
}
