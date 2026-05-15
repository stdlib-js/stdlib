/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import readNDJSON = require( './index' );

/**
* Callback function.
*
* @param error - error
* @param file - file path
* @returns results
*/
function onLoad( error: Error | null, data?: Array<null> ): null {
	if ( error || !data ) {
		throw error;
	}
	return null;
};


// TESTS //

// The function does not have a return value...
{
	readNDJSON<null>( 'file.ndjson', onLoad ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a string, buffer, or file descriptor...
{
	readNDJSON( false, onLoad ); // $ExpectError
	readNDJSON( true, onLoad ); // $ExpectError
	readNDJSON( null, onLoad ); // $ExpectError
	readNDJSON( undefined, onLoad ); // $ExpectError
	readNDJSON( [], onLoad ); // $ExpectError
	readNDJSON( {}, onLoad ); // $ExpectError
	readNDJSON( ( x: number ): number => x, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function with the expected signature...
{
	readNDJSON( '/path/to/file.ndjson', 'abc' ); // $ExpectError
	readNDJSON( '/path/to/file.ndjson', 1 ); // $ExpectError
	readNDJSON( '/path/to/file.ndjson', false ); // $ExpectError
	readNDJSON( '/path/to/file.ndjson', true ); // $ExpectError
	readNDJSON( '/path/to/file.ndjson', null ); // $ExpectError
	readNDJSON( '/path/to/file.ndjson', undefined ); // $ExpectError
	readNDJSON( '/path/to/file.ndjson', [] ); // $ExpectError
	readNDJSON( '/path/to/file.ndjson', {} ); // $ExpectError
	readNDJSON( '/path/to/file.ndjson', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object or string...
{
	readNDJSON( 'file.ndjson', false, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', true, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', null, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', undefined, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', 123, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', [], onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', ( x: number ): number => x, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided an `encoding` option which is not a string or null...
{
	readNDJSON( 'file.ndjson', { 'encoding': 123 }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'encoding': true }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'encoding': false }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'encoding': [] }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'encoding': {} }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'encoding': ( x: number ): number => x }, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided a `flag` option which is not a string...
{
	readNDJSON( 'file.ndjson', { 'flag': 123 }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'flag': true }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'flag': false }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'flag': null }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'flag': [] }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'flag': {} }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'flag': ( x: number ): number => x }, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided a `reviver` option which is not a function...
{
	readNDJSON( 'file.ndjson', { 'reviver': 123 }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'reviver': 'abc' }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'reviver': true }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'reviver': false }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'reviver': null }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'reviver': [] }, onLoad ); // $ExpectError
	readNDJSON( 'file.ndjson', { 'reviver': {} }, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	readNDJSON(); // $ExpectError
	readNDJSON( 'C:\\foo\\bar\\baz\\file.ndjson' ); // $ExpectError
}

// Attached to main export is a `sync` method which returns results or an error...
{
	readNDJSON.sync( 'file.ndjson' ); // $ExpectType Error | unknown[]
	readNDJSON.sync<string>( 'file.ndjson' ); // $ExpectType Error | string[]
	readNDJSON.sync<number>( 'file.ndjson' ); // $ExpectType Error | number[]
}

// The compiler throws an error if the `sync` method is provided a first argument which is not a string, buffer, or file descriptor...
{
	readNDJSON.sync( false ); // $ExpectError
	readNDJSON.sync( true ); // $ExpectError
	readNDJSON.sync( null ); // $ExpectError
	readNDJSON.sync( undefined ); // $ExpectError
	readNDJSON.sync( [] ); // $ExpectError
	readNDJSON.sync( {} ); // $ExpectError
	readNDJSON.sync( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an options argument which is not an object or string...
{
	readNDJSON.sync( 'file.ndjson', null ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', true ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', false ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', 123 ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', [] ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an `encoding` option which is not a string or null...
{
	readNDJSON.sync( 'file.ndjson', { 'encoding': 123 } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'encoding': true } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'encoding': false } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'encoding': [] } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'encoding': {} } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'encoding': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a `flag` option which is not a string...
{
	readNDJSON.sync( 'file.ndjson', { 'flag': 123 } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'flag': true } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'flag': false } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'flag': null } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'flag': [] } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'flag': {} } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'flag': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a `reviver` option which is not a function...
{
	readNDJSON.sync( 'file.ndjson', { 'reviver': 'abc' } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'reviver': 123 } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'reviver': true } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'reviver': false } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'reviver': null } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'reviver': [] } ); // $ExpectError
	readNDJSON.sync( 'file.ndjson', { 'reviver': {} } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	readNDJSON.sync(); // $ExpectError
}
