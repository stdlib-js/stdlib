/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import readJSON = require( './index' );

/**
* Callback function.
*
* @param error - error object
* @param data - results
*/
function onLoad( error: Error | null, data?: Array<string> | Buffer ): void {
	if ( error || !data ) {
		throw error;
	}
}


// TESTS //

// The function does not have a return value...
{
	readJSON( 'package.json', onLoad ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a string, buffer, or file descriptor...
{
	readJSON( false, onLoad ); // $ExpectError
	readJSON( true, onLoad ); // $ExpectError
	readJSON( null, onLoad ); // $ExpectError
	readJSON( undefined, onLoad ); // $ExpectError
	readJSON( [], onLoad ); // $ExpectError
	readJSON( {}, onLoad ); // $ExpectError
	readJSON( ( x: number ): number => x, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function with the expected signature...
{
	readJSON( '/path/to/package.json', 'abc' ); // $ExpectError
	readJSON( '/path/to/package.json', 1 ); // $ExpectError
	readJSON( '/path/to/package.json', false ); // $ExpectError
	readJSON( '/path/to/package.json', true ); // $ExpectError
	readJSON( '/path/to/package.json', null ); // $ExpectError
	readJSON( '/path/to/package.json', undefined ); // $ExpectError
	readJSON( '/path/to/package.json', [] ); // $ExpectError
	readJSON( '/path/to/package.json', {} ); // $ExpectError
	readJSON( '/path/to/package.json', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object or string...
{
	readJSON( 'package.json', false, onLoad ); // $ExpectError
	readJSON( 'package.json', true, onLoad ); // $ExpectError
	readJSON( 'package.json', null, onLoad ); // $ExpectError
	readJSON( 'package.json', undefined, onLoad ); // $ExpectError
	readJSON( 'package.json', 123, onLoad ); // $ExpectError
	readJSON( 'package.json', [], onLoad ); // $ExpectError
	readJSON( 'package.json', ( x: number ): number => x, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided an `encoding` option which is not a string or null...
{
	readJSON( 'package.json', { 'encoding': 123 }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'encoding': true }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'encoding': false }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'encoding': [] }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'encoding': {} }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'encoding': ( x: number ): number => x }, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided a `flag` option which is not a string...
{
	readJSON( 'package.json', { 'flag': 123 }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'flag': true }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'flag': false }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'flag': null }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'flag': [] }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'flag': {} }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'flag': ( x: number ): number => x }, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided a `reviver` option which is not a function...
{
	readJSON( 'package.json', { 'reviver': 123 }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'reviver': 'abc' }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'reviver': true }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'reviver': false }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'reviver': null }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'reviver': [] }, onLoad ); // $ExpectError
	readJSON( 'package.json', { 'reviver': {} }, onLoad ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	readJSON(); // $ExpectError
	readJSON( 'C:\\foo\\bar\\baz\\package.json' ); // $ExpectError
}

// Attached to main export is a `sync` method which returns results or an error...
{
	readJSON.sync<Array<string>>( 'package.json' ); // $ExpectType Error | string[]
}

// The compiler throws an error if the `sync` method is provided a first argument which is not a string, buffer, or file descriptor...
{
	readJSON.sync( false ); // $ExpectError
	readJSON.sync( true ); // $ExpectError
	readJSON.sync( null ); // $ExpectError
	readJSON.sync( undefined ); // $ExpectError
	readJSON.sync( [] ); // $ExpectError
	readJSON.sync( {} ); // $ExpectError
	readJSON.sync( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an options argument which is not an object or string...
{
	readJSON.sync( 'package.json', null ); // $ExpectError
	readJSON.sync( 'package.json', true ); // $ExpectError
	readJSON.sync( 'package.json', false ); // $ExpectError
	readJSON.sync( 'package.json', 123 ); // $ExpectError
	readJSON.sync( 'package.json', [] ); // $ExpectError
	readJSON.sync( 'package.json', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an `encoding` option which is not a string or null...
{
	readJSON.sync( 'package.json', { 'encoding': 123 } ); // $ExpectError
	readJSON.sync( 'package.json', { 'encoding': true } ); // $ExpectError
	readJSON.sync( 'package.json', { 'encoding': false } ); // $ExpectError
	readJSON.sync( 'package.json', { 'encoding': [] } ); // $ExpectError
	readJSON.sync( 'package.json', { 'encoding': {} } ); // $ExpectError
	readJSON.sync( 'package.json', { 'encoding': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a `flag` option which is not a string...
{
	readJSON.sync( 'package.json', { 'flag': 123 } ); // $ExpectError
	readJSON.sync( 'package.json', { 'flag': true } ); // $ExpectError
	readJSON.sync( 'package.json', { 'flag': false } ); // $ExpectError
	readJSON.sync( 'package.json', { 'flag': null } ); // $ExpectError
	readJSON.sync( 'package.json', { 'flag': [] } ); // $ExpectError
	readJSON.sync( 'package.json', { 'flag': {} } ); // $ExpectError
	readJSON.sync( 'package.json', { 'flag': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided a `reviver` option which is not a function...
{
	readJSON.sync( 'package.json', { 'reviver': 'abc' } ); // $ExpectError
	readJSON.sync( 'package.json', { 'reviver': 123 } ); // $ExpectError
	readJSON.sync( 'package.json', { 'reviver': true } ); // $ExpectError
	readJSON.sync( 'package.json', { 'reviver': false } ); // $ExpectError
	readJSON.sync( 'package.json', { 'reviver': null } ); // $ExpectError
	readJSON.sync( 'package.json', { 'reviver': [] } ); // $ExpectError
	readJSON.sync( 'package.json', { 'reviver': {} } ); // $ExpectError
}

// The compiler throws an error if the `sync` method is provided an unsupported number of arguments...
{
	readJSON.sync(); // $ExpectError
}
